import { useState } from "react";
import { useProjects } from "@/hooks/use-portfolio";
import { SectionHeading } from "./ui/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web", "App", "Software"];

// Fallback images if API doesn't provide them
const placeholderImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // business
  "https://images.unsplash.com/photo-1555421689-492a1880ce49?w=800&q=80", // web
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", // mobile
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // analytics
];

export function Projects() {
 const projects = [
  {
    id: 1,
    title: "Billing System",
    description: "Super market billing system with inventory management.",
    category: "Software",
    imageUrl: "/assets/img/navimage/mackys-logo/png/logo.png",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Responsive portfolio website for Macky's Tech.",
    category: "Web",
    imageUrl: "/assets/img/navimage/mackys-logo/png/logo.png",
    techStack: ["React", "Tailwind"],
  },
];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects?.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  ) || [];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Showcasing Our Best Work"
        />

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                  : "bg-background text-muted-foreground hover:bg-muted border border-border"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
               [1, 2, 3].map((i) => (
                 <div key={i} className="h-96 rounded-2xl bg-muted animate-pulse" />
               ))
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    {/* Use provided image URL or fallback to a random placeholder */}
                    <img 
                      src={project.imageUrl || placeholderImages[index % placeholderImages.length]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground font-bold backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack?.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group/btn">
                      View Details <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
