
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MusicPlayerProps {
  audioSrc?: string
  title?: string
}

export function MusicPlayer({ audioSrc, title = "pretty little baby" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = 0.3
    
    // Set audio source if provided
    if (audioSrc) {
      audioRef.current.src = audioSrc
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioSrc])

  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, that's okay
      })
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing"
      whileHover={{ scale: 1.05 }}
    >
      <div className="glass-strong rounded-2xl p-4 shadow-xl border border-pink-200/30 min-w-[200px]">
        <div className="flex items-center gap-4">
          {/* Vinyl disc */}
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg"
          >
            {/* Vinyl grooves */}
            <div className="absolute inset-2 rounded-full border border-gray-700" />
            <div className="absolute inset-4 rounded-full border border-gray-700" />
            {/* Center label */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center">
              <Music className="w-3 h-3 text-white" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-medium">Now Playing</span>
            <span className="text-sm font-serif text-foreground">pretty little baby</span>
            
            {/* Equalizer bars */}
            <div className="flex gap-0.5 h-4 items-end">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-pink-500 to-rose-400 rounded-full"
                  animate={isPlaying && !isMuted ? {
                    height: [4, 12 + Math.random() * 8, 4],
                  } : { height: 4 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={togglePlay}
              className="w-8 h-8 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-pink-500" />
              ) : (
                <Play className="w-4 h-4 text-pink-500" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="w-8 h-8 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-pink-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-pink-500" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
