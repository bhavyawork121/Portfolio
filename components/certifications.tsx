"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
}

export function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "May 2025",
      image: "/images/cert-sql-basic.png",
    },
    {
      id: 2,
      title: "Foundation to AI Data Analytics",
      issuer: "Samatrix.io",
      date: "October 2025",
      image: "/images/cert-ai-foundation.png",
    },
    {
      id: 3,
      title: "Data Analysis using Python",
      issuer: "Samatrix.io",
      date: "October 2025",
      image: "/images/cert-data-analysis.png",
    },
    {
      id: 4,
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "July 2025",
      image: "/images/cert-postman.png",
    },
    {
      id: 5,
      title: "GSSoC 2025 Campus Ambassador",
      issuer: "GirlScript Summer of Code",
      date: "2025",
      image: "/images/gssoc-ambassador.png",
    },
    {
      id: 6,
      title: "GSSoC 2025 Tech Contributor",
      issuer: "GirlScript Summer of Code",
      date: "2025",
      image: "/images/gssoc-contributor.png",
    },
    {
      id: 7,
      title: "Hacktoberfest 1 Badge Club",
      issuer: "Holopin",
      date: "2024",
      image: "/images/hacktoberfest.jpg",
    },
  ]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      goToNext()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  // Pause auto-play when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }

  return (
    <section id="certifications" className="py-16 md:py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
            05. Certifications
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative group">
          {/* Main Certificate Display */}
          <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border p-3 md:p-4 shadow-xl">
            <div className="aspect-[16/9] relative max-h-[200px] mx-auto max-w-2xl">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                      ? "opacity-100 translate-x-0"
                      : index < currentIndex
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                >
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setZoomedImage(cert.image)}
                  />
                </div>
              ))}
            </div>

            {/* Certificate Info Overlay */}
            <div className="mt-3 text-center">
              <h3 className="text-lg font-bold mb-0.5">{certificates[currentIndex].title}</h3>
              <p className="text-muted-foreground text-xs">
                {certificates[currentIndex].issuer} • {certificates[currentIndex].date}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/80 backdrop-blur-sm"
            onClick={() => {
              goToPrevious()
              handleUserInteraction()
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-card/80 backdrop-blur-sm"
            onClick={() => {
              goToNext()
              handleUserInteraction()
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-3">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index)
                  handleUserInteraction()
                }}
                className={`transition-all duration-300 rounded-full ${index === currentIndex ? "w-12 h-3 bg-accent" : "w-3 h-3 bg-muted hover:bg-accent/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-1 text-xs text-muted-foreground">
            {isAutoPlaying ? "Auto-playing" : "Paused"} • Click to interact
          </div>
        </div>
      </div>

      {/* Zoom Modal Overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border-white/20"
            onClick={() => setZoomedImage(null)}
          >
            <X className="h-5 w-5 text-white" />
          </Button>
          <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={zoomedImage || "/placeholder.svg"}
              alt="Zoomed certificate"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <p className="absolute bottom-8 text-white/70 text-sm">Click anywhere to close</p>
        </div>
      )}
    </section>
  )
}
