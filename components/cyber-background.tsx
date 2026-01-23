"use client"

export function CyberBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-300" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-cyber-line" />
      <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-cyber-line animation-delay-200" />
      <div className="absolute top-60 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-cyber-line animation-delay-400" />

      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-blue-500/20" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-indigo-500/20" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-blue-400/20" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-blue-500/20" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
    </div>
  )
}
