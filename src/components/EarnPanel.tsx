const STATS = [
  { v: "₹38,420", k: "weekly · top 10% drivers" },
  { v: "+24%", k: "vs. local incumbent" },
  { v: "Friday", k: "guaranteed payout day" },
  { v: "94%", k: "driver retention · 6 months" },
];

const BARS = [
  { d: "M", h: 60 }, { d: "T", h: 78 }, { d: "W", h: 92 }, { d: "T", h: 70 },
  { d: "F", h: 100 }, { d: "S", h: 88 }, { d: "S", h: 64 },
];

export default function EarnPanel() {
  return (
    <section id="earn" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:items-center">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber-2">// earn with us</span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px]">
            Drive. Deliver. <span className="bg-gradient-to-r from-amber to-coral bg-clip-text text-transparent">Run errands.</span>
          </h2>
          <p className="mt-5 max-w-prose text-[15.5px] leading-relaxed text-ink-muted">
            Zolwo pays a higher base, smarter routes, and a guaranteed Friday payout. The lowest commission of any major super-app in your city.
          </p>
          <a href="#download" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber to-coral px-5 py-3 text-[14px] font-bold text-bg shadow-[0_0_22px_rgba(245,158,11,0.40)] hover:from-amber-2 hover:to-coral-2">
            Open the earner app →
          </a>

          <div className="mt-9 grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div key={s.k} className="rounded-2xl border border-rule bg-bg-2 p-4">
                <div style={{ fontFamily: "var(--font-display)" }} className="text-[24px] font-extrabold leading-none">{s.v}</div>
                <div className="mt-1.5 text-[11.5px] uppercase tracking-[0.16em] text-ink-muted">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-rule-strong bg-bg-2 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-dim">DRIVER 201 · WEEK 19</div>
                <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[44px] font-extrabold leading-none bg-gradient-to-br from-red to-amber bg-clip-text text-transparent">
                  ₹38,420
                </div>
                <div className="mt-1 text-[12px] text-ink-muted">+18% vs. last week</div>
              </div>
              <span className="rounded-full border border-mint/40 bg-mint/15 px-2.5 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-mint">PAID FRI</span>
            </div>

            <div className="mt-6 grid grid-cols-7 items-end gap-2 h-40">
              {BARS.map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-md bg-gradient-to-t from-red to-amber bar-grow" style={{ height: `${b.h}%`, animationDelay: `${i * 100}ms` }} />
                  <span className="font-mono text-[10.5px] text-ink-muted">{b.d}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-rule pt-5">
              {[["Rides", "184"], ["Hours", "36"], ["Tips", "₹2,140"]].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">{k}</div>
                  <div className="mt-1 font-mono text-[18px] font-bold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
