"use client"

import { Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"

interface FloatingNavProps {
  activeSection: string
}

export function FloatingNav({ activeSection }: FloatingNavProps) {
  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4 bg-card/80 backdrop-blur-xl p-4 rounded-full border border-border shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-accent text-accent-foreground scale-110"
                  : "hover:bg-accent/20 text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute right-full mr-4 px-3 py-1.5 bg-card border border-border rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
