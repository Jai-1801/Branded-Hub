import { motion } from "framer-motion";
import { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { products, categories } from "@/data/products";
import { Product } from "@/data/products";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface HorizontalScrollSectionProps {
  onProductClick: (product: Product) => void;
}

export function HorizontalScrollSection({ onProductClick }: HorizontalScrollSectionProps) {
  const { containerRef, scrollProgress } = useHorizontalScroll();
  const sectionRef = useRef<HTMLElement>(null);

  // Group products by category
  const groupedProducts = {
    Shoes: products.filter(p => p.category === "Shoes"),
    "Shirts & T-Shirts": products.filter(p => p.category === "T-Shirts" || p.category === "Shirts"),
    "Pants & Bags": products.filter(p => p.category === "Pants" || p.category === "Bags"),
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background py-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-12"
      >
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
          The Collection
        </p>
        <h2 className="text-section text-foreground">
          EXPLORE THE RUNWAY
        </h2>
      </motion.div>

      {/* Progress indicator */}
      <div className="container mx-auto px-6 mb-8">
        <div className="h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-foreground"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-20 pl-6 pr-[50vw] min-w-max">
          {Object.entries(groupedProducts).map(([categoryName, categoryProducts], groupIndex) => (
            <div key={categoryName} className="flex flex-col gap-8">
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <span className="text-foreground font-display text-xl tracking-wider">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-12 bg-border" />
                <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                  {categoryName}
                </span>
              </motion.div>

              {/* Products row */}
              <div className="flex gap-8">
                {categoryProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={groupIndex * 3 + index}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="container mx-auto px-6 mt-12"
      >
        <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
          Scroll horizontally to explore →
        </p>
      </motion.div>
    </section>
  );
}
