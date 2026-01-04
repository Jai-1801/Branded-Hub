import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

interface HeaderProps {
  variant?: "light" | "dark";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  
  const textColor = variant === "light" ? "text-foreground" : "text-primary-foreground";
  const bgColor = variant === "light" ? "bg-background/80" : "bg-transparent";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-sm`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${textColor} p-2 -ml-2 lg:hidden`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {["Collection", "Lookbook", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className={`${textColor} text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a href="/" className={`font-display text-2xl ${textColor} tracking-wider`}>
          BRANDED HUB
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className={`hidden lg:block ${textColor} text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300`}
          >
            Search
          </a>
          <button
            onClick={openCart}
            className={`${textColor} relative p-2 -mr-2 hover:opacity-70 transition-opacity duration-300`}
            aria-label="Open cart"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0 }}
        className="lg:hidden overflow-hidden bg-background"
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {["Collection", "Lookbook", "About", "Search"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-foreground text-sm tracking-[0.15em] uppercase hover:opacity-70 transition-opacity duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
