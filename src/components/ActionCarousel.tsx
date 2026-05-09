interface Action { name: string; tag: string; eta: string; price: string; emoji: string; tone: string; description: string; lines: string[] }

const ACTIONS: Action[] = [
  { name: "Rides", tag: "EV-FIRST", eta: "≤ 4 min", price: "from ₹49", emoji: "🚕", tone: "from-red via-amber to-coral", description: "Ride-share, sedans, SUVs — all electric, all surge-honest, all driver-friendly.", lines: ["Fare locked at booking", "Live driver match", "Family ride-share"] },
  { name: "Delivery", tag: "INSTANT", eta: "≤ 22 min", price: "from ₹39", emoji: "🛵", tone: "from-amber via-coral to-red", description: "Groceries, food, packages, prescriptions — same-day or instant, with live tracking.", lines: ["Restaurant + grocery", "Multi-stop drops", "Insulated bags"] },
  { name: "Errands", tag: "PERSONAL", eta: "≤ 30 min", price: "from ₹39", emoji: "🛍️", tone: "from-coral via-violet to-cobalt", description: "Vetted runners. Pickup, drop, queue-stand, court-paperwork. If it's local, we do it.", lines: ["Background-checked", "In-app receipts", "Same-day available"] },
  { name: "Repair", tag: "TODAY", eta: "Same day", price: "from ₹120", emoji: "🔧", tone: "from-cobalt via-cyan to-mint", description: "Plumbers, electricians, AC techs. Background-checked, transparent pricing, real ratings.", lines: ["AI diagnosis", "Flat-rate jobs", "Re-fix guarantee"] },
  { name: "Beauty", tag: "AT HOME", eta: "Today", price: "from ₹240", emoji: "💅", tone: "from-coral via-red to-amber", description: "Salons, home service, manicures, waxing, facials. Top-rated pros, sanitised kits.", lines: ["Sanitised kit", "Pro of your choice", "Live re-bookings"] },
  { name: "Bookings", tag: "RESERVE", eta: "Now", price: "₹0 fee", emoji: "📅", tone: "from-mint via-cyan to-cobalt", description: "Doctors, gyms, classes, pet-care. Real-time slots, real-time confirmations.", lines: ["No phone tag", "Cal sync", "Reminders included"] },
];

export default function ActionCarousel() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber-2">// the actions</span>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px]">
              Six actions. <span className="bg-gradient-to-r from-red to-amber bg-clip-text text-transparent">One tap each.</span>
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-muted">
            Swipe through every category. Each one has its own dedicated screen, its own pros, its own pricing. Same wallet across them all.
          </p>
        </div>
      </div>

      <div className="scroll-x flex gap-4 px-5 pb-2 sm:px-8">
        {ACTIONS.map((a) => (
          <article key={a.name} className="flex-none w-[300px] sm:w-[360px] rounded-3xl border border-rule-strong bg-bg-2 p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className={`relative h-44 overflow-hidden rounded-[22px] bg-gradient-to-br ${a.tone}`}>
              <div className="absolute inset-0 flex items-end p-5">
                <div className="text-bg">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">{a.tag}</div>
                  <div style={{ fontFamily: "var(--font-display)" }} className="mt-1 text-[28px] font-extrabold leading-none">{a.name}</div>
                </div>
              </div>
              <span className="absolute right-5 top-5 text-[44px]">{a.emoji}</span>
              <div className="absolute right-3 bottom-3 rounded-full bg-bg/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-bg backdrop-blur">
                {a.eta}
              </div>
            </div>
            <div className="px-3.5 py-4">
              <p className="text-[13.5px] leading-relaxed text-ink-muted">{a.description}</p>
              <ul className="mt-4 space-y-1.5 text-[12.5px] text-ink">
                {a.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-amber" />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[12px] text-ink-muted">{a.price}</span>
                <button className="rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-bold text-bg">Open →</button>
              </div>
            </div>
          </article>
        ))}
        <span aria-hidden="true" className="flex-none w-2" />
      </div>
    </section>
  );
}
