import { motion } from "framer-motion";

export function MarqueeBanner() {
  const text = "NEW ARRIVALS • FREE SHIPPING OVER $150 • PREMIUM QUALITY • ";
  
  return (
    <div className="bg-foreground text-primary-foreground py-3 overflow-hidden">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-xs tracking-[0.3em] uppercase mx-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
