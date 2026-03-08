import { HeroSection } from "./components/portfolio/HeroSection"
import { AboutSection } from "./components/sections/AboutSection"
import { ContactSection } from "./components/sections/ContactSection"
import { EducationStrengthsSection } from "./components/sections/EducationStrengthsSection"
import { ExperienceSection } from "./components/sections/ExperienceSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { SiteFooter } from "./components/sections/SiteFooter"
import { SiteHeader } from "./components/sections/SiteHeader"
import { SkillsSection } from "./components/sections/SkillsSection"
import { LINKS } from "./constants/link"
import { portfolioData } from "./data/portfolioData"

const navItems = ["Home", "Services", "About", "Experience", "Skills", "Contact"]

function App() {
  const whatsappNumber = portfolioData.phone.replace(/\D/g, "")
  const whatsappUrl = `${LINKS.whatsappBase}/${whatsappNumber}`

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0b0c] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,#0e1012_20%,#090a0b_20%,#090a0b_40%,#111315_40%,#111315_60%,#090a0b_60%,#090a0b_80%,#0e1012_80%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.08),transparent_32%)]" />

      <SiteHeader navItems={navItems} whatsappUrl={whatsappUrl} />

      <div className="bg-[#0d0f11]/95 p-5 pt-24 sm:p-8 sm:pt-28">
        <div id="home">
          <HeroSection data={portfolioData} />
        </div>

        <ServicesSection />
        <AboutSection portfolioData={portfolioData} />
        <ExperienceSection portfolioData={portfolioData} />
        <SkillsSection portfolioData={portfolioData} />
        <EducationStrengthsSection portfolioData={portfolioData} />
        <ContactSection />
        <SiteFooter portfolioData={portfolioData} whatsappUrl={whatsappUrl} />
      </div>
    </div>
  )
}

export default App
