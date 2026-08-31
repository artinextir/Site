// The seamless-loop trick (duplicate the content, animate -50%) only works
// if a single copy is already at least as wide as the widest realistic
// viewport — otherwise the track runs out of content before the loop resets,
// which reads as the strip going blank. `items` here is a short word list,
// so it's repeated generously (must stay an even count for -50% to land on
// an exact copy boundary) rather than duplicated just once.
//
// The animation always travels -50% of the (now much wider) track in one
// DURATION, so scroll speed = trackWidth / (2 * DURATION). Quadrupling
// REPEAT_COUNT from the original 2 copies to 8 quadrupled that speed too —
// DURATION is scaled by the same factor to land back at the original pace.
const REPEAT_COUNT = 8;
// Tailwind's class scanner needs this as a literal string (it can't read a
// JS variable), so the value has to stay hardcoded here rather than built
// from a DURATION_S constant — see the comment above for how it was derived.
const DURATION_CLASS = "animate-[marquee_112s_linear_infinite]";

export function Marquee({ items }: { items: string[] }) {
  const loop = Array.from({ length: REPEAT_COUNT }, () => items).flat();

  return (
    <div dir="ltr" className="relative overflow-hidden border-y border-ink-border py-5">
      <div className={`flex w-max ${DURATION_CLASS} gap-10`}>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-heading whitespace-nowrap text-sm tracking-widest text-white/50"
          >
            {item}
            <span className="mx-10 text-navy-400">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
