#!/bin/bash
# VPS Bootstrap Script for minecraft-multiplayer
# Run as root on Ubuntu 24.04 LTS

set -e

echo "=== Installing Node.js 20 LTS ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "=== Installing PM2 ==="
npm install -g pm2

echo "=== Installing nginx + certbot for WSS (SSL) ==="
apt-get install -y nginx certbot python3-certbot-nginx

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

echo "=== Configuring nginx reverse proxy for WSS ==="
cat > /etc/nginx/sites-available/minecraft << 'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:8471;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/minecraft /etc/nginx/sites-enabled/minecraft
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "=== Backend running! ==="
echo "WebSocket: ws://159.223.140.36  (port 80 via nginx → 8471)"
echo "Test: curl http://159.223.140.36"
echo ""
echo "=== OPTIONAL: Enable WSS with SSL ==="
echo "If you have a domain pointed at this IP, run:"
echo "  certbot --nginx -d yourdomain.com"
echo "Then update client to use: wss://yourdomain.com"
echo ""
echo "=== Now set up GitHub Actions runner ==="
echo "Go to: https://github.com/Clwee123/minecraft-multiplayer/settings/actions/runners/new"
echo "Select: Linux x64"
echo "Copy and run the commands shown there"
echo "When asked for runner labels, enter: self-hosted"
echo ""
echo "After runner is configured, run:"
echo "  cd /opt/actions-runner && pm2 start './run.sh' --name gh-runner"
