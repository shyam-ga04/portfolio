import { SkillGroup } from "../portfolio/SkillGroup"
import { SectionHeading } from "../portfolio/SectionHeading"

export function SkillsSection({ portfolioData }) {
  return (
    <section id="skills" className="mt-10">
      <SectionHeading eyebrow="Skills" title="Technical Stack" />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(portfolioData.skills).map(([group, items]) => (
          <SkillGroup key={group} title={group} items={items} />
        ))}
      </div>
    </section>
  )
}
