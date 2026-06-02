
import { motion } from "framer-motion"
import { Heart, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ParentsSection() {
  return (
    <section className="py-20 px-4" id="parents">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-4">
            To the Happy Parents
          </h2>
          <p className="text-muted-foreground text-lg">Celebrating a beautiful new chapter</p>
        </motion.div>

        {/* Main celebration card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden glass-strong border-pink-200/30 p-8 md:p-12">
            {/* Floral frame */}
            <FloralFrame />
            
            <div className="relative text-center">
              {/* Family illustration */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-8 flex justify-center"
              >
                <FamilyIllustration />
              </motion.div>

              {/* Congratulations message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Congratulations!
                </h3>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-8">
                 Your home is now blessed with the pitter-patter of tiny feet, the sweetest coos, and the most precious smiles. May your journey as parents be filled with countless joyful moments and beautiful memories.
                </p>

                {/* Decorative hearts */}
                <div className="flex justify-center gap-4">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -8, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    >
                      <Heart
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          i % 2 === 0
                            ? "text-pink-400 fill-pink-400"
                            : "text-rose-400 fill-rose-400"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Additional message cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="glass-strong border-pink-200/30 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">To the New Mommy</h4>
                  <p className="text-foreground/70">
                    You carried her with love, brought her into this world with strength, and will nurture her with endless devotion. You are amazing!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="glass-strong border-pink-200/30 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">To the Proud Daddy</h4>
                  <p className="text-foreground/70">
                    Your little princess has arrived, ready to steal your heart forever. Get ready for tea parties, endless cuddles, and being wrapped around her tiny finger!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FloralFrame() {
  return (
    <>
      {/* Top left */}
      <div className="absolute top-0 left-0 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[0, 30, 60, 90, 120].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="30"
              rx="8"
              ry="25"
              className="fill-pink-400"
              transform={`rotate(${angle} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="12" className="fill-yellow-300" />
        </svg>
      </div>
      
      {/* Top right */}
      <div className="absolute top-0 right-0 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[90, 120, 150, 180, 210].map((angle, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="30"
              rx="8"
              ry="25"
              className="fill-pink-400"
              transform={`rotate(${angle} 100 0)`}
            />
          ))}
          <circle cx="100" cy="0" r="12" className="fill-yellow-300" />
        </svg>
      </div>

      {/* Bottom left */}
      <div className="absolute bottom-0 left-0 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[-30, 0, 30, 60, 90].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="70"
              rx="8"
              ry="25"
              className="fill-rose-400"
              transform={`rotate(${angle} 0 100)`}
            />
          ))}
          <circle cx="0" cy="100" r="12" className="fill-yellow-300" />
        </svg>
      </div>

      {/* Bottom right */}
      <div className="absolute bottom-0 right-0 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[90, 120, 150, 180, 210].map((angle, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="70"
              rx="8"
              ry="25"
              className="fill-rose-400"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="12" className="fill-yellow-300" />
        </svg>
      </div>
    </>
  )
}

function FamilyIllustration() {
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" className="drop-shadow-lg">
      {/* Background heart */}
      <motion.path
        d="M100 140 L70 110 C30 70 30 30 60 15 C90 0 100 30 100 30 C100 30 110 0 140 15 C170 30 170 70 130 110 L100 140Z"
        className="fill-pink-100 dark:fill-pink-900/30"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Mom */}
      <g transform="translate(50, 40)">
        {/* Hair */}
        <ellipse cx="25" cy="20" rx="22" ry="24" className="fill-amber-800" />
        {/* Face */}
        <circle cx="25" cy="25" r="18" className="fill-amber-100" />
        {/* Eyes */}
        <circle cx="19" cy="23" r="2" className="fill-gray-800" />
        <circle cx="31" cy="23" r="2" className="fill-gray-800" />
        {/* Smile */}
        <path d="M20 30 Q25 35 30 30" stroke="#666" strokeWidth="1.5" fill="none" />
        {/* Blush */}
        <circle cx="15" cy="28" r="3" className="fill-pink-200/60" />
        <circle cx="35" cy="28" r="3" className="fill-pink-200/60" />
        {/* Body */}
        <path d="M10 45 Q25 55 40 45 L35 80 L15 80 Z" className="fill-pink-400" />
      </g>

      {/* Dad */}
      <g transform="translate(110, 35)">
        {/* Hair */}
        <ellipse cx="25" cy="15" rx="20" ry="12" className="fill-amber-900" />
        {/* Face */}
        <circle cx="25" cy="25" r="18" className="fill-amber-100" />
        {/* Eyes */}
        <circle cx="19" cy="23" r="2" className="fill-gray-800" />
        <circle cx="31" cy="23" r="2" className="fill-gray-800" />
        {/* Smile */}
        <path d="M20 30 Q25 35 30 30" stroke="#666" strokeWidth="1.5" fill="none" />
        {/* Body */}
        <path d="M8 45 Q25 55 42 45 L37 85 L13 85 Z" className="fill-blue-400" />
      </g>

      {/* Baby */}
      <motion.g
        transform="translate(80, 85)"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Blanket */}
        <ellipse cx="20" cy="25" rx="25" ry="20" className="fill-pink-300" />
        {/* Face */}
        <circle cx="20" cy="15" r="14" className="fill-amber-50" />
        {/* Eyes */}
        <ellipse cx="15" cy="14" rx="2" ry="1" className="fill-gray-800" />
        <ellipse cx="25" cy="14" rx="2" ry="1" className="fill-gray-800" />
        {/* Smile */}
        <path d="M16 19 Q20 22 24 19" stroke="#666" strokeWidth="1" fill="none" />
        {/* Blush */}
        <circle cx="11" cy="17" r="2" className="fill-pink-200/60" />
        <circle cx="29" cy="17" r="2" className="fill-pink-200/60" />
        {/* Bow */}
        <g transform="translate(20, 2)">
          <ellipse cx="-6" cy="0" rx="5" ry="3" className="fill-pink-500" />
          <ellipse cx="6" cy="0" rx="5" ry="3" className="fill-pink-500" />
          <circle cx="0" cy="0" r="2" className="fill-pink-600" />
        </g>
      </motion.g>
    </svg>
  )
}
