"use client";

import { useEffect, useMemo, useState } from "react";

const PHRASES = [
  "Clients",
  "Qualified Leads",
  "Booked Appointments",
  "Predictable Revenue",
  "Measurable Growth",
];

export default function RotatingHeadline() {
  const [i, setI] = useState(0);

  // Reserve width based on longest phrase (prevents layout shift)
  const maxLen = useMemo(
    () => Math.max(...PHRASES.map((p) => p.length)),
    []
  );

  useEffect(() => {
    const id = setInterval(
      () => setI((prev) => (prev + 1) % PHRASES.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-normal tracking-tight">
      {/* Top line */}
      <div className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-2 pb-2">
        Websites That Bring You
      </div>

      {/* Bottom line with rotating text */}
      <div className="relative" style={{ minHeight: '1.2em' }} aria-live="polite">
        {/* First phrase is also rendered as plain inline text for SEO/SSR */}
        <span className="sr-only">
          Clients, Qualified Leads, Booked Appointments, Predictable Revenue, and Measurable Growth
        </span>

        {PHRASES.map((p, idx) => (
          <div
            key={p}
            aria-hidden={idx !== i}
            className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent
              ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            {p}
          </div>
        ))}

        {/* Spacer to lock height */}
        <div className="invisible whitespace-nowrap">{PHRASES[0]}</div>
      </div>
    </h1>
  );
}
