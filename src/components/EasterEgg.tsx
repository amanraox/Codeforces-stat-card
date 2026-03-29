"use client";

import { useEffect, useState, useCallback } from "react";

const JOKES = [
  "TLE is not a verdict, it's a lifestyle.",
  "I don't always test my code, but when I do, I do it in production.",
  "My rating went up! ...oh wait, it was a virtual contest.",
  "99 bugs in the code, fix one down... 127 bugs in the code.",
  "O(n!) is technically still polynomial if n ≤ 20.",
  "Competitive programmers don't have bugs. They have undocumented features.",
  "Real programmers count from 0. CF programmers count from 1.",
  "\"Let me just try one more submission\" — me, 3 hours ago.",
];

// Konami code: ↑↑↓↓←→←→BA
const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

export default function EasterEgg() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [joke, setJoke] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setSequence((prev) => {
      const next = [...prev, e.keyCode].slice(-KONAMI.length);
      if (next.length === KONAMI.length && next.every((k, i) => k === KONAMI[i])) {
        setJoke(JOKES[Math.floor(Math.random() * JOKES.length)]);
        setTimeout(() => setJoke(null), 4000);
        return [];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Secret: click the title 5 times
  const handleTitleClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      setJoke(JOKES[Math.floor(Math.random() * JOKES.length)]);
      setTimeout(() => setJoke(null), 4000);
      setClickCount(0);
    }
  };

  return (
    <>
      {/* Invisible click target on the page title area */}
      <div
        className="absolute inset-0 cursor-default z-10"
        onClick={handleTitleClick}
      />

      {/* Toast */}
      {joke && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
          <div className="px-5 py-3 rounded-lg bg-surface-2 border border-cf-blue/30 shadow-lg shadow-cf-blue/10
            font-mono text-sm text-cf-cyan max-w-md text-center">
            <span className="text-accent-green mr-2">$</span>
            {joke}
          </div>
        </div>
      )}
    </>
  );
}
