import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-8 md:py-12 border-t border-stone-800 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="col-span-2 md:col-span-1 space-y-3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Mooiste<span className="text-amber-500">Cafe</span></h3>
            <p className="text-stone-400 text-xs leading-relaxed max-w-xs">
              Tempat di mana kopi bertemu inspirasi.
            </p>
            <div className="flex gap-4 pt-1">
              <a href="#" className="hover:text-amber-500 transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Twitter size={18} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Facebook size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-amber-500">Home</a></li>
              <li><a href="#" className="hover:text-amber-500">Our Menu</a></li>
              <li><a href="#" className="hover:text-amber-500">Story</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Kontak</h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex gap-2 items-start">
                <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Jl. Senopati No. 88</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={14} className="text-amber-500 shrink-0" />
                <span>+62 812...</span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-stone-800 md:border-none">
            <h4 className="text-white font-bold mb-3">Jam Buka</h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-stone-400">
              <div>
                <p className="text-stone-500">Sen - Jum</p>
                <p className="text-white">08:00 - 22:00</p>
              </div>
              <div>
                <p className="text-stone-500">Sab - Min</p>
                <p className="text-white">09:00 - 23:00</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-center text-xs text-stone-600">
          <p>&copy; 2026 Mooiste Cafe. Built with ☕ by Boss.</p>
        </div>
      </div>
    </footer>
  );
}