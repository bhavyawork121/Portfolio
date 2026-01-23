"use client"

import { Github, Linkedin, Mail, Code2, ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Bhavya Agarwal"
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pb-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-full bg-white/60 backdrop-blur-md shadow-lg">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Available for opportunities</span>
            </div>

            <div className="mb-8 overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
                <span className="inline-block bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                  {displayText}
                </span>
                <span
                  className={`inline-block w-1 h-12 md:h-20 lg:h-24 bg-blue-600 ml-2 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}
                />
              </h1>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-xl md:text-3xl font-bold text-gray-900 drop-shadow-md">
                Computer Science × AI/ML × Cybersecurity
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Building intelligent, secure web experiences with modern technologies
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-16">
              <a
                href="https://github.com/bhavyawork121"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-md hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya-agarwal"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-md hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://leetcode.com/Bhavyaworks"
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-md hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 flex items-center gap-2"
              >
                <Code2 className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="mailto:bhavyawork121@gmail.com"
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
