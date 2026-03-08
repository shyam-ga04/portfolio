import { SITE_TEXT } from "../../constants/content"
import { ContactForm } from "../portfolio/ContactForm"
import { SectionHeading } from "../portfolio/SectionHeading"

export function ContactSection() {
  return (
    <section id="contact" className="mt-10 rounded-2xl border border-slate-800 bg-[#141618] p-6 sm:p-8">
      <SectionHeading eyebrow={SITE_TEXT.sections.contactEyebrow} title={SITE_TEXT.sections.contactTitle} />
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  )
}
