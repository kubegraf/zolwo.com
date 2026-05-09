const STATS = [
  { v: "2.4M+", k: "actions/month" },
  { v: "4.8★", k: "average rating" },
  { v: "<3 min", k: "median pickup" },
  { v: "24", k: "cities live" },
];

const QUOTES = [
  { quote: "I deleted four apps. Zolwo just does it all — ride, food, errand. Plus my Mom uses it now.", name: "Riya S.", role: "Designer · Mumbai" },
  { quote: "Booked a salon, hailed a cab to it, ordered dinner home — all in 90 seconds. The fastest city app I've used.", name: "Carlos M.", role: "PM · Mexico City" },
  { quote: "When I have a free 15 minutes, I get more done with Zolwo than I used to in a Saturday afternoon.", name: "Praew T.", role: "Engineer · Bangkok" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-bg-soft to-bg-soft p-8 sm:grid-cols-4 sm:p-10">
          {STATS.map((s) => (
            <div key={s.k} className="text-center sm:text-left">
              <div className="text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">{s.v}</div>
              <div className="mt-1 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-border bg-bg-soft p-7">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-bright/70"><path d="M9.4 7H5a3 3 0 0 0-3 3v6h6v-6H5a4 4 0 0 1 4.4-3zm10 0H15a3 3 0 0 0-3 3v6h6v-6h-3a4 4 0 0 1 4.4-3z" /></svg>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">"{q.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-accent text-[12px] font-bold text-white">{q.name.charAt(0)}</span>
                <div>
                  <div className="text-[13.5px] font-medium text-ink">{q.name}</div>
                  <div className="text-[12px] text-ink-dim">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
