"use client"

import { useScroll, useSpring, useTransform, motion } from "framer-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="fixed left-6 top-0 bottom-0 w-12 z-50 hidden lg:flex flex-col items-center justify-center pointer-events-none">
            {/* Track Container */}
            <div className="relative h-[80vh] w-full flex justify-center">
                {/* Background Track */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-white/10" />

                {/* Progress Fill Line - Purple Gradient */}
                <motion.div
                    className="absolute top-0 w-0.5 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-violet-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    style={{
                        height: "100%",
                        scaleY: smoothProgress,
                        transformOrigin: "top"
                    }}
                />

                {/* The Sliding Ball */}
                <motion.div
                    className="absolute -left-[6px] z-10"
                    style={{
                        top: useTransform(smoothProgress, (value) => `${value * 100}%`),
                        y: -8 // Center offse (half of height)
                    }}
                >
                    {/* Main Ball */}
                    <div className="relative w-4 h-4">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-md animate-pulse" />

                        {/* Core Ball */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-fuchsia-600 rounded-full border border-white/30 shadow-inner" />

                        {/* Specular Highlight */}
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px]" />
                    </div>
                </motion.div>

                {/* Start Node */}
                <div className="absolute top-0 w-2 h-2 bg-purple-500/50 rounded-full" />

                {/* End Node */}
                <div className="absolute bottom-0 w-2 h-2 bg-purple-500/50 rounded-full" />
            </div>
        </div>
    )
}
