"use client"

import { useEffect, useRef } from "react"

interface InteractiveBackgroundProps {
  mousePosition: { x: number; y: number }
}

export function InteractiveBackground({ mousePosition }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.4)"
        ctx.fill()
      })

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-30" />
      <div
        className="fixed w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: "all 0.3s ease-out",
        }}
      />
      <div
        className="fixed w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          transition: "all 0.5s ease-out",
        }}
      />
    </>
  )
}
