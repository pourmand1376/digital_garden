.ONESHELL:


.PHONY: help
help: ## show all commands
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-30s\033[0m %s\n", $$1, $$2}'

serve: ## serve the site
	npx quartz build --serve

sync: ## sync quartz
	npx quartz sync

fetch: ## sync obsidian
	python scripts/obsidian-quartz-sync.py
