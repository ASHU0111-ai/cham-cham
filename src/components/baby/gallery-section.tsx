
import { motion } from "framer-motion"
import { useState } from "react"
import { Heart, Camera } from "lucide-react"
import { Card } from "@/components/ui/card"

const placeholderImages = [
  { id: 1, alt: "Precious moment 1", src: "/p1.jpeg" },
  { id: 2, alt: "Precious moment 2", src: "/p41.jpeg" },
  { id: 3, alt: "Precious moment 3", src: "/p3.jpeg" },
  { id: 4, alt: "Precious moment 4", src: "/v11.mp4", type: "video" },
  { id: 5, alt: "Precious moment 5", src: "/v12.mp4", type: "video" },
  { id: 6, alt: "Precious moment 6", src: "/p6.jpeg" },
]

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-4">
            Memory Gallery
          </h2>
          <p className="text-muted-foreground text-lg">Precious moments captured forever</p>
        </motion.div>

        {/* Polaroid gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: (index % 2 === 0 ? -3 : 3) }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
              }}
              onHoverStart={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              <Card className="relative bg-white dark:bg-slate-800 p-3 pb-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Image/Video placeholder */}
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-sm overflow-hidden relative">
                  {image.src ? (
                    image.type === "video" ? (
                      <video src={image.src} controls className="w-full h-full object-cover" />
                    ) : (
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    )
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-pink-300 dark:text-pink-600" />
                      </div>
                      
                      {/* Kawaii decoration */}
                      <div className="absolute bottom-2 right-2">
                        <KawaiiBunny />
                      </div>
                    </>
                  )}
                </div>

                {/* Caption area */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="font-serif text-sm text-muted-foreground">
                    {image.alt}
                  </p>
                </div>

                {/* Floating heart on hover */}
                <motion.div
                  className="absolute -top-3 -right-3"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={hoveredId === image.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="relative">
                    <Heart className="w-10 h-10 text-pink-500 fill-pink-500 drop-shadow-lg" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <span className="text-white text-xs font-bold">+1</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/80 dark:bg-yellow-200/60 rotate-1" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KawaiiBunny() {
  return (
    <svg width="40" height="50" viewBox="0 0 40 50" className="opacity-50">
      {/* Ears */}
      <ellipse cx="12" cy="12" rx="6" ry="12" className="fill-pink-200" />
      <ellipse cx="28" cy="12" rx="6" ry="12" className="fill-pink-200" />
      <ellipse cx="12" cy="12" rx="3" ry="8" className="fill-pink-100" />
      <ellipse cx="28" cy="12" rx="3" ry="8" className="fill-pink-100" />
      {/* Head */}
      <circle cx="20" cy="32" r="16" className="fill-pink-100" />
      {/* Eyes */}
      <circle cx="14" cy="30" r="2" className="fill-gray-800" />
      <circle cx="26" cy="30" r="2" className="fill-gray-800" />
      {/* Nose */}
      <ellipse cx="20" cy="35" rx="2" ry="1.5" className="fill-pink-400" />
      {/* Blush */}
      <circle cx="9" cy="34" r="3" className="fill-pink-200/60" />
      <circle cx="31" cy="34" r="3" className="fill-pink-200/60" />
    </svg>
  )
}
