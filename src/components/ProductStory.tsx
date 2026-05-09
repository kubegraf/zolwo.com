export default function ProductStory() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">The shift</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[48px]">
            Five apps for five things?
            <br />
            <span className="text-ink-muted">Not anymore.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Column tone="muted" label="Before Zolwo" title="Tab between apps. Lose your day." rows={["Cab in one app, delivery in another", "Errands? Call cousins, friends, neighbours", "Different payments, different tracking", "Surge here, surcharge there", "No memory of last week"]} />
          <Column tone="brand" label="With Zolwo" title="One tap. Everything local. All in motion." rows={["Cabs, delivery, errands, bookings — one app", "Live tracking and one wallet", "Transparent surge, no nasty fees", "Saved addresses, repeat orders", "City-aware: knows your routine"]} />
        </div>
      </div>
    </section>
  );
}

function Column({ tone, label, title, rows }: { tone: "muted" | "brand"; label: string; title: string; rows: string[] }) {
  const isBrand = tone === "brand";
  return (
    <div className={`relative overflow-hidden rounded-2xl border p-7 sm:p-9 ${isBrand ? "border-brand/40 bg-gradient-to-br from-brand-soft to-transparent" : "border-border bg-bg-soft"}`}>
      {isBrand && <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />}
      <div className={`text-[11.5px] font-semibold uppercase tracking-[0.18em] ${isBrand ? "text-brand-bright" : "text-ink-dim"}`}>{label}</div>
      <h3 className={`mt-3 text-[22px] font-semibold leading-snug tracking-tight ${isBrand ? "text-ink" : "text-ink-muted"}`}>{title}</h3>
      <ul className="mt-6 space-y-3.5">
        {rows.map((r) => (
          <li key={r} className={`flex items-start gap-3 text-[14.5px] ${isBrand ? "text-ink" : "text-ink-muted"}`}>
            <span className={`mt-1 grid h-4 w-4 flex-none place-items-center rounded-full ${isBrand ? "bg-brand-bright/20 text-brand-bright" : "bg-bg-elev text-ink-dim"}`}>
              {isBrand ? (<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>) : (<span className="block h-1 w-2 rounded bg-current" />)}
            </span>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
