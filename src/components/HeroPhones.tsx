export default function HeroPhones() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb absolute -top-32 left-1/4 h-[640px] w-[640px] rounded-full bg-red/20 blur-[160px]" />
        <div className="hero-orb absolute -bottom-32 right-1/4 h-[520px] w-[520px] rounded-full bg-amber/15 blur-[160px]" style={{ animationDelay: "-4s" }} />
        <div className="hero-orb absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-coral/15 blur-[140px]" style={{ animationDelay: "-7s" }} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:items-center">
        <div className="slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-amber-2">
            <span className="grid h-2 w-2 place-items-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-amber-2 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-amber-2" />
            </span>
            App Store editor's pick · 2026
          </span>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="mt-7 text-[44px] font-extrabold leading-[0.96] tracking-[-0.02em] text-balance sm:text-[68px] lg:text-[84px]">
            Anything done.
            <br />
            <span className="bg-gradient-to-r from-red via-coral to-amber bg-clip-text text-transparent">Right now.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-ink-muted">
            Zolwo is the action app. Cabs, delivery, errands, repair, beauty, bookings — all in your pocket. Open the app, tap an action, watch it happen.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#download" className="inline-flex items-center gap-3 rounded-2xl bg-bg-2 px-5 py-3 ring-1 ring-rule-strong hover:bg-bg-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              <div className="text-left">
                <div className="text-[10px] text-ink-dim">Download on</div>
                <div className="text-[14px] font-bold leading-tight">App Store</div>
              </div>
            </a>
            <a href="#download" className="inline-flex items-center gap-3 rounded-2xl bg-bg-2 px-5 py-3 ring-1 ring-rule-strong hover:bg-bg-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 1l11 10.5L3 22V1zM5 4l7 7-2 2-5-9zm9 8l8 4-8 4-2-2 2-2z" /></svg>
              <div className="text-left">
                <div className="text-[10px] text-ink-dim">Get it on</div>
                <div className="text-[14px] font-bold leading-tight">Google Play</div>
              </div>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-[12.5px] text-ink-dim">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red" />4.8★ · 240K ratings</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber" />Live in 24 cities</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-coral" />First month · zero fee</span>
          </div>
        </div>

        {/* Three phone mockups stacked */}
        <div className="relative h-[560px] lg:h-[620px]">
          <div className="absolute left-0 top-10 float-a">
            <Phone tone="amber" header="Cabs" subheader="ETA · 4 min" lines={["EV6 · ★4.97 · ₹84", "Locked · pickup live"]} />
          </div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 float-b z-10">
            <Phone tone="red" header="Delivery" subheader="Hot · 22 min" lines={["Khichdi + raita · ₹148", "Driver · 0.6km away"]} big />
          </div>
          <div className="absolute right-0 top-16 float-c">
            <Phone tone="coral" header="Beauty" subheader="Today · 5pm" lines={["Salon Shanti · ★4.9", "Pre-paid · 60 min slot"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ tone, header, subheader, lines, big }: { tone: "red" | "amber" | "coral"; header: string; subheader: string; lines: string[]; big?: boolean }) {
  const grad = tone === "red" ? "from-red to-amber" : tone === "amber" ? "from-amber to-coral" : "from-coral to-red";
  return (
    <div className={`rounded-[36px] border border-rule-strong bg-bg-2 p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ${big ? "w-[280px]" : "w-[240px]"}`}>
      <div className="rounded-[28px] border border-rule bg-bg overflow-hidden">
        <div className={`bg-gradient-to-br ${grad} px-5 py-5 text-bg`}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">9:41</span>
            <span className="font-mono text-[10px] font-bold">●●● 87%</span>
          </div>
          <div style={{ fontFamily: "var(--font-display)" }} className={`mt-3 font-extrabold leading-tight ${big ? "text-[32px]" : "text-[24px]"}`}>
            {header}
          </div>
          <div className="mt-1 text-[12px] font-semibold opacity-85">{subheader}</div>
        </div>
        <div className="space-y-2 p-4">
          {lines.map((l, i) => (
            <div key={i} className="rounded-xl border border-rule bg-bg-3 px-3 py-2 text-[12.5px]">{l}</div>
          ))}
          <button className="mt-2 w-full rounded-xl bg-ink py-2.5 text-[12px] font-bold text-bg">View →</button>
        </div>
      </div>
    </div>
  );
}
