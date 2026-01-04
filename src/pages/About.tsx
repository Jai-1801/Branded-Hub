import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";

const values = [
  {
    number: "01",
    title: "Quality First",
    description: "Every piece is crafted with premium materials and meticulous attention to detail."
  },
  {
    number: "02",
    title: "Timeless Design",
    description: "We create pieces that transcend seasons and trends, built to last."
  },
  {
    number: "03",
    title: "Sustainable Approach",
    description: "Responsible production methods that respect both people and planet."
  },
  {
    number: "04",
    title: "Individual Expression",
    description: "Fashion as a form of self-expression, not conformity."
  }
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header variant="light" />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4"
              >
                Our Story
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-section text-foreground mb-8"
              >
                WEAR THE BRAND.
                <br />
                BE THE BRAND.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                Founded in 2024, Branded Hub emerged from a simple belief: that 
                premium streetwear should be accessible without compromising on 
                quality. We bridge the gap between luxury fashion and street culture, 
                creating pieces that speak to the modern individual.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed"
              >
                Our physical store serves as more than a retail space—it's a 
                community hub where style enthusiasts gather, share, and discover 
                their next statement piece.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutStudio}
                alt="Branded Hub Studio"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase mb-4"
          >
            What We Stand For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-section mb-16"
          >
            OUR VALUES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-primary-foreground/20 pt-8"
              >
                <span className="text-primary-foreground/40 font-display text-xl">
                  {value.number}
                </span>
                <h3 className="font-display text-3xl mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4"
              >
                Visit Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-section text-foreground mb-8"
              >
                THE FLAGSHIP
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-foreground font-medium mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Fashion District<br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10AM - 8PM<br />
                    Sunday: 11AM - 6PM
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    hello@brandedhub.com<br />
                    +1 (212) 555-0123
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-secondary aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-4">Map Placeholder</p>
                <p className="text-xs text-muted-foreground/60">
                  Interactive map coming soon
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section text-foreground mb-8"
          >
            DISCOVER THE COLLECTION
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collection">
              <Button variant="hero" size="xl">
                Shop Now
              </Button>
            </Link>
            <Link to="/lookbook">
              <Button variant="heroOutline" size="xl">
                View Lookbook
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
};

export default About;
