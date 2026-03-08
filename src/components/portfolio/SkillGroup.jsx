export function SkillGroup({ title, items }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
      <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
