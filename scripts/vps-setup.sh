#!/bin/bash
# VPS Bootstrap Script for minecraft-multiplayer
# Run as root on Ubuntu 24.04 LTS

set -e

echo "=== Installing Node.js 20 LTS ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "=== Installing PM2 ==="
npm install -g pm2

echo "=== Cloning repo ==="
cd /opt
git clone https://github.com/Clwee123/minecraft-multiplayer.git || (cd minecraft-multiplayer && git pull)
cd minecraft-multiplayer/server

echo "=== Installing server dependencies ==="
npm ci

echo "=== Building server ==="
npm run build

echo "=== Starting server with PM2 ==="
pm2 delete minecraft-server 2>/dev/null || true
pm2 start dist/index.js --name minecraft-server
pm2 save
pm2 startup

echo ""
echo "=== Server running on port 8471 ==="
echo "Test: curl http://localhost:8471"
echo ""
echo "=== Now set up GitHub Actions runner ==="
echo "Go to: https://github.com/Clwee123/minecraft-multiplayer/settings/actions/runners/new"
echo "Select: Linux x64"
echo "Copy and run the commands shown there"
echo "When asked for runner labels, enter: self-hosted"
echo ""
echo "After runner is configured, run: pm2 start 'actions-runner/run.sh' --name gh-runner"
