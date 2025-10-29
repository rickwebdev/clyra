"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface InlineRotatingTextProps {
  phrases?: string[];
  intervalMs?: number;
  className?: string;
}

export default function InlineRotatingText({
  phrases = ["WordPress", "Next.js", "Shopify", "Contentful", "Sanity", "WooCommerce"],
  intervalMs = 2200,
  className = "",
}: InlineRotatingTextProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useRef(false);

  const longest = useMemo(
    () => phrases.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [phrases]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = m.matches;
    }
    if (prefersReducedMotion.current) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % phrases.length), intervalMs);
    return () => clearInterval(id);
  }, [phrases.length, intervalMs]);

  return (
    <span className={`relative inline-block ${className}`} aria-live="polite">
      <span className="sr-only">{phrases.join(", ")}</span>
      <span style={{ position: "relative", display: "inline-block", minWidth: `${longest.length}ch` }}>
        {phrases.map((p, i) => (
          <span
            key={p}
            aria-hidden={i !== index}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              whiteSpace: "nowrap",
              transition: "opacity 400ms ease, transform 400ms ease",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "translateY(0)" : "translateY(0.5em)",
            }}
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
          >
            {p}
          </span>
        ))}
        <span className="invisible" aria-hidden>
          {phrases[0]}
        </span>
      </span>
    </span>
  );
}


