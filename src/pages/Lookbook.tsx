import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const lookbookItems = [
  {
    id: 1,
    title: "Urban Edge",
    season: "Fall/Winter 2026",
    image: lookbook1,
    description: "Bold statements meet street sensibility in our latest collection."
  },
  {
    id: 2,
    title: "Minimal Flow",
    season: "Fall/Winter 2026",
    image: lookbook2,
    description: "Clean lines and effortless silhouettes for the modern minimalist."
  },
  {
    id: 3,
    title: "Street Motion",
    season: "Fall/Winter 2026",
    image: lookbook3,
    description: "Movement and style converge in our sneaker-forward looks."
  }
];

const Lookbook = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header variant="light" />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Fall/Winter 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-section"
          >
            THE LOOKBOOK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 max-w-xl mt-6 leading-relaxed"
          >
            Explore our curated collection through the lens of urban culture. 
            Each look tells a story of style, confidence, and individuality.
          </motion.p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {lookbookItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[3/4] lg:aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute top-6 left-6">
                  <span className="bg-background text-foreground text-xs tracking-[0.2em] uppercase px-4 py-2">
                    Look {String(item.id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">
                  {item.season}
                </p>
                <h2 className="font-display text-5xl lg:text-6xl text-foreground mb-6">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                  {item.description}
                </p>
                <div>
                  <Link to="/collection">
                    <Button variant="hero">
                      Shop This Look
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section text-foreground mb-8"
          >
            READY TO ELEVATE YOUR STYLE?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/collection">
              <Button variant="hero" size="xl">
                View Full Collection
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

export default Lookbook;
