import { SITE_TEXT } from "../../constants/content"

export function EducationStrengthsSection({ portfolioData }) {
  return (
    <section className="mt-10 grid gap-5 lg:grid-cols-2">
      <article className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
        <h3 className="text-lg font-semibold text-white">{SITE_TEXT.sections.educationTitle}</h3>
        <div className="mt-4 space-y-3">
          {portfolioData.education.map((item) => (
            <div key={item.degree} className="rounded-lg border border-slate-800 bg-[#101214] p-3">
              <p className="font-medium text-slate-200">{item.degree}</p>
              <p className="text-sm text-slate-400">{item.institution}</p>
              <p className="text-xs text-orange-300">{item.period}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
        <h3 className="text-lg font-semibold text-white">{SITE_TEXT.sections.strengthsTitle}</h3>
        <ul className="mt-4 space-y-2 text-slate-300">
          {portfolioData.strengths.map((strength) => (
            <li key={strength} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
