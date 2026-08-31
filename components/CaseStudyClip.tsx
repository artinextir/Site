"use client";

import { useEffect, useRef, useState } from "react";

export function CaseStudyClip({ src, poster }: { src: string; poster: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-md border border-ink-border bg-ink-soft">
      {active && !reducedMotion ? (
        <video
          className="aspect-video w-full object-cover"
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          src={src}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" aria-hidden="true" className="aspect-video w-full object-cover" />
      )}
    </div>
  );
}
