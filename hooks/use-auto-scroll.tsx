"use client"

import { useEffect, useRef } from "react"

export function useAutoScroll() {
  const isPausedRef = useRef(false)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startScrolling = () => {
      if (scrollIntervalRef.current) return

      scrollIntervalRef.current = setInterval(() => {
        if (!isPausedRef.current) {
          window.scrollBy({
            top: 1,
            behavior: "smooth",
          })
        }
      }, 30)
    }

    const pauseScrolling = () => {
      isPausedRef.current = true

      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }

      pauseTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false
      }, 5000)
    }

    const handleUserInteraction = () => {
      pauseScrolling()
    }

    // Start auto-scrolling
    startScrolling()

    // Add event listeners for user interaction
    window.addEventListener("wheel", handleUserInteraction)
    window.addEventListener("touchstart", handleUserInteraction)
    window.addEventListener("mousedown", handleUserInteraction)
    window.addEventListener("keydown", handleUserInteraction)

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
      window.removeEventListener("wheel", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
      window.removeEventListener("mousedown", handleUserInteraction)
      window.removeEventListener("keydown", handleUserInteraction)
    }
  }, [])
}
