
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const letterContent = `For my pyaari bhanji,

Meri pyaari si chamcham🩷
Aap jb aay mjhe boht achaa lgaa ...meri ittti cutiee si chotii si babyyy🐣 Maamu lovesss u sooo muchhhh😚
 Jaldi se bdi hojao fir mama k sath khub khelna..mai aapko khub sari chiziiii dilaunga ...khub ghumauga ..aapki mummy ki ek baat ni suni jaygi! 
Mil k dono mastii krengeee..mummy mna krti rhe unki koi ni sunega ...okiee bby🥰
 ...mamuu ki cutiee si babygirl ...jldi jldi badii hojaooo..abhi aap boht chotuuu si ho ..km km royaa kro , soya kam kro😴...or Aapki mataji ne mujhe bahut peeta hai to mummy ko khub pareshaan kiya kro 👉🏻👈🏻
Meri Chamcham.❤️

With all our love,
your mama!`

export function LetterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4" id="letter" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-4">
            A Letter to Our chamcham
          </h2>
          <p className="text-muted-foreground text-lg">Words from my heart</p>
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden glass-strong border-pink-200/30 p-8 md:p-12">
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-pink-50/50 dark:from-slate-800/50 dark:to-purple-900/30" />
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <FlowerCorner />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20 rotate-180">
              <FlowerCorner />
            </div>

            {/* Letter content with handwriting animation */}
            <div className="relative">
              <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
                {isVisible ? (
                  letterContent.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.008,
                        duration: 0.1,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : (
                  <span className="opacity-0">{letterContent}</span>
                )}
              </div>

              {/* Signature with heart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: letterContent.length * 0.008 + 0.5, duration: 0.5 }}
                className="mt-8 flex justify-end"
              >
                <div className="flex items-center gap-2">
                  <HeartSignature />
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function FlowerCorner() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="40"
          cy="20"
          rx="12"
          ry="18"
          className="fill-pink-300"
          transform={`rotate(${angle} 40 40)`}
        />
      ))}
      {/* Center */}
      <circle cx="40" cy="40" r="10" className="fill-yellow-300" />
    </svg>
  )
}

function HeartSignature() {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      <path
        d="M30 50 L22 42 C10 30 10 18 18 12 C26 6 30 14 30 14 C30 14 34 6 42 12 C50 18 50 30 38 42 L30 50Z"
        className="fill-pink-400"
      />
      <path
        d="M30 45 L24 39 C14 29 14 20 20 15 C26 10 30 16 30 16"
        className="fill-pink-300"
        opacity="0.5"
      />
    </motion.svg>
  )
}
