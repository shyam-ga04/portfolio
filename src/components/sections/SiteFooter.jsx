import { Linkedin, Mail, MessageCircle } from "lucide-react"

export function SiteFooter({ portfolioData, whatsappUrl }) {
  return (
    <footer className="mt-8 rounded-xl border border-slate-800 bg-[#121416] px-6 py-6">
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <p className="mt-2 text-sm text-slate-400">
            {portfolioData.name} - Mobile and Full-Stack Engineer
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${portfolioData.email}`}
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-orange-400 hover:text-orange-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
