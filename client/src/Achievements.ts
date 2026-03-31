import * as THREE from "three";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

const ACHIEVEMENT_LIST: Achievement[] = [
  { id: "first_block",  name: "Getting Wood",    description: "Break your first block",     unlocked: false, icon: "🪵" },
  { id: "first_mob",   name: "Monster Hunter",  description: "Kill your first mob",        unlocked: false, icon: "⚔️" },
  { id: "first_craft", name: "Crafter",         description: "Open the crafting menu",     unlocked: false, icon: "🔨" },
  { id: "reach_night", name: "Night Owl",       description: "Survive your first night",   unlocked: false, icon: "🌙" },
  { id: "fish_catch",  name: "Gone Fishing",    description: "Catch your first fish",      unlocked: false, icon: "🎣" },
  { id: "level_five",  name: "Experienced",     description: "Reach level 5",              unlocked: false, icon: "⭐" },
  { id: "kill_zombie", name: "Undead Slayer",   description: "Kill 10 zombies",            unlocked: false, icon: "🧟" },
  { id: "kill_creeper",name: "Creeper Killer",  description: "Kill a creeper",             unlocked: false, icon: "💚" },
  { id: "kill_dragon", name: "Dragon Slayer",   description: "Defeat the Ender Dragon",   unlocked: false, icon: "🐉" },
  { id: "deep_dive",   name: "Deep Diver",      description: "Swim underwater",            unlocked: false, icon: "🏊" },
];

export class AchievementManager {
  private achievements: Map<string, Achievement>;
  private counters: Map<string, number> = new Map();
  onUnlock: ((achievement: Achievement) => void) | null = null;

  constructor() {
    this.achievements = new Map(ACHIEVEMENT_LIST.map(a => [a.id, { ...a }]));
  }

  trigger(id: string, increment = 1) {
    const ach = this.achievements.get(id);
    if (!ach || ach.unlocked) return;
    if (id === "kill_zombie") {
      const count = (this.counters.get("zombies_killed") ?? 0) + increment;
      this.counters.set("zombies_killed", count);
      if (count < 10) return;
    }
    ach.unlocked = true;
    this.onUnlock?.(ach);
  }

  getAll(): Achievement[] {
    return Array.from(this.achievements.values());
  }
}
