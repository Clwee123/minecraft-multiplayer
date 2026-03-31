export interface PlayerStats {
  kills: number;
  deaths: number;
  blocksPlaced: number;
  blocksBroken: number;
  mobsKilled: number;
  distanceTraveled: number;
  playTime: number; // seconds
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
  };

  increment(key: keyof PlayerStats, amount = 1) {
    this.stats[key] += amount;
  }

  get(key: keyof PlayerStats): number {
    return this.stats[key];
  }

  getAll(): PlayerStats {
    return { ...this.stats };
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
      if (s) this.stats = { ...this.stats, ...JSON.parse(s) };
    } catch (e) {
      // Fail silently
    }
  }
}
