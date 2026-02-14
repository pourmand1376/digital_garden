# Justfile for managing project tasks
# See https://github.com/casey/just for more information.

# Default recipe: show help message
@default:
  just --list

# serve the site (nvm use 24)
serve:
  @sed -i '' 's/Plugin\.CustomOgImages()/\/\/ Plugin.CustomOgImages()/' quartz.config.ts
  npx quartz build --serve
  @sed -i '' 's/\/\/ Plugin\.CustomOgImages()/Plugin.CustomOgImages()/' quartz.config.ts

# sync quartz (nvm use 24)
sync:
  @sed -i '' 's/\/\/ Plugin\.CustomOgImages()/Plugin.CustomOgImages()/' quartz.config.ts
  npx quartz sync

# sync obsidian
fetch:
  @sed -i '' 's/\/\/ Plugin\.CustomOgImages()/Plugin.CustomOgImages()/' quartz.config.ts
  cd scripts && uv run python obsidian-quartz-sync.py
  git status
