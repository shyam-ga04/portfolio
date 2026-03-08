export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-6">
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-slate-400">{description}</p> : null}
    </header>
  )
}
