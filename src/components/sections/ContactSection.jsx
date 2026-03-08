import { ContactForm } from "../portfolio/ContactForm"
import { SectionHeading } from "../portfolio/SectionHeading"

export function ContactSection() {
  return (
    <section id="contact" className="mt-10 rounded-2xl border border-slate-800 bg-[#141618] p-6 sm:p-8">
      <SectionHeading eyebrow="Contact" title="Let's Build Something Together" />
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  )
}
