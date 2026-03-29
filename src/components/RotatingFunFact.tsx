"use client";

import { useEffect, useState } from "react";

const ONE_LINERS = [
  "there are only 10 types of people \u2014 those who understand binary, and those who don\u2019t.",
  "a competitive programmer\u2019s worst nightmare: an off-by-one error in their sleep schedule.",
  "i asked my rubber duck to debug my code. it just stared at me. still more helpful than the editorial.",
  "my code works on my machine. unfortunately, the judge uses a different one.",
];

export default function RotatingFunFact() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // pick a random starting index so it's not always the same on load
    setIndex(Math.floor(Math.random() * ONE_LINERS.length));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ONE_LINERS.length);
        setFade(true); // fade in
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-6">
      <div className="max-w-md mx-auto text-center">
        <p
          className="font-mono text-xs text-text-muted leading-relaxed transition-opacity duration-400"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <span className="text-accent-green">// fun fact:</span>{" "}
          {ONE_LINERS[index]}
        </p>
      </div>
    </section>
  );
}
