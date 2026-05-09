type Icon = "ride" | "bike" | "broom" | "cal" | "track" | "tag";

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  { icon: "ride", title: "Instant rides", body: "Cabs, autos, bikes — at your door in minutes. Surge-aware, ride-share friendly, fare-locked at booking." },
  { icon: "bike", title: "Delivery any time", body: "Groceries, food, packages, prescriptions. Same-day or instant — Zolwo ships it for you." },
  { icon: "broom", title: "Errands on demand", body: "Pickup, drop, queue-stand, court-paperwork — if it's local, we'll do it. Background-checked runners only." },
  { icon: "cal", title: "Bookings that stick", body: "Salons, gyms, doctors, repairs. Real-time slots, real-time confirmations, no missed calls." },
  { icon: "track", title: "Live tracking", body: "Watch every ride, every parcel, every runner. Share trips with family in one tap." },
  { icon: "tag", title: "Transparent pricing", body: "What you see is what you pay. Zero hidden fees, fare-locks before booking, surge clearly marked." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">What's on tap</p>
          <h2 className="text-[34px] font-semibold leading-[1.12] tracking-tight sm:text-[44px]">Six things. One button. Done.</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft p-7 transition-all hover:border-brand/40 hover:bg-bg-elev">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-bright ring-1 ring-inset ring-brand/30">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: Icon }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "ride": return (<svg {...props}><path d="M5 17h14M5 17v-5l2-5h10l2 5v5M5 17v2h2v-2M19 17v2h-2v-2" /><circle cx="8" cy="14" r="1" /><circle cx="16" cy="14" r="1" /></svg>);
    case "bike": return (<svg {...props}><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M6 17l4-9h4l3 6M14 8l1-3h3" /></svg>);
    case "broom": return (<svg {...props}><path d="M14 4l6 6M19.5 9.5l-9 9-3.5.5.5-3.5 9-9zM5 17l-3 5 5-3" /></svg>);
    case "cal": return (<svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="12" cy="15" r="2" /></svg>);
    case "track": return (<svg {...props}><circle cx="12" cy="10" r="3" /><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" /></svg>);
    case "tag": return (<svg {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>);
  }
}
