const NUMBERS = [
  { v: 4.8, k: "STORE RATING", suffix: "★" },
  { v: 24, k: "CITIES LIVE" },
  { v: 2.4, k: "ACTIONS / MIN", suffix: "K" },
  { v: 3, k: "MEDIAN PICKUP", suffix: "min" },
];

export default function LiveCity() {
  return (
    <section className="relative border-y border-rule bg-bg-2/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-6 px-5 sm:px-8">
        {NUMBERS.map((n) => (
          <div key={n.k} className="flex items-baseline gap-3">
            <span style={{ fontFamily: "var(--font-display)" }} className="text-[32px] font-extrabold leading-none tracking-tight bg-gradient-to-br from-red to-amber bg-clip-text text-transparent">
              {n.v}{n.suffix}
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">{n.k}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
