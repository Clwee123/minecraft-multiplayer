"""Drop placeholder screenshots for the 3 new modes so the cards don't
show broken-image icons. User will replace with real screenshots later."""
import os, sys, paramiko, warnings, io
warnings.filterwarnings("ignore")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
PASSWORD = os.environ.get("DEPLOY_PASSWORD", "")
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect("159.223.140.36", username="root", password=PASSWORD, timeout=20, look_for_keys=False, allow_agent=False)
cmds = [
    # Shooter → reuse bedwars (similar tactical vibe)
    "cp /var/www/minecraft/screenshots/bedwars.jpg /var/www/minecraft/screenshots/shooter.jpg",
    # Infection → reuse hideandseek (also chase-based)
    "cp /var/www/minecraft/screenshots/hideandseek.jpg /var/www/minecraft/screenshots/infection.jpg",
    # Squid Games → reuse buildbattle (placeholder)
    "cp /var/www/minecraft/screenshots/buildbattle.jpg /var/www/minecraft/screenshots/squidgames.jpg",
    "ls -la /var/www/minecraft/screenshots/",
]
for cmd in cmds:
    print(f">>> {cmd}")
    _, stdout, stderr = client.exec_command(cmd, timeout=60)
    out = stdout.read().decode("utf-8", "replace").rstrip()
    err = stderr.read().decode("utf-8", "replace").rstrip()
    if out: print(out)
    if err: print(f"[stderr] {err}")
client.close()
