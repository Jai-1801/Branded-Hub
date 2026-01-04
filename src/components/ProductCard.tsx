import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

export function ProductCard({ product, index, onClick }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={onClick}
      className="group cursor-pointer flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
    >
      <div className="relative overflow-hidden bg-secondary aspect-[3/4]">
        {/* Image with parallax effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5">
            {product.category}
          </span>
        </div>

        {/* Quick view overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-foreground/20 flex items-center justify-center"
        >
          <span className="text-primary-foreground text-xs tracking-[0.2em] uppercase bg-foreground/80 backdrop-blur-sm px-6 py-3">
            Quick View
          </span>
        </motion.div>
      </div>

      {/* Product info */}
      <div className="pt-6 space-y-2">
        <h3 className="font-medium text-foreground tracking-wide">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          ${product.price}
        </p>
      </div>
    </motion.article>
  );
}
