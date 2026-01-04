import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function OrderSuccess() {
    const navigate = useNavigate();
    const [orderNumber] = useState(() =>
        `BH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    );

    useEffect(() => {
        // Trigger confetti animation
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#c9a959', '#1f1f1f', '#f5f5f4', '#d4a853']
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#c9a959', '#1f1f1f', '#f5f5f4', '#d4a853']
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-lg w-full text-center"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                    }}
                    className="relative mx-auto mb-8"
                >
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                        >
                            <CheckCircle size={48} className="text-accent" strokeWidth={1.5} />
                        </motion.div>
                    </div>

                    {/* Pulse rings */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 w-24 h-24 mx-auto bg-accent/10 rounded-full"
                    />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-display text-5xl md:text-6xl tracking-wide mb-4"
                >
                    ORDER PLACED!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-muted-foreground text-lg mb-8"
                >
                    Thank you for shopping with Branded Hub
                </motion.p>

                {/* Order Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="bg-secondary/30 p-8 mb-8 space-y-6"
                >
                    <div className="flex items-center justify-center gap-3 text-accent">
                        <Package size={20} />
                        <span className="text-sm tracking-widest uppercase">Order Confirmed</span>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-muted-foreground tracking-wider uppercase">Order Number</p>
                        <p className="font-display text-2xl tracking-wider">{orderNumber}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                        <Mail size={14} />
                        <span>Confirmation email sent to your inbox</span>
                    </div>
                </motion.div>

                {/* What's Next */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-4 mb-10"
                >
                    <h3 className="text-xs tracking-widest uppercase text-muted-foreground">What's Next</h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center mx-auto rounded-full">
                                <span className="font-display text-lg">1</span>
                            </div>
                            <p className="text-muted-foreground">Order Processing</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center mx-auto rounded-full">
                                <span className="font-display text-lg">2</span>
                            </div>
                            <p className="text-muted-foreground">Shipped</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center mx-auto rounded-full">
                                <span className="font-display text-lg">3</span>
                            </div>
                            <p className="text-muted-foreground">Delivered</p>
                        </div>
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="space-y-4"
                >
                    <Button
                        variant="hero"
                        size="xl"
                        className="w-full group"
                        onClick={() => navigate("/collection")}
                    >
                        Continue Shopping
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                        variant="minimal"
                        className="w-full"
                        onClick={() => navigate("/")}
                    >
                        Return to Home
                    </Button>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-xs text-muted-foreground mt-10"
                >
                    Questions about your order? Contact us at support@brandedhub.com
                </motion.p>
            </motion.div>
        </div>
    );
}
