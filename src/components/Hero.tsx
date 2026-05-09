export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px] animate-drift" />
        <div className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
      </div>
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3.5 py-1.5 text-[12px] font-semibold text-brand-bright">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-bright opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-brand-bright" />
          </span>
          LIVE NOW IN 24 CITIES
        </div>
        <h1 className="mx-auto mt-7 max-w-4xl text-balance text-[44px] font-bold leading-[1.0] tracking-tight sm:text-[68px] md:text-[84px]">
          Get anything done —<br className="hidden sm:block" />
          in your city,{" "}
          <span className="bg-gradient-to-r from-brand via-brand-bright to-accent bg-clip-text text-transparent">right now.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-muted sm:text-[19px]">
          Zolwo is the action hub for cabs, deliveries, errands, bookings and more. One tap, one city, anything done. The faster city app.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-brand/40 transition-all hover:scale-[1.04]">
            Get the app
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-7 py-4 text-[15px] font-medium text-ink backdrop-blur-md hover:border-brand/60">See what's on tap</a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-7 sm:gap-y-3 text-[13px] font-medium text-ink-dim">
          <Action label="Cabs" />
          <Action label="Delivery" />
          <Action label="Errands" />
          <Action label="Bookings" />
          <Action label="Repairs" />
          <Action label="Beauty" />
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
        <div className="relative rounded-3xl border border-border-strong bg-bg-elev/70 p-2 backdrop-blur-xl shadow-2xl shadow-brand/20">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-accent/15 blur-xl" />
          <div className="rounded-2xl border border-border bg-bg-soft p-6 sm:p-8">
            <div className="flex items-center gap-2 pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-[11px] text-ink-dim">zolwo · home</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <Card emoji="🚕" title="Ride · 4 min" hint="$8 · ETA 13 min" tone="brand" />
              <Card emoji="🛵" title="Delivery · arriving" hint="2 stops · live track" tone="accent" />
              <Card emoji="🧹" title="House clean · today 4pm" hint="2hr slot · ₹599" tone="emerald" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Wide title="Friday plan" rows={["6:30pm · ride to gym", "7:30pm · grocery delivery", "9:00pm · ride home"]} />
              <Wide title="Saved spots" rows={["Home · Bandra W", "Office · BKC", "Mom's · Andheri E"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Action({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {label}
    </span>
  );
}

function Card({ emoji, title, hint, tone }: { emoji: string; title: string; hint: string; tone: "brand" | "accent" | "emerald" }) {
  const t = tone === "brand" ? "from-brand/20 to-brand/0 ring-brand/30" : tone === "accent" ? "from-accent/20 to-accent/0 ring-accent/30" : "from-emerald-500/15 to-emerald-500/0 ring-emerald-500/30";
  return (
    <div className={`rounded-xl bg-gradient-to-br ${t} ring-1 ring-inset p-4`}>
      <div className="text-[24px]">{emoji}</div>
      <div className="mt-2 text-[15px] font-semibold leading-snug text-ink">{title}</div>
      <div className="mt-1 text-[12.5px] text-ink-muted">{hint}</div>
    </div>
  );
}

function Wide({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{title}</div>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (<li key={r} className="flex items-center gap-2.5 text-[13.5px] text-ink-muted"><span className="h-1.5 w-1.5 rounded-full bg-brand-bright" />{r}</li>))}
      </ul>
    </div>
  );
}
