"""One-shot VPS deploy.

Layout (discovered):
  - Repo:        /root/minecraft-repo/
  - Static root: /var/www/minecraft/  (nginx)
  - Server:      ts-node-dev under pm2 process `mc-server`

Usage:
  DEPLOY_PASSWORD=… python scripts/deploy.py
"""
import os, sys, paramiko, warnings, io
warnings.filterwarnings("ignore")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

PASSWORD = os.environ.get("DEPLOY_PASSWORD", "")
if not PASSWORD:
    print("DEPLOY_PASSWORD env var required", file=sys.stderr); sys.exit(1)

COMMANDS = [
    # Pull repo
    ("git pull",       "cd /root/minecraft-repo && git fetch --all && git reset --hard origin/main 2>&1 | tail -5"),
    # Build client
    ("client install", "cd /root/minecraft-repo/client && npm install --silent 2>&1 | tail -5"),
    ("client build",   "cd /root/minecraft-repo/client && npm run build 2>&1 | tail -10"),
    # Publish to nginx root
    ("publish",        "rm -rf /var/www/minecraft/assets && cp -r /root/minecraft-repo/client/dist/. /var/www/minecraft/ && ls /var/www/minecraft/assets/"),
    # Server: pm2 process runs from /root/minecraft-repo/server with ts-node-dev,
    # which auto-reloads on .ts changes — but restart anyway to be sure schema
    # changes (new `alive` field, etc.) are picked up cleanly.
    ("server install", "cd /root/minecraft-repo/server && npm install --silent 2>&1 | tail -5"),
    ("pm2 restart",    "pm2 restart mc-server 2>&1 | tail -3"),
    # Confirm
    ("nginx reload",   "nginx -t && nginx -s reload 2>&1"),
    ("live bundle",    "curl -s https://159.223.140.36.nip.io/ | grep -oE 'index-[a-zA-Z0-9_-]+\\.js' | head -1"),
    ("server health",  "curl -s http://localhost:8471/matchmake/lobby | head -c 200"),
]

print(f"[deploy] connecting")
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect("159.223.140.36", username="root", password=PASSWORD,
               timeout=20, look_for_keys=False, allow_agent=False)
print("[deploy] connected\n")

for label, cmd in COMMANDS:
    print(f"━━━ {label} ━━━")
    print(f"$ {cmd}")
    _, stdout, stderr = client.exec_command(cmd, timeout=600)
    out = stdout.read().decode("utf-8", errors="replace").rstrip()
    err = stderr.read().decode("utf-8", errors="replace").rstrip()
    rc = stdout.channel.recv_exit_status()
    if out: print(out)
    if err: print(f"[stderr] {err}")
    print(f"[exit={rc}]\n")

client.close()
print("[deploy] done")
