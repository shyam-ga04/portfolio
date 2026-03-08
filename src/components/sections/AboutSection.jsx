import { SITE_TEXT } from "../../constants/content"
import profileImage from "../../assets/profile-optimized.jpg"
import { SectionHeading } from "../portfolio/SectionHeading"

export function AboutSection({ portfolioData }) {
  return (
    <section id="about" className="mt-10 rounded-2xl border border-slate-800 bg-[#141618] p-6 sm:p-8">
      <SectionHeading eyebrow={SITE_TEXT.sections.aboutEyebrow} title={SITE_TEXT.sections.aboutTitle} />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-slate-800 bg-[#101214] p-4">
          <img src={profileImage} alt={`${portfolioData.name} profile`} className="w-full rounded-lg grayscale" />
        </div>
        <div>
          <p className="text-slate-300">{portfolioData.summary}</p>
          <ul className="mt-4 space-y-2 text-slate-400">
            {portfolioData.backendHighlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
