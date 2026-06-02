
import { motion } from "framer-motion"
import { Heart, Star, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Decorative stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-3 h-3 text-pink-300/50 fill-pink-300/50" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-300" />
          <Sparkles className="w-6 h-6 text-pink-400" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-300" />
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 mb-6">
            Made with{" "}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="inline w-6 h-6 text-pink-500 fill-pink-500" />
            </motion.span>{" "}
            for our little princess
          </p>

          {/* Ribbon bow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="inline-block mb-8"
          >
            <span className="text-4xl">&#x1F380;</span>
          </motion.div>
        </motion.div>

        {/* Baby footprints decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-8 mb-8"
        >
          <BabyFootprint className="rotate-[-15deg]" />
          <BabyFootprint className="rotate-[15deg]" />
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          With endless love and joy
        </motion.p>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-100/50 to-transparent dark:from-pink-900/20 pointer-events-none" />
    </footer>
  )
}

function BabyFootprint({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="50"
      viewBox="0 0 40 50"
      className={`text-pink-300/60 ${className}`}
      fill="currentColor"
    >
      {/* Main foot */}
      <ellipse cx="20" cy="32" rx="14" ry="18" />
      {/* Toes */}
      <circle cx="8" cy="10" r="5" />
      <circle cx="16" cy="5" r="5" />
      <circle cx="25" cy="5" r="5" />
      <circle cx="33" cy="10" r="5" />
      <circle cx="36" cy="18" r="4" />
    </svg>
  )
}
