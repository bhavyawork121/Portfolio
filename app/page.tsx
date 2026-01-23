"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { InteractiveBackground } from "@/components/interactive-background"
import { WelcomeScreen } from "@/components/welcome-screen"
import { TopNav } from "@/components/top-nav"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showWelcome, setShowWelcome] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  return (
    <>
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}

      <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        <TopNav />
        <ScrollProgress />

        <InteractiveBackground mousePosition={mousePosition} />

        <div className="relative z-10">
          <div className="pt-20">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
