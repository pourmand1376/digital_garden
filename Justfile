# Justfile for managing project tasks
# See https://github.com/casey/just for more information.

# Default recipe: show help message
@default:
  just --list

# serve the site (nvm use 24)
serve: 
  npx quartz build --serve

# sync quartz (nvm use 24)
sync: 
  npx quartz sync

# sync obsidian
fetch: 
  cd scripts && uv run python obsidian-quartz-sync.py
  git status
