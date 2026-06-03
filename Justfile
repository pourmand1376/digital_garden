# Justfile for managing project tasks
# See https://github.com/casey/just for more information.

# Default recipe: show help message
@default:
  just --list

# install external plugins (generates .quartz/)
install:
  npx quartz plugin install

# serve the site (nvm use 24)
serve: install
  npx quartz build --serve

# sync quartz (nvm use 24)
sync: install
  npx quartz sync

# sync obsidian
fetch:
  cd scripts && uv run python obsidian-quartz-sync.py
  git status
