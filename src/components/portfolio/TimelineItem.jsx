export function TimelineItem({ title, subtitle, period, bullets }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm font-medium text-slate-600">{subtitle}</p>
        </div>
        <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{period}</span>
      </div>
      <ul className="space-y-2 text-slate-700">
        {bullets.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
