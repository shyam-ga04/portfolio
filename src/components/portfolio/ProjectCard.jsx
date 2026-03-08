export function ProjectCard({ name, stack, points }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            {item}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
