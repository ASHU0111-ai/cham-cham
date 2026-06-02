
import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const messages = [
  {
    id: 1,
    text: "mama ke sath khub saari ghumi ghumi karna😎.",
    icon: Heart,
  },
  {
    id: 2,
    text: "apni mummy ki ek baat na sunna (padhai likhai wali sun lena) 👻",
    icon: MessageCircle,
  },
  {
    id: 3,
    text: "jaldi jaldi se nani ke ghar aaya karna chamcham.😙",
    icon: Heart,
  },
  {
    id: 4,
    text: "Beta bde ho kr kuch bhi bnna bs engineer mt bnna.. 🎀",
    icon: MessageCircle,
  },
]

export function TimelineSection() {
  return (
    <section className="py-20 px-4" id="messages">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400 mb-4">
            my message to chamcham
          </h2>
          <p className="text-muted-foreground text-lg">Words from the heart</p>
        </motion.div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.map((message, index) => {
            const IconComponent = message.icon
            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="relative bg-gradient-to-br from-pink-50/50 to-rose-50/50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 border-pink-200/50 dark:border-pink-700/50 hover:border-pink-300/80 transition-colors h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <IconComponent className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    </motion.div>
                  </div>
                  <p className="text-foreground font-serif text-lg leading-relaxed flex-grow">
                    {message.text}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
