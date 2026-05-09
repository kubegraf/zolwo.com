interface Plan { tier: string; price: string; sub: string; lines: string[]; cta: string; tone: string; star?: boolean }

const PLANS: Plan[] = [
  { tier: "Tap & Go", price: "Free", sub: "always · pay-per-action", lines: ["All actions unlocked", "First-month: zero platform fee", "Live tracking + receipts", "24/7 in-app help"], cta: "Open the app", tone: "border-rule bg-bg-2" },
  { tier: "Plus", price: "₹99", sub: "/ month · faster, fewer fees", lines: ["10% off all actions", "Priority during surge", "Free delivery to 3 stops", "Member-only deals"], cta: "Go Plus", tone: "border-amber bg-gradient-to-br from-amber/15 via-bg-2 to-bg-2 shadow-[0_30px_80px_-30px_rgba(245,158,11,0.5)]", star: true },
  { tier: "Family", price: "₹199", sub: "/ month · up to 5 members", lines: ["Family wallet", "Kid-safe ride flags", "Saved addresses + repeats", "Family analytics"], cta: "Go Family", tone: "border-rule bg-bg-2" },
];

export default function PlanCards() {
  return (
    <section id="plans" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber-2">// plans</span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px]">
            Tap to use. <span className="bg-gradient-to-r from-red to-amber bg-clip-text text-transparent">Subscribe to save.</span>
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.tier} className={`relative overflow-hidden rounded-3xl border p-7 ${p.tone}`}>
              {p.star && (<span className="absolute right-5 top-5 rounded-full border border-amber/40 bg-amber/15 px-2.5 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-amber-2">Best value</span>)}
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{p.tier}</div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span style={{ fontFamily: "var(--font-display)" }} className="text-[44px] font-extrabold leading-none tracking-[-0.02em]">{p.price}</span>
                <span className="text-[13px] text-ink-muted">{p.sub}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {p.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-[14px]">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-red" />
                    {l}
                  </li>
                ))}
              </ul>
              <a href="#download" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold ${
                p.star ? "bg-gradient-to-r from-red to-amber text-bg" : "border border-rule-strong bg-bg-3 text-ink"
              }`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
