
import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

interface Star {
  id: number
  left: number
  top: number
  duration: number
  delay: number
}

export function DreamyBackground() {
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setMounted(true)
    // Generate stars on client side only to avoid hydration mismatch
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setStars(generatedStars)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-200/40 to-rose-300/30 blur-3xl dark:from-pink-500/20 dark:to-purple-500/20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-purple-200/40 to-pink-300/30 blur-3xl dark:from-purple-500/20 dark:to-pink-500/20"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-rose-200/30 to-pink-200/30 blur-3xl dark:from-rose-500/15 dark:to-pink-500/15"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Stars for dark mode */}
      <div className="hidden dark:block">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Moon for dark mode */}
      <motion.div
        className="hidden dark:block absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-[0_0_60px_rgba(255,255,200,0.5)]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Clouds for light mode */}
      <div className="dark:hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute opacity-60"
            style={{
              top: `${10 + i * 15}%`,
              left: `${-20 + i * 30}%`,
            }}
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 60 + i * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg width="200" height="100" viewBox="0 0 200 100" className="fill-white/80">
              <ellipse cx="70" cy="60" rx="50" ry="30" />
              <ellipse cx="100" cy="50" rx="40" ry="25" />
              <ellipse cx="130" cy="60" rx="45" ry="28" />
              <ellipse cx="100" cy="65" rx="60" ry="30" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
