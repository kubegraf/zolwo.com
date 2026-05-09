export default function DownloadHero() {
  return (
    <section id="download" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-red/20 blur-[140px]" />
        <div className="hero-orb absolute -bottom-32 right-1/4 h-[440px] w-[440px] rounded-full bg-amber/20 blur-[140px]" style={{ animationDelay: "-3s" }} />
      </div>
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-[44px] font-extrabold leading-[1.0] tracking-[-0.02em] sm:text-[68px]">
          One app.
          <br />
          <span className="bg-gradient-to-r from-red via-coral to-amber bg-clip-text text-transparent">Anything done.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] text-ink-muted">
          Free to download. Free to use. Pay only when you tap go. iOS · Android · 24 cities · zero phone tag.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3 text-bg shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
            <div className="text-left">
              <div className="text-[10px] font-bold opacity-70">Download on</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="text-[18px] font-extrabold leading-tight">App Store</div>
            </div>
          </a>
          <a href="#" className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red to-amber px-6 py-3 text-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 1l11 10.5L3 22V1zM5 4l7 7-2 2-5-9zm9 8l8 4-8 4-2-2 2-2z" /></svg>
            <div className="text-left">
              <div className="text-[10px] font-bold opacity-80">Get it on</div>
              <div style={{ fontFamily: "var(--font-display)" }} className="text-[18px] font-extrabold leading-tight">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
