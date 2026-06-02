import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/baby/loading-screen";
import { DreamyBackground } from "@/components/baby/dreamy-background";
import { FloatingParticles } from "@/components/baby/floating-particles";
import { CursorSparkles } from "@/components/baby/cursor-sparkles";
import { ThemeToggle } from "@/components/baby/theme-toggle";
import { HeroSection } from "@/components/baby/hero-section";
import { LetterSection } from "@/components/baby/letter-section";
import { ParentsSection } from "@/components/baby/parents-section";
import { GallerySection } from "@/components/baby/gallery-section";
import { TimelineSection } from "@/components/baby/message-section";
import { MusicPlayer } from "@/components/baby/music-player";
import { Footer } from "@/components/baby/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <DreamyBackground />
        <FloatingParticles />
        <CursorSparkles />
        <ThemeToggle />

        <main className="relative">
          <HeroSection />

          <SectionFade><GallerySection /></SectionFade>
          <SectionFade><LetterSection /></SectionFade>
          <SectionFade><ParentsSection /></SectionFade>
          <SectionFade><TimelineSection /></SectionFade>

          <Footer />
        </main>
      </motion.div>

      <MusicPlayer audioSrc="/music.mp3" title="Lullaby" />
    </>
  );
}

function SectionFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
