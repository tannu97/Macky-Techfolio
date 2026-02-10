import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Macky",
    role: "Founder & Full-Stack Developer",
    image: "/images/per1.avif",
  },
  {
    name: "Aman",
    role: "UI/UX Designer",
    image: "/images/per2.jpg",
  },
  {
    name: "Riya",
    role: "Backend Engineer",
    image: "/images/per3.avif",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-400 mb-12">
          Meet the people building Macky's Tech.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-6 text-center purple-glow"
            >
              <motion.img
                src={member.image}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border border-white/20"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}