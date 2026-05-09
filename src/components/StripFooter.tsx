export default function StripFooter() {
  return (
    <footer className="border-t border-rule bg-bg-2/40 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-red to-amber">
              <span style={{ fontFamily: "var(--font-display)" }} className="text-[16px] font-extrabold text-bg">Z</span>
            </span>
            <span style={{ fontFamily: "var(--font-display)" }} className="text-[20px] font-bold tracking-tight">Zolwo</span>
          </div>
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-muted">
            The action app. Cabs, delivery, errands, repair, beauty, bookings — in one tap. Live in 24 cities.
          </p>
        </div>
        {[
          { t: "Riders", l: ["Open the app", "Cities", "Safety", "Promo codes"] },
          { t: "Earners", l: ["Drive", "Deliver", "Help center", "Earnings"] },
          { t: "Company", l: ["About", "Press", "Careers", "Blog"] },
          { t: "Legal", l: ["Terms", "Privacy", "Safety policy", "Earner agreement"] },
        ].map((c) => (
          <div key={c.t}>
            <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-dim">{c.t}</div>
            <ul className="mt-3 space-y-2">
              {c.l.map((x) => <li key={x}><a href="#" className="text-[13px] text-ink-muted hover:text-ink">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-rule px-5 pt-6 text-center font-mono text-[11px] text-ink-dim sm:px-8">
        © {new Date().getFullYear()} Zolwo · Bengaluru · Bangkok · Mexico City · 24 cities & growing
      </div>
    </footer>
  );
}
