import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-foreground text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl tracking-wide mb-6">BRANDED HUB</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium streetwear for the modern individual. Curated pieces that define your style statement.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collection"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Info</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Stores
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              {["Instagram", "Twitter", "Pinterest", "YouTube"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/10 pt-12 mb-12">
          <div className="max-w-md">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Newsletter</h4>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Subscribe for exclusive access to new drops, special offers, and style inspiration.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-primary-foreground/20 px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary-foreground text-foreground px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-xs">
          <p>© 2026 Branded Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
