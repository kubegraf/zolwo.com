const PLANS = [
  { tier: "Free", price: "$0", period: "use anytime", blurb: "No subscription. Pay only when you book.", features: ["All actions available", "Live tracking + receipts", "Family share", "24/7 in-app help"], cta: "Open the app", highlighted: false },
  { tier: "Plus", price: "$4.99", period: "per month", blurb: "Faster rides, lower fees, surprise perks.", features: ["10% off most actions", "Priority match in surge", "Free delivery to 3 stops", "Member-only deals"], cta: "Go Plus", highlighted: true },
  { tier: "Family", price: "$9.99", period: "per month", blurb: "Up to 5 members, one wallet, one tap.", features: ["Up to 5 members", "Family wallet + budgets", "Kid-safe ride flags", "Shared addresses + perks"], cta: "Go Family", highlighted: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">Pricing</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Tap to use. Subscribe to save.</h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-2xl border p-7 ${p.highlighted ? "border-brand bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft shadow-2xl shadow-brand/20" : "border-border bg-bg-soft"}`}>
              {p.highlighted && (<span className="absolute right-5 top-5 rounded-full border border-brand/40 bg-brand-soft px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand-bright">Best value</span>)}
              <div className="text-[14px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{p.tier}</div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-[42px] font-bold tracking-tight">{p.price}</span>
                <span className="text-[13px] text-ink-muted">{p.period}</span>
              </div>
              <p className="mt-2.5 text-[14.5px] text-ink-muted">{p.blurb}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-none text-brand-bright"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-semibold transition-transform hover:scale-[1.01] ${p.highlighted ? "bg-brand text-white" : "border border-border-strong bg-surface text-ink"}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
