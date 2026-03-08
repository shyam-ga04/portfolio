import { SITE_TEXT } from "../../constants/content"
import { SectionHeading } from "../portfolio/SectionHeading"

export function FreelancingSection({ portfolioData }) {
  const { freelancing } = portfolioData

  return (
    <section id="freelancing" className="mt-10 rounded-2xl border border-slate-800 bg-[#141618] p-6 sm:p-8">
      <SectionHeading eyebrow={SITE_TEXT.sections.freelancingEyebrow} title={freelancing.title} />
      <p className="text-slate-300">{freelancing.availability}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-800 bg-[#101214] p-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">{SITE_TEXT.freelancing.buildHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {freelancing.engagement.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-800 bg-[#101214] p-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">{SITE_TEXT.freelancing.workHeading}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {freelancing.workStyle.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
