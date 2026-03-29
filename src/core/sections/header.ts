import type { CodeforcesUser, ThemePalette } from "../types";
import { Item } from "../item";
import { text, rect, group } from "../elements";

export function renderHeader(
  user: CodeforcesUser,
  theme: ThemePalette,
  x: number,
  y: number
): { item: Item; height: number } {
  const children: Item[] = [];
  const rankColor = user.rankColor || theme.title;
  let curY = y;

  // Display name
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");
  const displayName = fullName || user.handle;
  children.push(
    text(displayName, x, curY + 20, {
      size: 20,
      fill: rankColor,
      weight: "bold",
    })
  );
  curY += 28;

  // Rank badge
  if (user.rank) {
    const rankLabel = user.rank.charAt(0).toUpperCase() + user.rank.slice(1);
    const badgeW = rankLabel.length * 8 + 16;
    children.push(rect(x, curY, badgeW, 21, { fill: rankColor, rx: 4 }));
    children.push(
      text(rankLabel, x + 8, curY + 15, {
        size: 12,
        fill: "#ffffff",
        weight: "bold",
      })
    );
    curY += 28;
  }

  // @handle + country on same line
  const metaParts: string[] = [];
  if (fullName) metaParts.push(`@${user.handle}`);
  if (user.country) metaParts.push(user.country);
  if (user.organization) metaParts.push(user.organization);

  if (metaParts.length > 0) {
    children.push(
      text(metaParts.join("  ·  "), x, curY + 13, {
        size: 12,
        fill: theme.subtext,
      })
    );
    curY += 18;
  }

  const height = curY - y + 4;
  return { item: group(children), height };
}
