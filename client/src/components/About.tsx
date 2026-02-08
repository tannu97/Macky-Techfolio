import { SectionHeading } from "./ui/section-heading";
import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle2, Clock } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "6+", icon: Clock },
  { label: "Happy Clients", value: "448+", icon: Users },
  { label: "Projects Completed", value: "47+", icon: CheckCircle2 },
  { label: "Team Members", value: "34+", icon: Briefcase },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative image placeholder */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted relative">
                {/* coding setup image */}
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
                  alt="Modern tech office"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-display font-bold text-2xl">Building the Future</p>
                  <p className="opacity-80">One line of code at a time.</p>
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Top Rated</p>
                    <p className="text-sm text-muted-foreground">Excellence in Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading 
              title="Welcome to Macky's Tech" 
              alignment="left"
              className="mb-8"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                At Macky's Tech, we work with organizations to deliver software and IT solutions aligned with business needs. Our focus is on addressing real business challenges through thoughtfully designed technology solutions.
              </p>
              <p>
                We deliver capabilities across application development, cloud initiatives, automation, and enterprise technology support to help organizations navigate evolving digital requirements.
              </p>
              <p>
                Whether supporting cloud adoption, building software applications, implementing automation, or strengthening information security, Macky's Tech works with organizations to establish IT environments that are adaptable, well-managed, and aligned with business priorities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all text-center group"
            >
              <div className="h-12 w-12 mx-auto bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
