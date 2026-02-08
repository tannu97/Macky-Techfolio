import { useState } from "react";
import { SectionHeading } from "./ui/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Categories for filtering
const categories = ["All", "Web", "App", "Software"];

// Hardcoded projects array
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard",
    category: "Software",
    imageUrl: "/images/project1.png",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts, nutrition, and fitness goals with real-time synchronization.",
    category: "Web",
    imageUrl: "/images/project2.png",
    techStack: ["React", "Tailwind"],
  },
  {
    id: 3,
    title: "CRM System",
    description: "Comprehensive customer relationship management system with analytics and reporting features.",
    category: "App",
    imageUrl: "/images/project3.png",
    techStack: ["Flutter", "Firebase"],
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Modern restaurant website with online ordering, menu management, and reservation system.",
    category: "Web",
    imageUrl: "/images/project4.png",
    techStack: ["React", "Node.js"],
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Cross-platform social media application with real-time messaging and content sharing.",
    category: "Software",
    imageUrl: "/images/project5.png",
    techStack: ["Python", "Django"],
  },
  {
    id: 6,
    title: "Inventory Management",
    description: "Enterprise inventory management system with barcode scanning and automated reporting.",
    category: "App",
    imageUrl: "/images/project6.png",
    techStack: ["React Native", "Firebase"],
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on category
  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-secondary/30 bg-gradient-animated">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Showcasing Our Best Work"
        />

        {/* Filter buttons */}
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
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

                {/* Project details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
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
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}