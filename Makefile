# Define variables for paths and commands
SHELL := /bin/zsh
NPM := npm
NEXT := npx next
TAILWIND := npx tailwindcss

# Colors
GREEN = \033[0;32m
RED = \033[0;31m
RESET = \033[0m

define CHECK
	@echo -n "$1... "
	@$(2) > /dev/null 2>&1 && echo -e "$(GREEN)✓$(RESET)" || echo -e "$(RED)✗$(RESET)"
endef

# Source environment at the start of the shell
.ONESHELL:
SHELL := /bin/zsh
.SHELLFLAGS := -c 'source ~/.zshrc && exec zsh'

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev: project
	@$(NPM) run dev

# Target: Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf .next
	@rm -rf build
	@$(NPM) test -- -u
	@echo -e "$(GREEN)Cleaned up build artifacts$(RESET)"

# Target: Run project tasks
project: clean
	$(call CHECK, "Install dependencies", $(NPM) install)
	$(call CHECK, "Format code", npx prettier --write .)
	$(call CHECK, "Lint code", $(NPM) run lint -- --fix)
	$(call CHECK, "Run tests", $(NPM) run test -- -u)
	$(call CHECK, "Build project", $(NEXT) build)
	$(call CHECK, "Build Tailwind CSS", $(TAILWIND) -i ./app/globals.css --minify)

new-component:
	@$(NPM) run create-component