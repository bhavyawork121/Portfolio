"use client"

import { Github } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Study Quest",
      shortDesc: "Interactive Study Platform",
      description:
        "An interactive study platform for high-school students featuring organized notes and video lessons. Implemented responsive UI and optimized load time by 30%.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/interactive-study-app-interface.jpg",
      stats: { performance: "30% faster", users: "500+ students" },
      color: "from-blue-500 to-cyan-500",
      link: "https://github.com/ArinDixit06/MindBender4.0.git",
    },
    {
      title: "Job Portal",
      shortDesc: "Open Source Contribution",
      description:
        "Enhanced navigation, layout alignment, and overall UI styling for an open-source job portal. Used Git branching and PR workflow for version control.",
      technologies: ["React", "CSS", "Git"],
      link: "https://github.com/Khushi-Nigam/jobportal",
      image: "/job-portal-web-application.jpg",
      stats: { contributions: "5+ PRs", impact: "UI/UX overhaul" },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Drone Field Challenge",
      shortDesc: "Autonomous Robotics",
      description:
        "Programmed an autonomous drone to complete an obstacle course. Achieved 4th position among 25+ participants in RoboRush competition.",
      technologies: ["Python", "Autonomous Systems"],
      image: "/autonomous-drone-technology.jpg",
      stats: { rank: "4th/25+", competition: "RoboRush" },
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="relative py-20 md:py-24 px-6 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
            03. Featured Projects
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group perspective-1000 h-[500px]"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flippedIndex === index ? "rotate-y-180" : ""}`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border-2 border-gray-200 bg-white shadow-xl">
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/90 font-medium">{project.shortDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border-2 border-blue-500 bg-white shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
                  <div className="relative h-full p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">{project.description}</p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 text-sm text-gray-600">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1">
                            <span className="font-bold text-blue-600">{value}</span>
                          </div>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
