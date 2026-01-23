"use client"

import { Code2, Brain, Shield, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

function StatCard({ item, index, isVisible }: { item: any; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const Icon = item.icon

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * (item.count - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(item.count)
      }
    }

    requestAnimationFrame(animate)
  }, [item.count, isVisible])

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150 + 800}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
      />
      <div className="relative p-8 bg-white border-2 border-gray-200 rounded-3xl group-hover:border-transparent transition-colors">
        <Icon className="h-12 w-12 text-blue-600 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3" />

        <div className="mb-3">
          <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {count}
            {item.suffix}
          </span>
          <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">{item.label}</p>
        </div>

        <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Who I Am"

  const stats = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable web applications with React, Node.js, and modern frameworks",
      color: "from-blue-500 to-cyan-500",
      count: 15,
      suffix: "+",
      label: "Projects",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Specializing in intelligent systems and data-driven solutions",
      color: "from-purple-500 to-pink-500",
      count: 3,
      suffix: "",
      label: "ML Models",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Passionate about secure coding practices and ethical hacking",
      color: "from-orange-500 to-red-500",
      count: 2,
      suffix: "",
      label: "CTF Wins",
    },
    {
      icon: Trophy,
      title: "Open Source",
      description: "Active contributor to GirlScript Summer of Code and Hacktoberfest",
      color: "from-green-500 to-emerald-500",
      count: 50,
      suffix: "+",
      label: "Contributions",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="about" className="relative py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
            01. About Me
          </span>
          <h2
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent min-h-[5rem] transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 mb-12">
          <div
            className={`space-y-6 text-lg leading-relaxed text-gray-700 transition-all duration-1000 delay-500 max-w-4xl mx-auto ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p>
              I'm a Computer Science undergraduate at{" "}
              <span className="font-bold text-blue-600">K.R. Mangalam University</span> specializing in AI & ML. I'm
              passionate about building full-stack applications that combine thoughtful design with robust engineering.
            </p>
            <p>
              My journey in tech started with competitive programming on LeetCode and GeeksforGeeks, where I honed my
              problem-solving skills. I've since contributed to open-source projects, working with teams to improve
              UI/UX and implement new features.
            </p>
            <p className="font-medium text-gray-900">
              When I'm not coding, I'm exploring the latest developments in cybersecurity and artificial intelligence,
              or tinkering with autonomous drones.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
