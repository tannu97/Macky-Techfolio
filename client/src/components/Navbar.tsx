import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Team", to: "team" },
  { name: "Technologies", to: "technologies" },
  { name: "Contact", to: "contact" },
];
  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const navItem = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Animated Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2"
        >
          <motion.img
            whileHover={{ rotate: -5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            src="/images/cropped-image.png"
            alt="Logo"
            className="h-8 w-auto"
          />

          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold font-display tracking-tight"
          >
            Macky's Tech
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItem}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            variants={navItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <Button className="font-semibold shadow-lg shadow-primary/20">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-foreground hover:bg-accent rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium py-2 px-4 hover:bg-muted rounded-lg cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}