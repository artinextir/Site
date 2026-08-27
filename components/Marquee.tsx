export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ink-border py-5">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
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
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
