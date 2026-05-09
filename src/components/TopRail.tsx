export default function TopRail() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-red to-amber shadow-[0_0_22px_rgba(239,68,68,0.45)]">
            <span style={{ fontFamily: "var(--font-display)" }} className="text-[16px] font-extrabold text-bg">Z</span>
          </span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-[17px] font-bold tracking-tight">Zolwo</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {["Actions", "City", "Plans", "Earn", "Help"].map((l) => (
            <a key={l} href="#" className="rounded-md px-3 py-1.5 text-[13.5px] text-ink-muted hover:bg-bg-3 hover:text-ink">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#earn" className="hidden rounded-full border border-rule-strong bg-bg-3 px-3.5 py-1.5 text-[13px] hover:bg-bg-2 md:inline">Drive · Deliver</a>
          <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red to-amber px-4 py-1.5 text-[13px] font-bold text-bg shadow-[0_0_22px_rgba(239,68,68,0.45)] hover:from-red-2 hover:to-amber-2">
            Get the app →
          </a>
        </div>
      </div>
    </header>
  );
}
