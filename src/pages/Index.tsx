import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { ProductDetail } from "@/components/ProductDetail";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Product } from "@/data/products";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Auto-show shop when scrolling past hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showShop) {
            setShowShop(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [showShop]);

  const handleExplore = () => {
    setShowShop(true);
    setTimeout(() => {
      shopRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleCloseProductDetail = () => {
    setIsProductDetailOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header - changes based on section */}
      <Header variant={showShop ? "light" : "dark"} />

      {/* Hero Section */}
      <HeroSection onExplore={handleExplore} />

      {/* Scroll trigger zone */}
      <div ref={triggerRef} className="h-20 bg-background relative z-10" />

      {/* Shop Section - slides over hero */}
      <AnimatePresence>
        {showShop && (
          <motion.div
            ref={shopRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 bg-background"
          >
            {/* Marquee banner */}
            <MarqueeBanner />

            {/* Horizontal scroll products */}
            <HorizontalScrollSection onProductClick={handleProductClick} />

            {/* Featured section */}
            <section className="py-24 bg-secondary">
              <div className="container mx-auto px-6 text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4"
                >
                  The Brand Philosophy
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-section text-foreground max-w-4xl mx-auto"
                >
                  WE DON'T FOLLOW TRENDS.
                  <br />
                  WE CREATE STATEMENTS.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground max-w-xl mx-auto mt-8 leading-relaxed"
                >
                  Each piece in our collection is crafted with intention, designed for those who understand that true style is timeless. Premium materials, impeccable craftsmanship, and designs that speak volumes without saying a word.
                </motion.p>
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll prompt when shop not shown */}
      {!showShop && (
        <div className="h-[50vh] flex items-center justify-center bg-background">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-4">
              Scroll to explore
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border border-border rounded-full mx-auto flex items-start justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Product Detail Panel */}
      <ProductDetail
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={handleCloseProductDetail}
      />

      {/* Cart Drawer */}
      <CartDrawer />
    </main>
  );
};

export default Index;
