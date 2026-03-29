import type { CodeforcesUser, ThemePalette } from "../types";
import { Item } from "../item";
import { text, group } from "../elements";

interface StatRow {
  label: string;
  value: string;
  hideKey: string;
  accent?: boolean;
}

export function renderRatings(
  user: CodeforcesUser,
  theme: ThemePalette,
  x: number,
  y: number,
  hide: Set<string>,
  cardWidth?: number
): { item: Item; height: number } {
  const children: Item[] = [];
  const allRows: StatRow[] = [];

  // Row 1: Ratings
  if (user.rating !== null) {
    allRows.push({ label: "Current Rating", value: String(user.rating), hideKey: "currentRating", accent: true });
  }
  if (user.maxRating !== null) {
    allRows.push({ label: "Max Rating", value: String(user.maxRating), hideKey: "maxRating" });
  }
  // Row 2: Problems & Contests
  if (user.problemsSolved > 0) {
    allRows.push({ label: "Problems Solved", value: String(user.problemsSolved), hideKey: "problemsSolved" });
  }
  if (user.contestsParticipated > 0) {
    allRows.push({ label: "Contests", value: String(user.contestsParticipated), hideKey: "contests" });
  }
  // Row 3: Contribution & Friends
  if (user.contribution !== null) {
    allRows.push({ label: "Contribution", value: String(user.contribution), hideKey: "contribution" });
  }
  if (user.friendOfCount !== null) {
    allRows.push({ label: "Friend of", value: String(user.friendOfCount), hideKey: "friendOfCount" });
  }

  const visible = allRows.filter((r) => !hide.has(r.hideKey));
  if (visible.length === 0) return { item: group([]), height: 0 };

  const colWidth = ((cardWidth || 500) - x * 2) / 2;
  const ROW_H = 38;

  for (let i = 0; i < visible.length; i++) {
    const row = visible[i];
    const col = i % 2;
    const rowIdx = Math.floor(i / 2);
    const cx = x + col * colWidth;
    const cy = y + rowIdx * ROW_H;

    children.push(
      text(row.value, cx, cy + 16, {
        size: 16,
        fill: row.accent ? theme.accent : theme.text,
        weight: "bold",
      })
    );
    children.push(
      text(row.label, cx, cy + 30, {
        size: 10,
        fill: theme.subtext,
      })
    );
  }

  const totalRows = Math.ceil(visible.length / 2);
  return { item: group(children), height: totalRows * ROW_H };
}
