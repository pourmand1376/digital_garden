---
created: 2026-05-12 10:14:59
shamsi: 1405-02-22 10:14:59
calendar: "[[2026-05-12]]"
tags:
aliases:
title: Makefile to Justfile Migration
publish: true
---

```Makefile
.PHONY: warn
.DEFAULT_GOAL := warn

# This catches 'make <any-target>'
.DEFAULT:
	@$(MAKE) warn

# The logic (defined once, called once)
warn:
	@echo ""
	@echo "  ============================================================================"
	@echo "  🛑 THIS REPO HAS MIGRATED TO JUSTFILE"
	@echo "  ============================================================================"
	@echo "  The Makefile is kept ONLY for historical reference."
	@echo ""
	@echo "  Install just: https://just.systems/man/en/introduction.html"
	@echo "    brew install just"
	@echo ""
	@echo "  Run \`just\` or \`just help\` to see all available recipes."
	@echo "  ============================================================================"
	@echo ""
	@echo "  Attempting to list available 'just' recipes for you:"
	@echo ""
	@just --list || echo "  [!] 'just' is not installed. Please install it to continue."
	@echo ""
```


Also in github Gists:
https://gist.github.com/pourmand1376/4ef2d45927ed1510190c5dde959d019e

[Makefile for DBT Python Project](Makefile%20for%20DBT%20Python%20Project.md)
[caseyjust 🤖 Just a command runner](caseyjust%20🤖%20Just%20a%20command%20runner.md)
