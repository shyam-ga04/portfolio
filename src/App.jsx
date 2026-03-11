import { lazy, Suspense, useEffect, useState } from "react"
import { logEvent } from "firebase/analytics"
import { HeroSection } from "./components/portfolio/HeroSection"
import { SiteHeader } from "./components/sections/SiteHeader"
import { NAV_ITEMS } from "./constants/content"
import { LINKS } from "./constants/link"
import { portfolioData } from "./data/portfolioData"
import { analytics } from "./services/firebase"

const ServicesSection = lazy(() =>
  import("./components/sections/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  })),
)
const AboutSection = lazy(() =>
  import("./components/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
)
const ExperienceSection = lazy(() =>
  import("./components/sections/ExperienceSection").then((m) => ({
    default: m.ExperienceSection,
  })),
)
const ProjectsSection = lazy(() =>
  import("./components/sections/ProjectsSection").then((m) => ({
    default: m.ProjectsSection,
  })),
)
const FreelancingSection = lazy(() =>
  import("./components/sections/FreelancingSection").then((m) => ({
    default: m.FreelancingSection,
  })),
)
const SkillsSection = lazy(() =>
  import("./components/sections/SkillsSection").then((m) => ({
    default: m.SkillsSection,
  })),
)
const EducationStrengthsSection = lazy(() =>
  import("./components/sections/EducationStrengthsSection").then((m) => ({
    default: m.EducationStrengthsSection,
  })),
)
const ContactSection = lazy(() =>
  import("./components/sections/ContactSection").then((m) => ({
    default: m.ContactSection,
  })),
)
const SiteFooter = lazy(() =>
  import("./components/sections/SiteFooter").then((m) => ({
    default: m.SiteFooter,
  })),
)

function App() {
  const whatsappNumber = portfolioData.phone.replace(/\D/g, "")
  const whatsappUrl = `${LINKS.whatsappBase}/${whatsappNumber}`
  const [renderDeferredSections, setRenderDeferredSections] = useState(false)

  useEffect(() => {
    if (analytics) {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          logEvent(analytics, "user_location", {
            city: data.city,
            country: data.country_name,
            region: data.region,
          })
        })
    }
  }, [])

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash
      if (!hash) return

      const target = document.querySelector(hash)
      if (!target) return

      const styles = getComputedStyle(document.documentElement)
      const headerOffset = parseInt(
        styles.getPropertyValue("--header-offset") || "88",
        10,
      )
      const extraGap = 16
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset -
        extraGap

      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
    }

    const rafId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToHashTarget)
    })

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    if (!renderDeferredSections || !window.location.hash) return

    const run = () => {
      const target = document.querySelector(window.location.hash)
      if (!target) return
      const styles = getComputedStyle(document.documentElement)
      const headerOffset = parseInt(
        styles.getPropertyValue("--header-offset") || "88",
        10,
      )
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset - 16
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
    }

    const id = window.setTimeout(run, 120)
    return () => window.clearTimeout(id)
  }, [renderDeferredSections])

  useEffect(() => {
    if (window.location.hash) {
      setRenderDeferredSections(true)
      return
    }

    let timeoutId
    let idleId

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(
        () => setRenderDeferredSections(true),
        { timeout: 1400 },
      )
    } else {
      timeoutId = window.setTimeout(() => setRenderDeferredSections(true), 450)
    }

    return () => {
      if (idleId) window.cancelIdleCallback(idleId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0b0c] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,#0e1012_20%,#090a0b_20%,#090a0b_40%,#111315_40%,#111315_60%,#090a0b_60%,#090a0b_80%,#0e1012_80%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(249,115,22,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.08),transparent_32%)]" />

      <SiteHeader navItems={NAV_ITEMS} whatsappUrl={whatsappUrl} />

      <main>
        <div className="bg-[#0d0f11]/95 p-5 pt-24 sm:p-8 sm:pt-28">
          <div id="home">
            <HeroSection data={portfolioData} />
          </div>

          {renderDeferredSections ? (
            <Suspense
              fallback={<div className="mt-10 h-[480px]" aria-hidden="true" />}
            >
              <div className="cv-auto">
                <ServicesSection />
              </div>
              <div className="cv-auto">
                <AboutSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <ExperienceSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <ProjectsSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <FreelancingSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <SkillsSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <EducationStrengthsSection portfolioData={portfolioData} />
              </div>
              <div className="cv-auto">
                <ContactSection />
              </div>
              <div className="cv-auto">
                <SiteFooter
                  portfolioData={portfolioData}
                  whatsappUrl={whatsappUrl}
                />
              </div>
            </Suspense>
          ) : (
            <div className="mt-10 h-[1200px]" aria-hidden="true" />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
