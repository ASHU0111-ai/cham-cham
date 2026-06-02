
import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface SparklePosition {
  id: number
  x: number
  y: number
  size: number
}

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<SparklePosition[]>([])
  const [isMoving, setIsMoving] = useState(false)

  const addSparkle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random()
    const size = Math.random() * 10 + 5

    setSparkles((prev) => [...prev.slice(-15), { id, x, y, size }])

    // Remove sparkle after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id))
    }, 1000)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setIsMoving(true)
      
      // Add sparkle with some randomness
      if (Math.random() > 0.7) {
        addSparkle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        )
      }

      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [addSparkle])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
              className="fill-pink-400"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
