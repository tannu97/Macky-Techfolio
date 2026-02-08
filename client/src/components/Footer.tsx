import { Code2, Heart } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-0 rounded-lg">
              <img
                src="/images/cropped-image.png" // <-- Replace this with your logo path
                alt="Macky's Tech Logo"
                className="h-8 w-auto"
              />
            </div>
            <span className="text-xl font-bold text-white font-display">Macky's Tech</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-right">
            <p className="mb-2">&copy; {new Date().getFullYear()} Macky's Tech. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-end gap-1 opacity-60 text-xs">
                Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}