import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Team } from "@/components/Team";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-teal-400/30 overflow-hidden">
      
      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: Math.random() * 100 + "vw",
              animationDuration: 10 + Math.random() * 10 + "s",
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      {/* Smoke background */}
      <div className="smoke">
        <span style={{ left: "10%" }} />
        <span style={{ left: "50%", animationDelay: "8s" }} />
        <span style={{ left: "80%", animationDelay: "16s" }} />
      </div>

      {/* Bubbles */}
<div className="bubbles">
  {Array.from({ length: 10 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: Math.random() * 100 + "vw",

        // BIG BUBBLES
        width: 80 + Math.random() * 140 + "px",
        height: 80 + Math.random() * 140 + "px",

        animationDuration: 14 + Math.random() * 12 + "s",
        animationDelay: Math.random() * 6 + "s",
      }}
    />
  ))}
</div>

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
  <Technologies />
</Reveal>


<Reveal>
  <Team />
</Reveal>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}