import { motion } from "framer-motion";

const technologies = [
  { name: "React", logo: "/images/ract.png" },
  { name: "Node.js", logo: "/images/node.webp" },
  { name: "MongoDB", logo: "/images/mongo.jpeg" },
  { name: "Firebase", logo: "/images/fire.png" },
  { name: "AWS", logo: "/images/aws.png" },
  { name: "Tailwind", logo: "/images/tail.jpg" },
  { name: "Flutter", logo: "/images/flutter.jpg" },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
        <p className="text-muted-foreground mb-12">
          Tools powering our products.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
  {technologies.map((tech, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.15, y: -8 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="flex flex-col items-center"
    >
      {/* Circular logo */}
      <motion.img
        src={tech.logo}
        className="w-24 h-24 rounded-full object-cover 
                   border border-white/10 shadow-lg 
                   bg-white/5 p-4 backdrop-blur-md"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <span className="mt-3 text-sm text-gray-300">
        {tech.name}
      </span>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}