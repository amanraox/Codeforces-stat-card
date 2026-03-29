import type { CardConfig } from "./types";
import { fetchCodeforcesUser } from "./fetcher";
import { resolveTheme } from "./themes";
import { buildCard, buildErrorCard } from "./card";
import { getCache, setCache } from "../lib/cache";

export async function generateCard(config: CardConfig): Promise<string> {
  const cacheKey = buildCacheKey(config);
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const { user, error } = await fetchCodeforcesUser(config.username);

  if (error || !user) {
    return buildErrorCard(error || `User "${config.username}" not found`, config.width);
  }

  const theme = resolveTheme(config.theme, config.colorOverrides);
  const svg = buildCard(user, config, theme);

  setCache(cacheKey, svg);
  return svg;
}

function buildCacheKey(config: CardConfig): string {
  return `${config.username}:${config.theme}:${config.extension || "none"}:${Array.from(config.hide).sort().join(",")}:${config.width}:${config.font}:${config.bgImage || ""}`;
}
