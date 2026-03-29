export interface CFContestEntry {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

export interface CFSubmission {
  id: number;
  creationTimeSeconds: number;
  problem: { contestId: number; index: string; name: string; rating?: number; tags: string[] };
  verdict: string;
}

export interface SubmissionDay {
  date: string;
  value: number;
}

export interface CodeforcesUser {
  handle: string;
  firstName: string | null;
  lastName: string | null;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  maxRank: string | null;
  country: string | null;
  city: string | null;
  organization: string | null;
  contribution: number | null;
  friendOfCount: number | null;
  problemsSolved: number;
  contestsParticipated: number;
  rankColor: string;
  contestHistory: CFContestEntry[];
  submissionStats: SubmissionDay[];
}

/** Codeforces rank colors */
export const RANK_COLORS: Record<string, string> = {
  "newbie":                      "#808080",
  "pupil":                       "#008000",
  "specialist":                  "#03a89e",
  "expert":                      "#0000ff",
  "candidate master":            "#aa00aa",
  "master":                      "#ff8c00",
  "international master":        "#ff8c00",
  "grandmaster":                 "#ff0000",
  "international grandmaster":   "#ff0000",
  "legendary grandmaster":       "#ff0000",
};

export function getRankColor(rank: string | null): string {
  if (!rank) return "#808080";
  return RANK_COLORS[rank.toLowerCase()] || "#808080";
}

export interface ThemePalette {
  name: string;
  bg: string;
  border: string;
  title: string;
  text: string;
  subtext: string;
  accent: string;
  star: string;
  gridEmpty: string;
  gridFill: string;
  chartLine: string;
  chartDot: string;
}

export type Extension = "heatmap" | "contest";

export const CARD_FONTS: Record<string, string> = {
  roboto:            "'Roboto', sans-serif",
  "roboto mono":     "'Roboto Mono', monospace",
  "fira code":       "'Fira Code', monospace",
  "jetbrains mono":  "'JetBrains Mono', monospace",
  "source code pro": "'Source Code Pro', monospace",
  inter:             "'Inter', sans-serif",
  poppins:           "'Poppins', sans-serif",
  "space grotesk":   "'Space Grotesk', sans-serif",
  ubuntu:            "'Ubuntu', sans-serif",
  "ubuntu mono":     "'Ubuntu Mono', monospace",
};

export const DEFAULT_FONT = "roboto mono";

export interface CardConfig {
  username: string;
  theme: string;
  extension: Extension | null;
  hide: Set<string>;
  width: number;
  font: string;
  bgImage: string | null;
  colorOverrides: Partial<ThemePalette>;
}
