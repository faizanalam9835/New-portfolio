import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      <Toaster position="top-center" richColors />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b bg-background/90 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Your Name */}
          <motion.span
            className="font-display tracking-tight text-2xl gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Faizan Alam
          </motion.span>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Button key={item} variant="ghost" size="sm" asChild>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-foreground hover:text-primary"
                >
                  {item}
                </motion.a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden bg-background border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="justify-start"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            © 2025 Faizan Alam. Built with passion and dedication.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
