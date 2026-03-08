import { SITE_TEXT } from "../../constants/content"
import { SkillGroup } from "../portfolio/SkillGroup"
import { SectionHeading } from "../portfolio/SectionHeading"

export function SkillsSection({ portfolioData }) {
  return (
    <section id="skills" className="mt-10">
      <SectionHeading eyebrow={SITE_TEXT.sections.skillsEyebrow} title={SITE_TEXT.sections.skillsTitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(portfolioData.skills).map(([group, items]) => (
          <SkillGroup key={group} title={group} items={items} />
        ))}
      </div>
    </section>
  )
}
