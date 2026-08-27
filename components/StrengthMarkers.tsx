export function StrengthMarkers({
  markers,
}: {
  markers: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-4">
      {markers.map((marker) => (
        <div key={marker.title} className="bg-ink p-6 md:p-7">
          <p className="font-heading text-sm font-semibold tracking-wide text-navy-300">
            {marker.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{marker.description}</p>
        </div>
      ))}
    </div>
  );
}
