import { SectionHeading } from "../portfolio/SectionHeading"
import { TimelineItem } from "../portfolio/TimelineItem"

export function ExperienceSection({ portfolioData }) {
  return (
    <section id="experience" className="mt-10">
      <SectionHeading eyebrow="Experience" title="Professional Experience" />
      <div className="space-y-4">
        {portfolioData.experience.map((item) => (
          <TimelineItem
            key={item.company}
            title={item.company}
            subtitle={`${item.title} - ${item.location}`}
            period={item.period}
            bullets={item.points}
          />
        ))}
      </div>
    </section>
  )
}
