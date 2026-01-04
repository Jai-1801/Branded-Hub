import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <img
          src={heroBg}
          alt="Branded Hub Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase mb-4"
        >
          New Collection 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-hero text-primary-foreground leading-none drop-shadow-[0_4px_60px_rgba(255,255,255,0.3)]"
        >
          WEAR THE
          <br />
          BRAND
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase mt-8 max-w-md"
        >
          Street. Style. Statement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={onExplore}
          >
            Shop Now
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
          >
            View Lookbook
          </Button>
        </motion.div>
      </motion.div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="text-primary-foreground/40 text-xs tracking-[0.3em] uppercase -rotate-90 origin-center whitespace-nowrap">
          Premium Streetwear
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="text-primary-foreground/40 text-xs tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
          Since 2024
        </p>
      </motion.div>
    </section>
  );
}
