#!/usr/bin/env bash
# Renders the per-note social images with Playwright/Chromium (npm i -D playwright if missing).
# public/og.png, apple-touch-icon.png and favicon.svg come from the Lovable design handoff and are not rendered here.
set -euo pipefail
cd "$(dirname "$0")/../.."
node scripts/og/render.cjs
