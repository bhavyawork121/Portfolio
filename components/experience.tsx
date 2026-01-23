"use client"

import { ArrowUpRight, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Open Source Contributor",
      company: "Hacktoberfest",
      description:
        "Contributed to multiple repositories improving documentation and UI/UX. Created 3+ valid pull requests using Git and GitHub workflows. Participated in Agile development, code reviews, and issue discussions.",
      technologies: ["Git", "JavaScript", "React", "CSS"],
      link: "https://github.com/bhavyawork121",
    },
    {
      period: "Apr — Aug 2024",
      title: "Campus Ambassador",
      company: "GirlScript Summer of Code",
      description:
        "Improved front-end design and responsiveness for a Job Portal web app. Collaborated with maintainers and contributors to enhance user experience and implement new features.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/Khushi-Nigam/jobportal",
    },
  ]

  return (
    <section id="experience" className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-blue-600">03.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-gray-900">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative p-8 border border-gray-200 rounded-2xl hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        {experience.title}
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-mono">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{experience.description}</p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium border border-blue-500/30 text-blue-700 rounded-full bg-blue-50 hover:bg-blue-100 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
