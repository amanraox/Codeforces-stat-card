"use client";

import { useEffect, useRef, useState } from "react";

const RANKS = [
  { label: "Newbie", color: "#808080", max: 1200 },
  { label: "Pupil", color: "#008000", max: 1400 },
  { label: "Specialist", color: "#03a89e", max: 1600 },
  { label: "Expert", color: "#0000ff", max: 1900 },
  { label: "CM", color: "#aa00aa", max: 2100 },
  { label: "Master", color: "#ff8c00", max: 2300 },
  { label: "IM", color: "#ff8c00", max: 2400 },
  { label: "GM", color: "#ff0000", max: 2600 },
  { label: "IGM", color: "#ff0000", max: 3000 },
  { label: "LGM", color: "#ff0000", max: 4000 },
];

export default function RatingBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <div className="flex items-end gap-[3px] h-20">
        {RANKS.map((rank, i) => (
          <div key={rank.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm transition-all duration-700 ease-out"
              style={{
                background: rank.color,
                height: visible ? `${20 + (i / RANKS.length) * 60}px` : "2px",
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0.3,
              }}
            />
            <span className="text-[8px] font-mono text-text-muted leading-none">{rank.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
