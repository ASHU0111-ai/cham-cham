
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: "petal" | "sparkle" | "heart" | "star" | "butterfly"
  xOffset1: number
  xOffset2: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const types: Particle["type"][] = ["petal", "sparkle", "heart", "star", "butterfly"]
    const newParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        type: types[Math.floor(Math.random() * 5)],
        xOffset1: Math.random() * 50 - 25,
        xOffset2: Math.random() * 100 - 50,
      })
    }
    setParticles(newParticles)
  }, [])

  const renderParticle = (type: Particle["type"], size: number) => {
    switch (type) {
      case "petal":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="currentColor"
              className="text-pink-300/60"
            />
          </svg>
        )
      case "sparkle":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
              fill="currentColor"
              className="text-yellow-200/70"
            />
          </svg>
        )
      case "heart":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
              fill="currentColor"
              className="text-pink-400/50"
            />
          </svg>
        )
      case "star":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
              className="text-yellow-300/60"
            />
          </svg>
        )
      case "butterfly":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12C12 12 8 8 4 8C0 8 0 12 0 12C0 12 0 16 4 16C8 16 12 12 12 12Z"
              fill="currentColor"
              className="text-purple-300/50"
            />
            <path
              d="M12 12C12 12 16 8 20 8C24 8 24 12 24 12C24 12 24 16 20 16C16 16 12 12 12 12Z"
              fill="currentColor"
              className="text-pink-300/50"
            />
          </svg>
        )
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, particle.xOffset1, particle.xOffset2],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {renderParticle(particle.type, particle.size)}
        </motion.div>
      ))}
    </div>
  )
}
