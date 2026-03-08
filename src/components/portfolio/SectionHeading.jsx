export function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-6">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-slate-600">{description}</p> : null}
    </header>
  );
}
