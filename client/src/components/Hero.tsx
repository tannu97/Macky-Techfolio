import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";

// Include the typing hook above or import it
// import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typedText = useTypingEffect("Macky's Tech Build", 120, 1500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bcg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-animated mix-blend-multiply opacity-70"></div>
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/30">
            Innovating for the Future 🚀
          </div>

          {/* Typing Effect on Heading */}
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
  <span className="text-gradient">{typedText}</span>
  <span className="blinking-cursor">|</span>
</h1>

          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 font-sans leading-relaxed">
            Web | App | Software | Cloud Solutions | Cyber Security
            <br />
            <span className="text-base md:text-lg opacity-80 mt-2 block">
              We engineer production-grade software that drives real business value.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              <Button className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all bg-white/20 backdrop-blur-md text-white border border-white/30">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="projects" smooth={true} duration={500} offset={-100}>
              <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2 bg-white/10 backdrop-blur-md text-white hover:bg-secondary/80">
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth={true} duration={500} offset={-100} className="cursor-pointer text-gray-100 hover:text-primary transition-colors">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </motion.div>
    </section>
  );
}