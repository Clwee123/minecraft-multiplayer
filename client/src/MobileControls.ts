/**
 * MobileControls — virtual joystick + touch-look + action buttons for mobile.
 * Injects into the same `keys` record that Player.ts reads, so no Player changes needed.
 */

export function isMobile(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export class MobileControls {
  private keys: Record<string, boolean>;
  private onBreak: () => void;
  private onPlace: () => void;

  // Joystick state
  private joyActive = false;
  private joyId = -1;
  private joyOriginX = 0;
  private joyOriginY = 0;
  private joyEl: HTMLElement;
  private joyThumbEl: HTMLElement;

  // Look state (right-side swipe)
  private lookId = -1;
  private lookLastX = 0;
  private lookLastY = 0;
  onLookDelta?: (dx: number, dy: number) => void;

  constructor(
    keys: Record<string, boolean>,
    onBreak: () => void,
    onPlace: () => void,
  ) {
    this.keys = keys;
    this.onBreak = onBreak;
    this.onPlace = onPlace;

    this.joyEl = this.createJoystick();
    this.joyThumbEl = this.joyEl.querySelector(".joy-thumb") as HTMLElement;
    this.createButtons();
    this.bindEvents();
  }

  private createJoystick(): HTMLElement {
    const el = document.createElement("div");
    el.id = "mobileJoy";
    el.innerHTML = `<div class="joy-thumb"></div>`;
    el.style.cssText = `
      position:fixed; bottom:120px; left:40px;
      width:110px; height:110px;
      background:rgba(255,255,255,0.12);
      border:2px solid rgba(255,255,255,0.3);
      border-radius:50%; z-index:500;
      touch-action:none; pointer-events:all;
    `;
    const thumb = el.querySelector(".joy-thumb") as HTMLElement;
    thumb.style.cssText = `
      position:absolute; top:50%; left:50%;
      transform:translate(-50%,-50%);
      width:44px; height:44px;
      background:rgba(255,255,255,0.4);
      border-radius:50%;
      transition:transform 0.05s;
    `;
    document.getElementById("hud")!.appendChild(el);
    return el;
  }

  private createButtons(): void {
    const hud = document.getElementById("hud")!;

    // Jump button
    const jump = document.createElement("button");
    jump.id = "mobileJump";
    jump.textContent = "⬆";
    jump.style.cssText = `
      position:fixed; bottom:120px; right:40px;
      width:64px; height:64px;
      background:rgba(255,255,255,0.18); border:2px solid rgba(255,255,255,0.35);
      border-radius:50%; color:#fff; font-size:1.4rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `;
    jump.addEventListener("touchstart", e => { e.preventDefault(); this.keys["Space"] = true; }, { passive: false });
    jump.addEventListener("touchend",   e => { e.preventDefault(); this.keys["Space"] = false; }, { passive: false });
    hud.appendChild(jump);

    // Break button
    const brk = document.createElement("button");
    brk.id = "mobileBreak";
    brk.textContent = "⛏";
    brk.style.cssText = `
      position:fixed; bottom:200px; right:120px;
      width:56px; height:56px;
      background:rgba(220,80,80,0.35); border:2px solid rgba(255,100,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `;
    brk.addEventListener("touchstart", e => { e.preventDefault(); this.onBreak(); }, { passive: false });
    hud.appendChild(brk);

    // Place button
    const place = document.createElement("button");
    place.id = "mobilePlace";
    place.textContent = "🧱";
    place.style.cssText = `
      position:fixed; bottom:200px; right:40px;
      width:56px; height:56px;
      background:rgba(80,180,80,0.35); border:2px solid rgba(100,220,100,0.5);
      border-radius:50%; color:#fff; font-size:1.2rem;
      z-index:500; touch-action:none; pointer-events:all; cursor:pointer;
    `;
    place.addEventListener("touchstart", e => { e.preventDefault(); this.onPlace(); }, { passive: false });
    hud.appendChild(place);
  }

  private bindEvents(): void {
    const canvas = document.querySelector("canvas")!;
    const HALF_W = window.innerWidth / 2;

    canvas.addEventListener("touchstart", e => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.clientX < HALF_W) {
          // Left side — joystick
          if (!this.joyActive) {
            this.joyActive = true;
            this.joyId = t.identifier;
            this.joyOriginX = t.clientX;
            this.joyOriginY = t.clientY;
          }
        } else {
          // Right side — look
          if (this.lookId === -1) {
            this.lookId = t.identifier;
            this.lookLastX = t.clientX;
            this.lookLastY = t.clientY;
          }
        }
      }
    }, { passive: false });

    canvas.addEventListener("touchmove", e => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.joyId) {
          this.updateJoystick(t.clientX, t.clientY);
        } else if (t.identifier === this.lookId) {
          const dx = t.clientX - this.lookLastX;
          const dy = t.clientY - this.lookLastY;
          this.lookLastX = t.clientX;
          this.lookLastY = t.clientY;
          this.onLookDelta?.(dx, dy);
        }
      }
    }, { passive: false });

    const endTouch = (e: TouchEvent) => {
      e.preventDefault();
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.joyId) {
          this.joyActive = false;
          this.joyId = -1;
          this.clearMovement();
          this.resetThumb();
        } else if (t.identifier === this.lookId) {
          this.lookId = -1;
        }
      }
    };
    canvas.addEventListener("touchend",    endTouch, { passive: false });
    canvas.addEventListener("touchcancel", endTouch, { passive: false });
  }

  private updateJoystick(cx: number, cy: number): void {
    const RADIUS = 42;
    const dx = cx - this.joyOriginX;
    const dy = cy - this.joyOriginY;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = len > 0 ? dx / len : 0;
    const ny = len > 0 ? dy / len : 0;
    const clamped = Math.min(len, RADIUS);
    const tx = nx * clamped;
    const ty = ny * clamped;

    this.joyThumbEl.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;

    const threshold = 12;
    this.keys["KeyW"] = ty < -threshold;
    this.keys["KeyS"] = ty > threshold;
    this.keys["KeyA"] = tx < -threshold;
    this.keys["KeyD"] = tx > threshold;
  }

  private clearMovement(): void {
    this.keys["KeyW"] = false;
    this.keys["KeyS"] = false;
    this.keys["KeyA"] = false;
    this.keys["KeyD"] = false;
  }

  private resetThumb(): void {
    this.joyThumbEl.style.transform = "translate(-50%, -50%)";
  }

  show(): void {
    const ids = ["mobileJoy", "mobileJump", "mobileBreak", "mobilePlace"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) el.style.display = "";
    }
  }

  hide(): void {
    const ids = ["mobileJoy", "mobileJump", "mobileBreak", "mobilePlace"];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    }
  }
}
