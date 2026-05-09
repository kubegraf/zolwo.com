const STORIES = [
  { who: "Riya, 24", role: "designer · mumbai", q: "I deleted four apps and replaced them with Zolwo. Cab, food, and a babysitter — all in one Saturday.", emoji: "✨" },
  { who: "Carlos, 31", role: "PM · mexico city", q: "Booked a salon, hailed a cab to it, ordered dinner home — 90 seconds, no toggling.", emoji: "🛒" },
  { who: "Praew, 29", role: "engineer · bangkok", q: "Best part of Zolwo: the surge-honest cab pricing. I've not been gouged in months.", emoji: "🚕" },
  { who: "Aditi, 38", role: "parent · bengaluru", q: "When kid's fever spiked at 11pm, Zolwo had a cab + a chemist drop on the way in 7 minutes.", emoji: "💊" },
];

export default function StoryStrip() {
  return (
    <section className="relative border-y border-rule bg-bg-2/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-coral-2">// real stories</span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px]">
            What people <span className="bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">finish</span> on Zolwo.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STORIES.map((s) => (
            <figure key={s.who} className="rounded-3xl border border-rule bg-bg p-6">
              <div className="text-[28px]">{s.emoji}</div>
              <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink">"{s.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-rule pt-3 text-[12.5px]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-red to-amber font-bold text-bg">{s.who.charAt(0)}</span>
                <div>
                  <div className="font-semibold text-ink">{s.who}</div>
                  <div className="text-ink-dim">{s.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
