#!/bin/bash

# Add README first
git add README.md
git commit -m "docs: add comprehensive README"

# Add and commit key configuration files
git add package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs components.json
git commit -m "chore: add project configuration files"

# Add UI components individually (Buttons, Inputs, etc in ui folder)
find components/ui -type f -name "*.tsx" 2>/dev/null | while read file; do
    git add "$file"
    git commit -m "feat(ui): add $(basename "$file" .tsx) component"
done

# Add main components individually
find components -maxdepth 1 -type f -name "*.tsx" 2>/dev/null | while read file; do
    git add "$file"
    git commit -m "feat(components): implement $(basename "$file" .tsx) section"
done

# Add app structure and pages
find app -type f 2>/dev/null | while read file; do
    git add "$file"
    git commit -m "feat(app): add $(basename "$file")"
done

# Add remaining files (public assets, lib, hooks, etc and any missed config)
git add .
git commit -m "assets: add remaining project assets, utilities and styles"

# Push to remote
git branch -M main
git push -u origin main
