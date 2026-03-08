import { SITE_TEXT } from "../../constants/content"

export function SiteHeader({ navItems, whatsappUrl }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-8 pt-4">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#121416]/95 px-4 py-4 backdrop-blur">
        <a href="#home" className="text-sm font-semibold tracking-[0.25em] text-orange-400">
          {SITE_TEXT.header.brand}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-slate-400 transition hover:text-orange-300"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
        >
          {SITE_TEXT.header.contactCta}
        </a>
      </div>
    </header>
  )
}
