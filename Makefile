# Define variables for paths and commands
SHELL := /bin/zsh
NPM := npm
NEXT := npx next
TAILWIND := npx tailwindcss

# Source environment at the start of the shell
.ONESHELL:
SHELL := /bin/zsh
.SHELLFLAGS := -c 'source ~/.zshrc && exec zsh'

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev: build
	@$(NPM) run dev

# Build: Clean build artifacts, install dependencies, run linting, build Next.js, and Tailwind for production
build: clean
	@$(NPM) install
	@npx prettier --write .
	@$(NPM) run lint -- --fix # Removed --config tsconfig.next.json
	@$(NPM) run test -- -u
	@$(NEXT) build
	@$(TAILWIND) -i ./app/globals.css --minify

# Clean build artifacts
clean:
	@rm -rf .next
	@rm -rf build
	@echo "Cleaned up build artifacts."

