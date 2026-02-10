import { useServices } from "@/hooks/use-portfolio";
import { SectionHeading } from "./ui/section-heading";
import { 
  Code2, Smartphone, Palette, ShieldCheck, 
  Bot, BarChart3, Megaphone, Cloud,
  LucideIcon,
  Server
} from "lucide-react";
import { motion } from "framer-motion";

// Map icon strings to components
const iconMap: Record<string, LucideIcon> = {
  "Code2": Code2,
  "Smartphone": Smartphone,
  "Palette": Palette,
  "ShieldCheck": ShieldCheck,
  "Bot": Bot,
  "BarChart3": BarChart3,
  "Megaphone": Megaphone,
  "Cloud": Cloud,
  "Server": Server
};

export function Services() {
  const { data: services, isLoading } = useServices();

  // Fallback data
  const fallbackServices = [
    { title: "Web Development", description: "Custom websites and web applications built with modern technologies.", icon: "Code2" },
    { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android.", icon: "Smartphone" },
    { title: "UI/UX Design", description: "Beautiful, intuitive designs that enhance user experience.", icon: "Palette" },
    { title: "Cyber Security", description: "Protect your data and systems from cyber threats.", icon: "ShieldCheck" },
    { title: "AI & ML", description: "AI and Machine Learning solutions to automate processes.", icon: "Bot" },
    { title: "Data Analytics", description: "Transform your data into actionable insights.", icon: "BarChart3" },
    { title: "Digital Marketing", description: "Boost your online presence with comprehensive strategies.", icon: "Megaphone" },
    { title: "Cloud & IT Solutions", description: "Secure, scalable, and cost-effective cloud solutions.", icon: "Cloud" },
  ];

  const displayServices = (services && services.length > 0) ? services : fallbackServices;

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Image + Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/ser.jpg" // put your image in public/images
          alt="Services Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-animated mix-blend-multiply opacity-60"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive Technology Solutions for Your Business"
        />

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-black/10 border border-white/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-24 h-24 transform translate-x-4 -translate-y-4" />
                  </div>
                  
                  <div className="h-14 w-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-100 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}