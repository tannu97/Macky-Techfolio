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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-animated ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="p-0 rounded-lg group-hover:scale-105 transition-transform duration-200">
            <img
              src="/images/cropped-image.png" // <-- Replace this with your logo path
              alt="Macky's Tech Logo"
              className="h-8 w-auto"
            />
          </div>
          <span className="text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors">
            Macky's Tech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              activeClass="text-primary font-semibold after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <Button className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-accent rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-4 hover:bg-muted rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <Button className="w-full font-semibold">Get a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}