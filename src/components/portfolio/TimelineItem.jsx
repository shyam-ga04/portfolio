export function TimelineItem({ title, subtitle, period, bullets }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-[#17191b] p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <p className="text-sm font-medium text-slate-400">{subtitle}</p>
        </div>
        <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-300">
          {period}
        </span>
      </div>
      <ul className="space-y-2 text-slate-300">
        {bullets.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
