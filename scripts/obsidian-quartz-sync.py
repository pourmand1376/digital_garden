# taken from # https://github.com/AbstractGeek/my-dotfiles-macos/blob/main/bin/obsidian-quartz-sync.py

#!/usr/bin/env python3

## Constants
config_default = "~/gitfolder/digital_garden/scripts/obsidian-quartz-sync.yml"

## Imports
import os
import sys
from glob import glob
import yaml
import frontmatter # pip install python-frontmatter
import logging
import shutil
import subprocess
import argparse
# from pprint import pprint

## Functions
def has_non_ascii_filename(filepath):
    '''Check if filename contains non-ASCII characters'''
    filename = os.path.basename(filepath)
    try:
        filename.encode('ascii')
        return False
    except UnicodeEncodeError:
        return True

def find_publish_mds(md, ignore):
    '''find md files with publish - returns (should_publish, assets, error_message)'''
    # check if md file is not in one of the ignored folders
    md_parts = os.path.normpath(md).split(os.path.sep)
    for folder in ignore:
        if folder in md_parts:
            return None, None, None
    # load md file
    try:
        post = frontmatter.load(md)
    except Exception as e:
        return None, None, f"Error loading {os.path.basename(md)}: {e}"
    

    
    # check if publish and title validation
    has_publish = "publish" in post
    title_value = post.get("title", "") or ""
    has_title = "title" in post and title_value.strip() != ""

    # Skip if no publish field or none filled
    if not has_publish or not post["publish"]:
        return None, None, None
    
    # Error if publish is true and title is missing/empty
    if post["publish"] and not has_title:
        return None, None, f"Error in {os.path.basename(md)}: 'publish' is true but 'title' field is missing or empty"
        
    # Error if publish is true and title length < 4
    if post["publish"] and len(title_value) < 4:
        return None, None, f"Error in {os.path.basename(md)}: 'publish' is true but title too short ('{title_value}'), must be at least 4 characters"
    
        # Validate that frontmatter exists and has basic structure
    if not post.metadata:
        return None, None, f"Error in {os.path.basename(md)}: No frontmatter found - all notes must have frontmatter"
    
    # Validate that created field exists
    if "created" not in post or not post["created"]:
        return None, None, f"Error in {os.path.basename(md)}: 'created' field is required in frontmatter"

    return True, post["assets"] if "assets" in post else [], None


def find_asset(src, fn):
    '''find asset in md file - returns (asset_path, error_message)'''
    fn = fn[2:-2]
    files = [file for file in glob(os.path.join(src, "**", fn), recursive=True)]
    if len(files) == 0:
        return None, f"Asset {fn} not found"
    elif len(files) > 1:
        return None, f"Multiple assets found for {fn}"
    else:
        return files[0], None


def copy_public_text(src, dest):
    '''copy public text to destination'''
    with open(src, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # find start and stop of private text
    start = [i for i, e in enumerate(lines) if '%%private-start%%' in e]
    stop = [i for i, e in enumerate(lines) if '%%private-stop%%' in e]

    # make sure start and stop are in pairs
    if len(start) != len(stop):
        if len(start) - len(stop) > 1:
            logging.error(f"Private text start and stop not in pairs in {src}")
            return None
        else:
            stop.append(len(lines)-1)

    # if no private text, copy all
    if len(start) == 0:
        shutil.copy2(src, dest)
    else:
        for r in reversed(range(len(start))):
            lines[start[r]:stop[r]+1] = []    
        # write to destination
        with open(dest, "w", encoding='utf-8') as f:
            f.writelines(lines)

    return None

def copy_assets(src, dest, config):
    # check if asset is a pdf
    if (os.path.splitext(src)[1] == '.pdf'):
        # place watermarked pdfs at destination if config exists
        if config and "pdf" in config:
            watermark_pdf(src, dest, config["pdf"])
        else:
            shutil.copy2(src, dest)
    else:
        # place watermarked image if config exists
        if config and "img" in config:
            watermark_image(src, dest, config["img"])
        else:
            shutil.copy2(src, dest)

def watermark_pdf(src, dest, config):
    # use ghostscript to add a copyright to pdfs
    result = subprocess.run(
        [
            'gs',
            '-dBATCH',
            '-dNOPAUSE',
            '-q',
            '-sDEVICE=pdfwrite',
            '-o', dest,
            config["postscript"],
            src,
        ]
    )
    if result.stdout:
        logging.info("Ghostscript: %s" % (result.stdout))
    if result.stderr:
        logging.error("Ghostscript: %s" % (result.stderr))

def watermark_image(src, dest, config):
    # use imagemagick to add a copyright to images
    result = subprocess.run(
        [
            "magick",
            src,
            "-gravity",
            "SouthEast",
            "-append",
            "-strip",
            "-pointsize",
            "%%[fx:h*%s]" % (config["fontsize"]),
            "-annotate",
            config["offset"],
            config["copyright"],
            dest,
        ]
    )
    if result.stdout:
        logging.info("Imagemagick: %s" % (result.stdout))
    if result.stderr:
        logging.error("Imagemagick: %s" % (result.stderr))    


## Main
def main(config_file, debug=False):
    # Load config
    with open(config_file, "r", encoding="utf-8") as f:
        read_data = f.read()
    config = yaml.safe_load(read_data)

    # Set up logging to both file and console
    log_file = os.path.expanduser(config["log_file"])
    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)
    
    # File handler with timestamps (always debug level)
    file_handler = logging.FileHandler(log_file)
    file_handler.setLevel(logging.DEBUG)
    file_formatter = logging.Formatter("%(asctime)s - %(message)s")
    file_handler.setFormatter(file_formatter)
    
    # Console handler - level depends on debug flag
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG if debug else logging.WARNING)
    console_formatter = logging.Formatter("%(message)s")
    console_handler.setFormatter(console_formatter)
    
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)
    
    logging.info("Starting Obsidian-Quartz sync...")

    # Get source and destination folders
    src = os.path.expanduser(config["obsidian_folder"])
    dest = os.path.expanduser(config["quartz_folder"])
    asset_dir = os.path.expanduser(config["attachment_folder"])
    sync_files = []
    assets = []

    # First pass: Validate all files and collect errors
    logging.info(f"Scanning for markdown files in: {src}")
    md_files = glob(os.path.join(src, "**/*.md"), recursive=True)
    logging.info(f"Found {len(md_files)} markdown files")
    
    validation_errors = []
    processed = 0
    published = 0
    
    for md in md_files:
        processed += 1
        should_publish, asset, error_message = find_publish_mds(md, config["ignore_folders"])
        
        # Collect validation errors
        if error_message:
            validation_errors.append(error_message)
            continue
            
        if should_publish:
            # Check for non-ASCII characters only for files that would be published
            if has_non_ascii_filename(md):
                validation_errors.append(f"File with non-ASCII characters: {os.path.basename(md)}")
                continue
                
            published += 1
            logging.info(f"✓ Will publish: {os.path.basename(md)}")
            # Calculate relative path from source directory to preserve folder structure
            rel_path = os.path.relpath(md, src)
            dest_file = os.path.join(dest, rel_path)
            sync_files.append((md, dest_file))
            
            if asset:
                logging.info(f"  - Found {len(asset)} assets for {os.path.basename(md)}")
                for fn in asset:
                    asset_src, asset_error = find_asset(src, fn)
                    if asset_error:
                        validation_errors.append(asset_error)
                        continue
                    if asset_src:
                        # Check for non-ASCII characters in asset filename
                        if has_non_ascii_filename(asset_src):
                            validation_errors.append(f"Asset with non-ASCII characters: {os.path.basename(asset_src)}")
                            continue
                        # Calculate relative path for asset to preserve folder structure
                        asset_rel_path = os.path.relpath(asset_src, src)
                        asset_dest = os.path.join(dest, asset_rel_path)
                        assets.append((asset_src, asset_dest))
    
    # Check if there were any validation errors
    if validation_errors:
        logging.error("=" * 60)
        logging.error("VALIDATION ERRORS FOUND - STOPPING OPERATION")
        logging.error("=" * 60)
        for error in validation_errors:
            logging.error(f"❌ {error}")
        logging.error("=" * 60)
        logging.error(f"Found {len(validation_errors)} error(s). Fix these issues before running again.")
        logging.error("No files were modified.")
        sys.exit(1)
    
    logging.info(f"Validation complete: {published} files marked for publishing out of {processed} total")
    
    # Delete entire content folder and recreate it (only after validation passes)
    logging.info("Deleting entire content folder for fresh sync...")
    if os.path.exists(dest):
        shutil.rmtree(dest)
        logging.info(f"Deleted: {dest}")
    os.makedirs(dest, exist_ok=True)
    logging.info(f"Created: {dest}")

    # Copy all files (fresh sync every time)
    logging.info(f"Copying {len(sync_files)} markdown files...")
    copied_files = 0
    
    for src_file, dest_file in sync_files:
        if not src_file:
            continue
        if not os.path.exists(os.path.dirname(dest_file)):
            os.makedirs(os.path.dirname(dest_file))
        logging.info(f"Copying {os.path.basename(dest_file)}")
        copy_public_text(src_file, dest_file)
        copied_files += 1

    # Copy all assets (fresh sync every time)
    logging.info(f"Copying {len(assets)} assets...")
    copied_assets = 0
    
    for src_asset, dest_asset in assets:
        if not src_asset:
            continue
            
        if not os.path.exists(os.path.dirname(dest_asset)):
            os.makedirs(os.path.dirname(dest_asset))
        logging.info(f"Copying asset {os.path.basename(dest_asset)}")
        copy_assets(src_asset, dest_asset, config.get("watermark"))
        copied_assets += 1

    # Sync complete
    logging.info("Fresh sync complete!")
    logging.info(f"Files: {copied_files} copied")
    logging.info(f"Assets: {copied_assets} copied")

# get path
if __name__ == "__main__":
    # Set up argument parsing
    parser = argparse.ArgumentParser(description="Sync Obsidian notes to Quartz")
    parser.add_argument("config_path", nargs="?", default=config_default, 
                        help="Path to config file (default: %(default)s)")
    parser.add_argument("--debug", action="store_true", 
                        help="Enable debug output")
    
    args = parser.parse_args()
    config_file = os.path.expanduser(args.config_path)

    # check if config file exists
    if not os.path.exists(config_file):
        print(f"Config file does not exist: {config_file}")
        sys.exit(1)

    # run main
    main(config_file, debug=args.debug)