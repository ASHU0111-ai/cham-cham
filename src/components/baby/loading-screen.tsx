
import { motion } from "framer-motion"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Blooming flower animation */}
        <motion.div className="relative w-40 h-40">
          {/* Petals */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-12 h-20 -ml-6 -mt-10 origin-bottom"
              style={{ rotate: i * 45 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
            >
              <svg viewBox="0 0 48 80" className="w-full h-full">
                <path
                  d="M24 0C24 0 0 20 0 50C0 65 10 80 24 80C38 80 48 65 48 50C48 20 24 0 24 0Z"
                  className="fill-pink-300 dark:fill-pink-400"
                />
              </svg>
            </motion.div>
          ))}
          
          {/* Center */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 dark:from-yellow-300 dark:to-yellow-400 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: "backOut" }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="font-serif text-2xl text-pink-600 dark:text-pink-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Preparing something magical...
        </motion.p>

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
