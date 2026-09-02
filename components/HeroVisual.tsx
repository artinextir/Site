import { Logo } from "@/components/Logo";

const COLUMN_LABELS = ["A", "B", "C"];
const ROW_LABELS = ["1", "2", "3"];
const COLUMN_X = [70, 160, 250];
const ROW_Y = [60, 150, 240];

export function HeroVisual({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="registration-ticks relative aspect-square w-full overflow-hidden rounded-md border border-ink-border bg-ink-soft">
      <div className="tick-tr" />
      <div className="tick-bl" />

      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,242,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,242,238,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        viewBox="0 0 320 320"
        className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {/* Structural grid — the column/row labeling convention Revit and AutoCAD
            grids use, standing in for the generic "systems" glyph this replaced. */}
        {COLUMN_X.map((x, i) => (
          <line
            key={`col-${x}`}
            x1={x}
            y1={40}
            x2={x}
            y2={264}
            stroke="rgba(110,137,187,0.5)"
            strokeWidth="1"
            className="motion-safe:animate-[draw-line-y_650ms_ease-out_forwards]"
            style={{ transformBox: "view-box", transformOrigin: `${x}px 40px`, animationDelay: `${i * 90}ms` }}
          />
        ))}
        {ROW_Y.map((y, i) => (
          <line
            key={`row-${y}`}
            x1={40}
            y1={y}
            x2={280}
            y2={y}
            stroke="rgba(110,137,187,0.5)"
            strokeWidth="1"
            className="motion-safe:animate-[draw-line-x_650ms_ease-out_forwards]"
            style={{ transformBox: "view-box", transformOrigin: `40px ${y}px`, animationDelay: `${250 + i * 90}ms` }}
          />
        ))}

        <g
          className="motion-safe:animate-[bubble-in_300ms_ease-out_forwards]"
          style={{ opacity: 0, animationDelay: "620ms" }}
        >
          {COLUMN_X.map((x, i) => (
            <g key={`col-label-${x}`}>
              <circle cx={x} cy={26} r={10} fill="rgb(11,13,16)" stroke="rgba(110,137,187,0.7)" strokeWidth="1" />
              <text x={x} y={30} textAnchor="middle" fontSize="10" fill="rgba(147,170,209,0.9)">
                {COLUMN_LABELS[i]}
              </text>
            </g>
          ))}
          {ROW_Y.map((y, i) => (
            <g key={`row-label-${y}`}>
              <circle cx={26} cy={y} r={10} fill="rgb(11,13,16)" stroke="rgba(110,137,187,0.7)" strokeWidth="1" />
              <text x={26} y={y + 4} textAnchor="middle" fontSize="10" fill="rgba(147,170,209,0.9)">
                {ROW_LABELS[i]}
              </text>
            </g>
          ))}
        </g>

        {/* Dimension string along the bottom edge — extension lines start a
            few px clear of the grid lines they reference (never touching
            them), rise past the dimension line, with the customary 45° tick
            at every crossing instead of an arrow or a perpendicular hash.
            No invented number, purely geometric. */}
        <g>
          {COLUMN_X.map((x) => (
            <line
              key={`ext-${x}`}
              x1={x}
              y1={270}
              x2={x}
              y2={298}
              stroke="rgba(110,137,187,0.35)"
              strokeWidth="1"
              className="motion-safe:animate-[draw-line-y_500ms_ease-out_forwards]"
              style={{ transformBox: "view-box", transformOrigin: `${x}px 270px`, animationDelay: "560ms" }}
            />
          ))}
          <line
            x1={COLUMN_X[0]}
            y1={292}
            x2={COLUMN_X[2]}
            y2={292}
            stroke="rgba(110,137,187,0.6)"
            strokeWidth="1"
            className="motion-safe:animate-[draw-line-x_500ms_ease-out_forwards]"
            style={{ transformBox: "view-box", transformOrigin: `${COLUMN_X[0]}px 292px`, animationDelay: "560ms" }}
          />
          {COLUMN_X.map((x) => (
            <line
              key={`tick-${x}`}
              x1={x - 5}
              y1={297}
              x2={x + 5}
              y2={287}
              stroke="rgba(110,137,187,0.8)"
              strokeWidth="1.25"
            />
          ))}
        </g>

        {/* The one flagged mark — a clash/redline callout ending exactly on
            the B/2 grid intersection, leader at a true 45°. */}
        <g
          className="motion-safe:animate-[flag-in_260ms_ease-out_forwards]"
          style={{ opacity: 0, transformOrigin: "192px 118px", animationDelay: "820ms" }}
        >
          <line x1={184} y1={126} x2={160} y2={150} stroke="rgba(217,84,111,0.75)" strokeWidth="1" />
          <circle cx={192} cy={118} r={11} fill="rgba(217,84,111,0.12)" stroke="#d9546f" strokeWidth="1.5" />
          <line x1={187} y1={118} x2={197} y2={118} stroke="#d9546f" strokeWidth="1.5" />
          <line x1={192} y1={113} x2={192} y2={123} stroke="#d9546f" strokeWidth="1.5" />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
        <span className="flex items-center gap-2">
          <Logo className="h-5 w-auto text-white/70" />
          <span className="font-heading text-[11px] uppercase tracking-[0.2em] text-white/60">{label}</span>
        </span>
        <span className="text-[11px] tracking-wide text-white/50">{tag}</span>
      </div>
    </div>
  );
}
