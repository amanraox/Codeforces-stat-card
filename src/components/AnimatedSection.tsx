"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number; // ms between each child
}

export default function AnimatedSection({
  children,
  className = "",
  staggerChildren = false,
  staggerDelay = 120,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animated-in");

          if (staggerChildren) {
            const kids = el.querySelectorAll<HTMLElement>("[data-animate-child]");
            kids.forEach((child, i) => {
              child.style.transitionDelay = `${i * staggerDelay}ms`;
              child.classList.add("child-animated-in");
            });
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerChildren, staggerDelay]);

  return (
    <>
      <style>{`
        .animated-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animated-section.animated-in {
          opacity: 1;
          transform: translateY(0);
        }

        .animated-section [data-animate-child] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animated-section [data-animate-child].child-animated-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div ref={ref} className={`animated-section ${className}`}>
        {children}
      </div>
    </>
  );
}
