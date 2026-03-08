import { SITE_TEXT } from "../../constants/content"
import { SectionHeading } from "../portfolio/SectionHeading"

export function ProjectsSection({ portfolioData }) {
  return (
    <section id="projects" className="mt-10">
      <SectionHeading eyebrow={SITE_TEXT.sections.projectsEyebrow} title={SITE_TEXT.sections.projectsTitle} />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <article key={project.name} className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
            <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
