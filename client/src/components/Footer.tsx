import { Code2, Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Logo and About */}
          <div className="flex flex-col md:w-1/3 gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/cropped-image.png"
                alt="Macky's Tech Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white font-display">Macky's Tech</span>
            </div>
            <p className="text-sm opacity-80">
              Macky's Tech is your go-to platform for tech tutorials, projects, and insights. 
              We aim to help students and professionals grow in the field of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:w-1/3 gap-2">
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="text-sm opacity-80 space-y-1">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:w-1/3 gap-2">
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p className="flex items-center gap-2 text-sm opacity-80">
              <Mail className="h-4 w-4" /> info@mackystech.com
            </p>
            <p className="flex items-center gap-2 text-sm opacity-80">
              <Phone className="h-4 w-4" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-sm opacity-80">
              <MapPin className="h-4 w-4" /> Sonipat, Haryana, India
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-4 text-center text-sm opacity-70 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Macky's Tech. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}