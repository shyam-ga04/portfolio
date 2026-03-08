import { Code2, Database, MessageCircle, Server, Smartphone, UserRound } from "lucide-react"
import { SERVICE_ITEMS, SITE_TEXT } from "../../constants/content"
import { SectionHeading } from "../portfolio/SectionHeading"

const serviceIconMap = {
  mobileApps: Smartphone,
  backendApis: Server,
  databaseDesign: Database,
  cloudIntegrations: Code2,
  monitoring: UserRound,
  deliverySupport: MessageCircle,
}

export function ServicesSection() {
  return (
    <section id="services" className="mt-10">
      <SectionHeading eyebrow={SITE_TEXT.sections.servicesEyebrow} title={SITE_TEXT.sections.servicesTitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ITEMS.map(({ key, title, description }) => {
          const Icon = serviceIconMap[key]
          return (
            <article key={title} className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
              <Icon className="h-5 w-5 text-orange-400" />
              <h3 className="mt-3 text-base font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
