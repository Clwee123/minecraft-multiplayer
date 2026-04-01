export interface PlayerStats {
  kills: number;
  deaths: number;
  blocksPlaced: number;
  blocksBroken: number;
  mobsKilled: number;
  distanceTraveled: number;
  playTime: number; // seconds
  killsByType: Record<string, number>;
}

export class StatsTracker {
  private stats: PlayerStats = {
    kills: 0,
    deaths: 0,
    blocksPlaced: 0,
    blocksBroken: 0,
    mobsKilled: 0,
    distanceTraveled: 0,
    playTime: 0,
    killsByType: {},
  };

  increment(key: keyof PlayerStats, amount = 1) {
    if (key === "killsByType") return; // use recordMobKill instead
    (this.stats[key] as number) += amount;
  }

  recordMobKill(mobType: string) {
    this.stats.mobsKilled += 1;
    this.stats.killsByType[mobType] = (this.stats.killsByType[mobType] || 0) + 1;
  }

  get(key: keyof PlayerStats): number {
    return this.stats[key] as number;
  }

  getAll(): PlayerStats {
    return { ...this.stats, killsByType: { ...this.stats.killsByType } };
  }

  save() {
    try {
      localStorage.setItem("mc_stats", JSON.stringify(this.stats));
    } catch (e) {
      // Fail silently
    }
  }

  load() {
    try {
      const s = localStorage.getItem("mc_stats");
      if (s) {
        const parsed = JSON.parse(s);
        this.stats = { ...this.stats, ...parsed };
        if (!this.stats.killsByType) this.stats.killsByType = {};
      }
    } catch (e) {
      // Fail silently
    }
  }
}
