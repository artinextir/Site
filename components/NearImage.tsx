"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * An image that is not requested until it is within a screen of the viewport.
 *
 * `loading="lazy"` is not the same thing. Chrome starts lazy images well
 * before they are visible — on a slow connection, a couple of thousand pixels
 * ahead — so an image one section below the hero is fetched during the first
 * load anyway, sharing a phone's bandwidth with the fonts the hero's text is
 * waiting on. Until it is near, this renders an empty box of the same aspect
 * and class, so the swap moves nothing.
 */
export function NearImage(props: ImageProps) {
  const box = useRef<HTMLSpanElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setNear(true);
        io.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (near) return <Image {...props} />;
  return (
    <span
      ref={box}
      aria-hidden="true"
      className={props.className}
      style={{ display: "block", aspectRatio: `${props.width} / ${props.height}` }}
    />
  );
}
