import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center",
  className = "" 
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className={`h-1.5 w-24 bg-primary rounded-full mt-6 ${alignment === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
