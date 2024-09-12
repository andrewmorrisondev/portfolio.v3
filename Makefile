# Define variables for paths and commands
SHELL := /bin/zsh
NPM := npm
REMIX := npx remix
TAILWIND := npx tailwindcss

# Source environment at the start of the shell
.ONESHELL:
SHELL := /bin/zsh
.SHELLFLAGS := -c 'source ~/.zshrc && exec zsh'

# Dev: Install dependencies, run the dev server and Tailwind in development mode
dev:
	@$(NPM) install
	@$(TAILWIND) -i ./app/tailwind.css -o ./public/build/tailwind.css --watch &
	@$(NPM) run dev

# Build: Clean build artifacts, install dependencies, run linting, build Remix, and Tailwind for production
build: clean
	@$(NPM) install
	@$(NPM) run lint -- --fix
	@$(REMIX) build
	@$(TAILWIND) -i ./app/tailwind.css -o ./public/build/tailwind.css --minify

# Clean build artifacts
clean:
	@rm -rf .vercel/output
	@rm -rf build
	@rm -rf public/build
	@echo "Cleaned up build artifacts."
