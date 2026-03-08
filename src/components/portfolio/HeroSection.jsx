import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../ui/button"

function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
    >
      <Icon className="h-4 w-4 text-emerald-700 transition group-hover:scale-110" />
      <span className="sr-only">{label}</span>
      <span>{value}</span>
    </a>
  )
}

export function HeroSection({ data }) {
  const email = data.email.trim()
  const emailUrl = `https://mailto:${email}`
  const whatsappNumber = data.phone.replace(/\D/g, "")
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur sm:p-10">
      <p className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
        Portfolio
      </p>
      <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
        {data.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-slate-700">{data.role}</p>
      <p className="mt-4 max-w-3xl text-slate-600">{data.summary}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ContactLink href={emailUrl} icon={Mail} label="Email" value={email} />
        <ContactLink
          href={whatsappUrl}
          icon={Phone}
          label="Phone"
          value={data.phone}
        />
        <ContactLink
          href={data.linkedin}
          icon={Linkedin}
          label="LinkedIn"
          value="LinkedIn Profile"
        />
        <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
          <MapPin className="h-4 w-4 text-emerald-700" />
          {data.location}
        </span>
      </div>
    </section>
  )
}
