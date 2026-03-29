import type { CodeforcesUser, CFContestEntry, CFSubmission, SubmissionDay } from "./types";
import { getRankColor } from "./types";

const CF_API = "https://codeforces.com/api";

interface CFApiResponse<T> {
  status: string;
  result: T;
  comment?: string;
}

interface CFUserInfo {
  handle: string;
  firstName?: string;
  lastName?: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
  country?: string;
  city?: string;
  organization?: string;
  contribution?: number;
  friendOfCount?: number;
  avatar?: string;
}

export async function fetchCodeforcesUser(
  handle: string
): Promise<{ user: CodeforcesUser | null; error: string | null }> {
  try {
    // Fetch user info + rating history in parallel
    const [infoRes, ratingRes, statusRes] = await Promise.all([
      fetch(`${CF_API}/user.info?handles=${encodeURIComponent(handle)}`),
      fetch(`${CF_API}/user.rating?handle=${encodeURIComponent(handle)}`),
      fetch(`${CF_API}/user.status?handle=${encodeURIComponent(handle)}&from=1&count=10000`),
    ]);

    if (!infoRes.ok) {
      if (infoRes.status === 400) return { user: null, error: "User not found" };
      return { user: null, error: "Failed to fetch from Codeforces API" };
    }

    const infoData: CFApiResponse<CFUserInfo[]> = await infoRes.json();
    if (infoData.status !== "OK" || !infoData.result?.length) {
      return { user: null, error: infoData.comment || "User not found" };
    }

    const info = infoData.result[0];

    // Rating history
    let contestHistory: CFContestEntry[] = [];
    if (ratingRes.ok) {
      const ratingData: CFApiResponse<CFContestEntry[]> = await ratingRes.json();
      if (ratingData.status === "OK") {
        contestHistory = ratingData.result;
      }
    }

    // Submissions → problems solved count + heatmap
    let problemsSolved = 0;
    const submissionStats: SubmissionDay[] = [];
    if (statusRes.ok) {
      const statusData: CFApiResponse<CFSubmission[]> = await statusRes.json();
      if (statusData.status === "OK") {
        const { solved, dayMap } = processSubmissions(statusData.result);
        problemsSolved = solved;
        // Convert dayMap to array
        for (const [date, value] of Object.entries(dayMap)) {
          submissionStats.push({ date, value });
        }
      }
    }

    const rank = info.rank || null;

    const user: CodeforcesUser = {
      handle: info.handle,
      firstName: info.firstName || null,
      lastName: info.lastName || null,
      rating: info.rating ?? null,
      maxRating: info.maxRating ?? null,
      rank,
      maxRank: info.maxRank || null,
      country: info.country || null,
      city: info.city || null,
      organization: info.organization || null,
      contribution: info.contribution ?? null,
      friendOfCount: info.friendOfCount ?? null,
      problemsSolved,
      contestsParticipated: contestHistory.length,
      rankColor: getRankColor(rank),
      contestHistory,
      submissionStats,
    };

    return { user, error: null };
  } catch (err) {
    console.error("Codeforces API error:", err);
    return { user: null, error: "Failed to fetch from Codeforces API" };
  }
}

function processSubmissions(submissions: CFSubmission[]): {
  solved: number;
  dayMap: Record<string, number>;
} {
  const solvedSet = new Set<string>();
  const dayMap: Record<string, number> = {};

  for (const sub of submissions) {
    // Count unique solved problems
    if (sub.verdict === "OK") {
      const key = `${sub.problem.contestId}-${sub.problem.index}`;
      solvedSet.add(key);
    }

    // Heatmap: count submissions per day
    const d = new Date(sub.creationTimeSeconds * 1000);
    const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    dayMap[dateKey] = (dayMap[dateKey] || 0) + 1;
  }

  return { solved: solvedSet.size, dayMap };
}
