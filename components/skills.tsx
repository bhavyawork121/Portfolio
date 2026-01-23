"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layers, Wrench, Brain, Shield } from "lucide-react"

export function Skills() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      category: "Frontend",
      icon: Layers,
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind", level: 88 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "SQL", level: 82 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      category: "AI/ML",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "NumPy", level: 80 },
      ],
    },
    {
      category: "Security",
      icon: Shield,
      skills: [
        { name: "Cybersecurity", level: 75 },
        { name: "Ethical Hacking", level: 70 },
        { name: "Network Security", level: 72 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
            02. Skills & Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            What I Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className="group relative p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                          <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: inView ? `${skill.level}%` : "0%",
                              transitionDelay: `${(catIndex * 3 + skillIndex) * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "450+", label: "LeetCode Problems", color: "from-blue-500 to-cyan-500" },
            { value: "3+", label: "Open Source Projects", color: "from-purple-500 to-pink-500" },
            { value: "4", label: "Certifications", color: "from-orange-500 to-red-500" },
            { value: "8.5", label: "CGPA", color: "from-green-500 to-emerald-500" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-8 bg-white border-2 border-gray-200 rounded-3xl text-center hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <p
                className={`relative text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p className="relative text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
