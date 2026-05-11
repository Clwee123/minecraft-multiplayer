/**
 * Thin typed wrapper around the Bloxity/Legion SDK (`window.Legion.SDK`).
 *
 * The SDK script must be loaded by index.html before our bundle runs:
 *   <script src="https://bloxity.io/legion-sdk.min.js"></script>
 *
 * Most calls degrade gracefully when the SDK isn't available — we just return
 * sensible defaults so the game still works in pure standalone mode.
 *
 * Avatar/identity data flows like this:
 *
 *   Bloxity portal  ──auth──▶  SDK in browser  ──join options──▶  Colyseus room
 *                                                                       │
 *                                Three.js scene  ◀──schema state────────┘
 *                                (nametag with pfp)
 */

const SDK_LOAD_TIMEOUT_MS = 8000;
const GAME_SLUG = "minecraft";

declare global {
  interface Window {
    Legion?: any;
  }
}

export interface LegionUser {
  _id: string;
  username: string;
  displayName?: string;
  pfp?: string;
  email?: string;
}

export interface LegionAvatar {
  hatId?: string;
  backId?: string;
  skinId?: string;
  headId?: string;
  armLId?: string;
  armRId?: string;
  legLId?: string;
  legRId?: string;
  torsoId?: string;
}

export interface LegionFriend {
  _id: string;
  username: string;
  displayName?: string;
  pfp?: string;
  presence?: {
    status?: "online" | "in_game" | "offline";
    currentGame?: string;
    gameName?: string;
  };
}

/** Resolves when window.Legion.SDK is available, or rejects on timeout. */
function waitForSDK(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (window.Legion?.SDK) return resolve(window.Legion.SDK);
    const start = Date.now();
    const t = setInterval(() => {
      if (window.Legion?.SDK) {
        clearInterval(t);
        resolve(window.Legion.SDK);
      } else if (Date.now() - start > SDK_LOAD_TIMEOUT_MS) {
        clearInterval(t);
        reject(new Error("Legion SDK script never loaded"));
      }
    }, 100);
  });
}

class LegionWrapper {
  private sdk: any = null;
  private ready = false;
  private userChangedHandlers: Array<(u: LegionUser | null) => void> = [];
  private avatarChangedHandlers: Array<(a: LegionAvatar) => void> = [];

  /** Try to wire up the SDK. Resolves even if the SDK never loads. */
  async init(): Promise<void> {
    try {
      this.sdk = await waitForSDK();
      this.sdk.init({ gameSlug: GAME_SLUG });
      this.ready = true;
      // Re-broadcast SDK events through our own handler arrays so call sites
      // don't have to care whether the SDK is loaded yet.
      this.sdk.auth.onUserChanged((u: LegionUser | null) => {
        this.userChangedHandlers.forEach(h => h(u));
      });
      this.sdk.avatar.onAvatarChanged((a: LegionAvatar) => {
        this.avatarChangedHandlers.forEach(h => h(a));
      });
      console.log("[Legion] SDK initialised");
    } catch (e) {
      console.warn("[Legion] SDK unavailable, falling back to standalone mode", e);
    }
  }

  isReady(): boolean { return this.ready; }
  isLoggedIn(): boolean { return this.ready && !!this.sdk.auth.isLoggedIn(); }
  getUser(): LegionUser | null { return this.ready ? (this.sdk.auth.getUser() ?? null) : null; }
  getToken(): string | null { return this.ready ? (this.sdk.auth.getToken() ?? null) : null; }
  getAvatar(): LegionAvatar { return this.ready ? (this.sdk.avatar.getEquipped() ?? {}) : {}; }
  getProportions(): any { return this.ready ? (this.sdk.avatar.getProportions() ?? {}) : {}; }

  async showAuthPopup(): Promise<LegionUser | null> {
    if (!this.ready) return null;
    try { return await this.sdk.auth.showAuthPopup(); }
    catch (e) { console.warn("[Legion] showAuthPopup failed", e); return null; }
  }

  logout() { if (this.ready) this.sdk.auth.logout(); }

  onUserChanged(cb: (u: LegionUser | null) => void): () => void {
    this.userChangedHandlers.push(cb);
    // Fire once immediately with current value so callers get the initial state
    setTimeout(() => cb(this.getUser()), 0);
    return () => {
      this.userChangedHandlers = this.userChangedHandlers.filter(h => h !== cb);
    };
  }
  onAvatarChanged(cb: (a: LegionAvatar) => void): () => void {
    this.avatarChangedHandlers.push(cb);
    setTimeout(() => cb(this.getAvatar()), 0);
    return () => {
      this.avatarChangedHandlers = this.avatarChangedHandlers.filter(h => h !== cb);
    };
  }

  // ── Friends ──────────────────────────────────────────────────────────────
  async getFriends(): Promise<LegionFriend[]> {
    if (!this.ready || !this.isLoggedIn()) return [];
    try {
      const list = await this.sdk.social.getFriends();
      return Array.isArray(list) ? list : [];
    } catch (e) { console.warn("[Legion] getFriends failed", e); return []; }
  }

  async inviteFriend(userId: string): Promise<boolean> {
    if (!this.ready) return false;
    try { return !!(await this.sdk.social.inviteFriend(userId)); }
    catch (e) { console.warn("[Legion] inviteFriend failed", e); return false; }
  }

  // ── Game lifecycle ───────────────────────────────────────────────────────
  loadingStep(label: string) { if (this.ready) this.sdk.game.loadingStep(label); }
  loadingEnd()                { if (this.ready) this.sdk.game.loadingEnd(); }
  gameplayStart()             { if (this.ready) this.sdk.game.gameplayStart(); }
  gameplayEnd()               { if (this.ready) this.sdk.game.gameplayEnd(); }
  /** Tell the portal which Colyseus room we're in so friends' invites can join us. */
  updateRoom(roomId: string)  { if (this.ready) this.sdk.game.updateRoom(roomId || ""); }

  /** Build the `legion` field for Colyseus joinOrCreate options. */
  buildJoinPayload(): { legion?: any; name?: string } | null {
    const user = this.getUser();
    if (!user) return null;
    return {
      name: user.username,
      legion: {
        userId: user._id,
        username: user.username,
        displayName: user.displayName || user.username,
        pfp: user.pfp || "",
        token: this.getToken() || "",
        avatar: this.getAvatar(),
        proportions: this.getProportions(),
      },
    };
  }
}

export const Legion = new LegionWrapper();
