import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CreditCard, Lock, ShoppingBag, ChevronLeft, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/store/cartStore";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 5000 ? 0 : 199;
  const tax = Math.round(totalPrice * 0.18 * 100) / 100;
  const grandTotal = totalPrice + shippingCost + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    clearCart();
    navigate("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-6" />
          <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to proceed with checkout</p>
          <Button variant="hero" onClick={() => navigate("/collection")}>
            Browse Collection
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="text-sm tracking-wide">Back</span>
            </button>
            <h1 className="font-display text-2xl tracking-wide">BRANDED HUB</h1>
            <div className="flex items-center gap-2 text-accent">
              <Lock size={14} />
              <span className="text-xs tracking-wider uppercase">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Payment Form */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl mb-8 tracking-wide">PAYMENT DETAILS</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-sm tracking-wider uppercase text-muted-foreground border-b border-border pb-2">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-wider uppercase">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="text-sm tracking-wider uppercase text-muted-foreground border-b border-border pb-2">
                  Shipping Address
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-xs tracking-wider uppercase">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="John"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-xs tracking-wider uppercase">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className="text-xs tracking-wider uppercase">Address</Label>
                  <Input
                    id="address"
                    required
                    placeholder="123 Fashion Street"
                    className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <Label htmlFor="city" className="text-xs tracking-wider uppercase">City</Label>
                    <Input
                      id="city"
                      required
                      placeholder="New York"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-xs tracking-wider uppercase">State</Label>
                    <Input
                      id="state"
                      required
                      placeholder="NY"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="text-xs tracking-wider uppercase">ZIP</Label>
                    <Input
                      id="zip"
                      required
                      placeholder="10001"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-4">
                <h3 className="text-sm tracking-wider uppercase text-muted-foreground border-b border-border pb-2 flex items-center gap-2">
                  <CreditCard size={16} />
                  Payment
                </h3>
                <div>
                  <Label htmlFor="cardNumber" className="text-xs tracking-wider uppercase">Card Number</Label>
                  <Input
                    id="cardNumber"
                    required
                    placeholder="4242 4242 4242 4242"
                    className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-xs tracking-wider uppercase">Expiry Date</Label>
                    <Input
                      id="expiry"
                      required
                      placeholder="MM/YY"
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-xs tracking-wider uppercase">CVV</Label>
                    <Input
                      id="cvv"
                      required
                      placeholder="123"
                      type="password"
                      maxLength={4}
                      className="mt-2 bg-secondary/50 border-border focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Processing...
                  </span>
                ) : (
                  `Pay ₹${grandTotal.toLocaleString('en-IN')}`
                )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-secondary/30 p-8 sticky top-24">
              <h2 className="font-display text-2xl mb-6 tracking-wide">ORDER SUMMARY</h2>

              {/* Items */}
              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6 pr-2">
                {items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-secondary flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.product.name}</h4>
                      <p className="text-muted-foreground text-xs mt-1">Size: {item.size}</p>
                      <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                      <p className="text-foreground text-sm mt-2">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Shipping note */}
              <div className="flex items-center gap-2 text-accent text-xs mb-6 pb-6 border-b border-border">
                <Truck size={14} />
                {shippingCost === 0 ? (
                  <span>Free shipping on orders over ₹5,000!</span>
                ) : (
                  <span>Add ₹{(5000 - totalPrice).toLocaleString('en-IN')} more for free shipping</span>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span>₹{tax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-3 border-t border-border">
                  <span>Total</span>
                  <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
