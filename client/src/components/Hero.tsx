import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typedText = useTypingEffect("Macky's Tech Build", 120, 1500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm border border-white/20"
          >
            Innovating for the Future 🚀
          </motion.div>

          {/* Typing Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-gradient">{typedText}</span>
            <span className="blinking-cursor">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Web | App | Software | Cloud Solutions | Cyber Security
            <br />
            <span className="text-base md:text-lg opacity-80 mt-2 block">
              We engineer production-grade software that drives real business value.
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="contact" smooth duration={500} offset={-50}>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Button className="h-14 px-8 text-lg rounded-full bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/30">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>

            <Link to="projects" smooth duration={500} offset={-100}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Button
                  variant="outline"
                  className="h-14 px-8 text-lg rounded-full border-white/30"
                >
                  View Projects
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
}