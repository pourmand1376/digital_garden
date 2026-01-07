.ONESHELL:


.PHONY: help
help: ## show all commands
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-30s\033[0m %s\n", $$1, $$2}'

serve: ## serve the site
	#nvm use 24
	npx quartz build --serve

sync: ## sync quartz
	#nvm use 24
	npx quartz sync

fetch: ## sync obsidian
	uv run python scripts/obsidian-quartz-sync.py
	git status
