import { portfolioData } from "./data/portfolioData";
import { SectionHeading } from "./components/portfolio/SectionHeading";
import { TimelineItem } from "./components/portfolio/TimelineItem";
import { SkillGroup } from "./components/portfolio/SkillGroup";
import { ProjectCard } from "./components/portfolio/ProjectCard";
import { HeroSection } from "./components/portfolio/HeroSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%),radial-gradient(circle_at_85%_15%,_rgba(249,115,22,0.16),_transparent_40%)]" />
      <main className="container py-12 sm:py-16">
        <HeroSection data={portfolioData} />

        <section className="mt-12">
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

        <section className="mt-12">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Project Work"
            description="Delivery-focused projects across mobile apps, backend systems, and platform engineering."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                stack={project.stack}
                points={project.points}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionHeading eyebrow="Backend Engineering" title="API and Platform Highlights" />
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-slate-700">
              {portfolioData.backendHighlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeading eyebrow="Skills" title="Technical Skills" />
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(portfolioData.skills).map(([group, items]) => (
              <SkillGroup key={group} title={group} items={items} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Education" title="Academic Background" />
            <div className="space-y-3">
              {portfolioData.education.map((item) => (
                <article
                  key={`${item.degree}-${item.period}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-slate-900">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                  <p className="mt-2 text-sm font-medium text-emerald-700">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Strengths" title="What I Bring" />
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-slate-700">
                {portfolioData.strengths.map((strength) => (
                  <li key={strength} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

