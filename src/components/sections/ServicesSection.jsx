import { Code2, Database, MessageCircle, Server, Smartphone, UserRound } from "lucide-react"
import { SectionHeading } from "../portfolio/SectionHeading"

const services = [
  {
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Production React Native apps with chat, notifications, and polished UX.",
  },
  {
    title: "Backend APIs",
    icon: Server,
    description: "Scalable NestJS services with modular architecture and clean contracts.",
  },
  {
    title: "Database Design",
    icon: Database,
    description: "Reliable schema and query design for PostgreSQL, MongoDB, and DynamoDB.",
  },
  {
    title: "Cloud Integrations",
    icon: Code2,
    description: "AWS Lambda workflows and external API integrations for real use cases.",
  },
  {
    title: "Monitoring",
    icon: UserRound,
    description: "Crash tracking and analytics setup using Sentry, Firebase, and GA.",
  },
  {
    title: "Delivery Support",
    icon: MessageCircle,
    description: "Sprint collaboration, code reviews, release support, and issue resolution.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mt-10">
      <SectionHeading eyebrow="Services" title="What I Offer" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, icon: Icon, description }) => (
          <article key={title} className="rounded-xl border border-slate-800 bg-[#17191b] p-5">
            <Icon className="h-5 w-5 text-orange-400" />
            <h3 className="mt-3 text-base font-semibold text-slate-100">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
