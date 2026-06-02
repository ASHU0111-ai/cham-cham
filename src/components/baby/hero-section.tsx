
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Floating cute elements */}
      <FloatingElement
        className="absolute top-20 left-10 md:left-20"
        delay={0}
      >
        <TeddyBear />
      </FloatingElement>
      
      <FloatingElement
        className="absolute top-32 right-10 md:right-24"
        delay={0.5}
      >
        <CutePanda />
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-32 left-10 md:left-32"
        delay={1}
      >
        <Balloon color="pink" />
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-40 right-10 md:right-20"
        delay={1.5}
      >
        <Balloon color="purple" />
      </FloatingElement>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Ribbon decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <RibbonBow />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 mb-6 leading-tight"
        >
          Welcome my Little Princess
        </motion.h1>

        {/* Baby icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="flex justify-center gap-4 mb-8"
        >
          <span className="text-4xl">&#x1F476;</span>
          <span className="text-4xl">&#x1F380;</span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          A beautiful baby girl has arrived to fill the world with love, laughter, and tiny little miracles.
        </motion.p>

        {/* Hearts animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-3"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-400 fill-pink-400" />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

function FloatingElement({ children, className, delay }: { children: React.ReactNode; className?: string; delay: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function TeddyBear() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
      {/* Ears */}
      <circle cx="18" cy="18" r="12" className="fill-amber-300" />
      <circle cx="62" cy="18" r="12" className="fill-amber-300" />
      <circle cx="18" cy="18" r="6" className="fill-amber-200" />
      <circle cx="62" cy="18" r="6" className="fill-amber-200" />
      {/* Head */}
      <circle cx="40" cy="40" r="28" className="fill-amber-300" />
      {/* Face */}
      <circle cx="40" cy="48" r="12" className="fill-amber-100" />
      {/* Eyes */}
      <circle cx="30" cy="38" r="4" className="fill-gray-800" />
      <circle cx="50" cy="38" r="4" className="fill-gray-800" />
      <circle cx="31" cy="37" r="1.5" className="fill-white" />
      <circle cx="51" cy="37" r="1.5" className="fill-white" />
      {/* Nose */}
      <ellipse cx="40" cy="48" rx="5" ry="3" className="fill-pink-400" />
      {/* Mouth */}
      <path d="M35 53 Q40 58 45 53" stroke="#666" strokeWidth="1.5" fill="none" />
      {/* Blush */}
      <circle cx="24" cy="46" r="4" className="fill-pink-200/60" />
      <circle cx="56" cy="46" r="4" className="fill-pink-200/60" />
      {/* Heart */}
      <motion.g
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <path
          d="M40 70 L36 66 C30 60 30 54 34 52 C38 50 40 54 40 54 C40 54 42 50 46 52 C50 54 50 60 44 66 L40 70Z"
          className="fill-pink-400"
        />
      </motion.g>
    </svg>
  )
}

function CutePanda() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" className="drop-shadow-lg">
      {/* Ears */}
      <circle cx="14" cy="14" r="10" className="fill-gray-800" />
      <circle cx="56" cy="14" r="10" className="fill-gray-800" />
      {/* Head */}
      <circle cx="35" cy="38" r="26" className="fill-white" />
      {/* Eye patches */}
      <ellipse cx="22" cy="34" rx="10" ry="12" className="fill-gray-800" />
      <ellipse cx="48" cy="34" rx="10" ry="12" className="fill-gray-800" />
      {/* Eyes */}
      <circle cx="22" cy="34" r="5" className="fill-white" />
      <circle cx="48" cy="34" r="5" className="fill-white" />
      <circle cx="23" cy="33" r="2" className="fill-gray-800" />
      <circle cx="49" cy="33" r="2" className="fill-gray-800" />
      {/* Nose */}
      <ellipse cx="35" cy="46" rx="4" ry="3" className="fill-gray-800" />
      {/* Mouth */}
      <path d="M30 50 Q35 55 40 50" stroke="#333" strokeWidth="1.5" fill="none" />
      {/* Blush */}
      <circle cx="15" cy="44" r="4" className="fill-pink-300/50" />
      <circle cx="55" cy="44" r="4" className="fill-pink-300/50" />
      {/* Heart hugging */}
      <motion.path
        d="M35 62 L30 57 C22 49 22 42 27 39 C32 36 35 41 35 41 C35 41 38 36 43 39 C48 42 48 49 40 57 L35 62Z"
        className="fill-pink-400"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </svg>
  )
}

function Balloon({ color }: { color: "pink" | "purple" }) {
  const fillClass = color === "pink" ? "fill-pink-300" : "fill-purple-300"
  const highlightClass = color === "pink" ? "fill-pink-100" : "fill-purple-100"
  
  return (
    <svg width="50" height="80" viewBox="0 0 50 80" className="drop-shadow-md">
      <ellipse cx="25" cy="30" rx="22" ry="28" className={fillClass} />
      <ellipse cx="18" cy="20" rx="6" ry="8" className={highlightClass} opacity="0.5" />
      <polygon points="25,58 20,65 30,65" className={fillClass} />
      <path d="M25 65 Q27 70 25 75 Q23 80 25 85" stroke="#888" strokeWidth="1" fill="none" />
    </svg>
  )
}

function RibbonBow() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" className="drop-shadow-md">
      {/* Left loop */}
      <ellipse cx="30" cy="25" rx="25" ry="20" className="fill-pink-400" />
      <ellipse cx="28" cy="20" rx="8" ry="6" className="fill-pink-200" opacity="0.5" />
      {/* Right loop */}
      <ellipse cx="90" cy="25" rx="25" ry="20" className="fill-pink-400" />
      <ellipse cx="88" cy="20" rx="8" ry="6" className="fill-pink-200" opacity="0.5" />
      {/* Center knot */}
      <circle cx="60" cy="28" r="12" className="fill-pink-500" />
      <circle cx="58" cy="25" r="4" className="fill-pink-300" opacity="0.5" />
      {/* Tails */}
      <path d="M52 38 L40 58 L48 55 L52 38" className="fill-pink-400" />
      <path d="M68 38 L80 58 L72 55 L68 38" className="fill-pink-400" />
    </svg>
  )
}
