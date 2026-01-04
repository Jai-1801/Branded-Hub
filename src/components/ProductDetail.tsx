import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!product || !selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) added to your bag`,
    });

    setSelectedSize(null);
    setQuantity(1);
    onClose();
    setTimeout(() => openCart(), 300);
  };

  const handleClose = () => {
    setSelectedSize(null);
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/50 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-2xl bg-background z-50 overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-2 hover:opacity-70 transition-opacity"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image */}
              <div className="lg:w-1/2 h-[50vh] lg:h-full bg-secondary">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-2">
                    {product.category}
                  </p>
                  <h2 className="font-display text-4xl text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-foreground text-2xl mb-6">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>
                </motion.div>

                {/* Size selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-8"
                >
                  <p className="text-foreground text-xs tracking-[0.2em] uppercase mb-4">
                    Select Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[50px] h-12 border text-sm tracking-wide transition-all duration-300 ${selectedSize === size
                            ? "bg-foreground text-background border-foreground"
                            : "bg-transparent text-foreground border-border hover:border-foreground"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Quantity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-8"
                >
                  <p className="text-foreground text-xs tracking-[0.2em] uppercase mb-4">
                    Quantity
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center text-foreground font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </motion.div>

                {/* Add to cart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    variant="hero"
                    size="xl"
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Add to Cart — ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
