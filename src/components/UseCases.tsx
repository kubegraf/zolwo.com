const CASES = [
  { title: "Students", body: "Late-night rides, food, study supplies, last-minute booking — without the budget shock.", items: ["Student-friendly fares", "Splittable rides", "Group orders"] },
  { title: "Working pros", body: "Get back hours every week. Errands, meetings, dinners, dry-cleaning — handled in commute minutes.", items: ["Saved routines", "Expense receipts", "Calendar smart-bookings"] },
  { title: "Families", body: "Track your kids' rides home. Order groceries during nap time. Book a babysitter on a thursday.", items: ["Family wallet", "Kid-safe ride flags", "Shared addresses"] },
  { title: "Expats & travellers", body: "Drop into a new city, hit Zolwo. Cabs, food, sim-cards, errands — local prices, English support.", items: ["Multi-city profiles", "Foreign cards work", "English chat 24/7"] },
];

export default function UseCases() {
  return (
    <section id="use" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">Who it's for</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Built for whatever your day looks like.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CASES.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-8 transition-all hover:border-accent/40">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand/0 via-brand/60 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-[22px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">{c.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {c.items.map((it) => (<li key={it} className="flex items-start gap-2 text-[13.5px] text-ink-muted"><span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />{it}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
