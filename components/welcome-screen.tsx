"use client"

import { useEffect, useState } from "react"

export function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("")
  const [showSubtext, setShowSubtext] = useState(false)
  const fullText = "Welcome"

  useEffect(() => {
    // Typing animation
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Show subtext after typing completes
        setTimeout(() => {
          setShowSubtext(true)
        }, 300)
      }
    }, 150)

    // Complete animation after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/profile-about.jpg')",
        }}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-white/90 to-purple-100/80" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent min-h-[80px] md:min-h-[120px]">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtext with fade in */}
        <p
          className={`text-xl md:text-2xl text-gray-700 font-medium transition-all duration-700 ${
            showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          to my portfolio
        </p>

        {/* Loading dots */}
        <div
          className={`flex justify-center gap-2 transition-all duration-700 delay-300 ${
            showSubtext ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
