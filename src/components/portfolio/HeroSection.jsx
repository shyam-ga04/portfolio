import { Download, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import { SITE_TEXT } from "../../constants/content"
import { LINKS } from "../../constants/link"
import profileImage from "../../assets/profile-optimized.jpg"

function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group inline-flex max-w-full items-start gap-2 rounded-md border border-slate-700 bg-[#101214] px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-orange-400 hover:text-orange-200"
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-400 transition group-hover:scale-110" />
      <span className="sr-only">{label}</span>
      <span className="min-w-0 break-words">{value}</span>
    </a>
  )
}

export function HeroSection({ data }) {
  const email = data.email.trim()
  const emailUrl = `mailto:${email}`
  const whatsappNumber = data.phone.replace(/\D/g, "")
  const whatsappUrl = `${LINKS.whatsappBase}/${whatsappNumber}`

  return (
    <section className="rounded-2xl border border-slate-800 bg-[#121416] p-4 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            {SITE_TEXT.hero.intro}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-5xl">
            <span className="text-orange-400">{data.role}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">{data.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              <MessageCircle className="h-4 w-4" />
              {SITE_TEXT.hero.ctaHire}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-300"
            >
              <Download className="h-4 w-4" />
              {SITE_TEXT.hero.ctaContact}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactLink
              href={emailUrl}
              icon={Mail}
              label={SITE_TEXT.hero.contactLabelEmail}
              value={email}
            />
            <ContactLink
              href={data.linkedin}
              icon={Linkedin}
              label={SITE_TEXT.hero.contactLabelLinkedIn}
              value={SITE_TEXT.hero.linkedInText}
            />
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-[#101214] px-3 py-2 text-sm font-medium text-slate-300">
              <MapPin className="h-4 w-4 text-orange-400" />
              {data.location}
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-10 -z-10 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="rounded-full border border-orange-500/30 bg-slate-900/50 p-3">
            <img
              src={profileImage}
              alt={`${data.name} profile`}
              width="700"
              height="700"
              fetchPriority="high"
              decoding="async"
              className="mx-auto w-full rounded-full object-contain grayscale"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-[#18191c] p-4">
          <p className="text-2xl font-semibold text-orange-400">
            {SITE_TEXT.hero.yearsValue}
          </p>
          <p className="text-sm text-slate-400">{SITE_TEXT.hero.yearsLabel}</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-[#18191c] p-4">
          <p className="text-2xl font-semibold text-orange-400">
            {data.projects.length}+
          </p>
          <p className="text-sm text-slate-400">
            {SITE_TEXT.hero.projectsLabel}
          </p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-[#18191c] p-4">
          <p className="text-2xl font-semibold text-orange-400">
            {SITE_TEXT.hero.collaborationValue}
          </p>
          <p className="text-sm text-slate-400">
            {SITE_TEXT.hero.collaborationLabel}
          </p>
        </article>
      </div>
    </section>
  )
}
