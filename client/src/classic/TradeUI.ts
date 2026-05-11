/**
 * Villager trade modal. A small fixed list of trades for now; the player
 * supplies the inputs from their inventory and gets the result. Client-side
 * only — multiplayer trade arbitration would need server validation we
 * don't have yet.
 */
import { Inventory } from "./Inventory";
import { getItemTile, getItemName, ITEMS } from "./Textures";
import { sound } from "./Sound";

interface Trade {
  inputs: Array<{ id: number; count: number }>;
  output: { id: number; count: number };
}

// IDs: 73 = wheat, 81 = emerald, 66 = bread, 50 = coal, 52 = iron ingot,
// 55 = wooden pickaxe, 58 = wooden sword, 62 = iron pickaxe, 63 = iron sword.
const TRADES: Trade[] = [
  { inputs: [{ id: 73, count: 6 }],                         output: { id: 81, count: 1 } },
  { inputs: [{ id: 81, count: 1 }],                         output: { id: 66, count: 4 } },
  { inputs: [{ id: 50, count: 4 }],                         output: { id: 81, count: 1 } },
  { inputs: [{ id: 81, count: 2 }],                         output: { id: 55, count: 1 } },
  { inputs: [{ id: 81, count: 4 }, { id: 52, count: 2 }],   output: { id: 62, count: 1 } },
  { inputs: [{ id: 81, count: 3 }],                         output: { id: 58, count: 1 } },
];

export class TradeUI {
  inv: Inventory;
  open = false;
  private panel: HTMLElement;
  private list: HTMLElement;
  onClose?: () => void;
  onChange?: () => void;

  constructor(inv: Inventory) {
    this.inv = inv;
    this.panel = document.getElementById("tradeUI")!;
    this.list  = document.getElementById("tradeList")!;
    document.getElementById("tradeClose")?.addEventListener("click", () => this.hide());
  }

  show() {
    this.open = true;
    this.panel.style.display = "flex";
    document.exitPointerLock();
    this.render();
  }

  hide() {
    this.open = false;
    this.panel.style.display = "none";
    this.onClose?.();
  }

  private hasEnough(trade: Trade): boolean {
    for (const i of trade.inputs) {
      if (this.inv.countOf(i.id) < i.count) return false;
    }
    return true;
  }

  private execute(trade: Trade) {
    if (!this.hasEnough(trade)) return;
    for (const i of trade.inputs) this.inv.remove(i.id, i.count);
    const leftover = this.inv.add(trade.output.id, trade.output.count);
    if (leftover > 0) {
      // No room — refund inputs.
      for (const i of trade.inputs) this.inv.add(i.id, i.count);
      // Take back the partial output if any was added.
      if (leftover < trade.output.count) this.inv.remove(trade.output.id, trade.output.count - leftover);
      return;
    }
    sound.craft();
    this.onChange?.();
    this.render();
  }

  private render() {
    this.list.innerHTML = "";
    for (const trade of TRADES) {
      this.list.appendChild(this.buildRow(trade));
    }
  }

  private iconDiv(id: number, count: number): string {
    const tile = getItemTile(id);
    const col = tile % 16, row = Math.floor(tile / 16);
    return `
      <div class="trade-icon" style="
        background-image:url(/terrain_atlas.png?v=5);
        background-position:-${col * 24}px -${row * 24}px;
      " title="${getItemName(id)}"></div>
      <span>×${count}</span>
    `;
  }

  private buildRow(trade: Trade): HTMLElement {
    const row = document.createElement("div");
    row.className = "trade-row";
    const cost = document.createElement("div");
    cost.className = "trade-cost";
    cost.innerHTML = trade.inputs.map(i => this.iconDiv(i.id, i.count)).join("<span>+</span>");
    row.appendChild(cost);
    const arrow = document.createElement("div");
    arrow.className = "trade-arrow"; arrow.textContent = "→";
    row.appendChild(arrow);
    const result = document.createElement("div");
    result.className = "trade-result";
    result.innerHTML = this.iconDiv(trade.output.id, trade.output.count);
    row.appendChild(result);
    const btn = document.createElement("button");
    btn.textContent = "Trade";
    btn.disabled = !this.hasEnough(trade);
    btn.addEventListener("click", () => this.execute(trade));
    row.appendChild(btn);
    return row;
  }
}
