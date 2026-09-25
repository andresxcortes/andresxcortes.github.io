#!/usr/bin/env bash
# Renders the OG image and PNG icon with headless Chrome (macOS path by default).
# Override with CHROME=/path/to/chrome npm run og
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
# Headless Chrome enforces a ~500px minimum window, so the icon is rendered at 500px and scaled down.
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --window-size=1200,630 --screenshot="$PWD/../../public/og.png" "file://$PWD/og.html" 2>/dev/null
"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=3000 \
  --window-size=500,500 --screenshot="$PWD/icon-full.png" "file://$PWD/icon.html" 2>/dev/null
sips -z 180 180 "$PWD/icon-full.png" --out "$PWD/../../public/apple-touch-icon.png" >/dev/null
rm -f "$PWD/icon-full.png"
echo "Wrote public/og.png and public/apple-touch-icon.png"
