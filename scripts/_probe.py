import os, sys, paramiko, warnings, io
warnings.filterwarnings("ignore")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
PASSWORD = os.environ.get("DEPLOY_PASSWORD", "")
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect("159.223.140.36", username="root", password=PASSWORD, timeout=20, look_for_keys=False, allow_agent=False)
for cmd in [
    "ls -la /var/www/minecraft/screenshots/",
    "ls -la /root/minecraft-repo/client/public/screenshots/",
]:
    print(f">>> {cmd}")
    _, stdout, _ = client.exec_command(cmd, timeout=60)
    print(stdout.read().decode("utf-8", "replace").rstrip())
    print()
client.close()
