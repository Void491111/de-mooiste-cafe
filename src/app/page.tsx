import HeroCarousel from "@/components/ui/heroCarousel";
import { Coffee, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 pt-20">
      <HeroCarousel /> 

      <section className="relative z-20 -mt-16 md:-mt-12 max-w-280 mx-auto px-4 *:">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="bg-white rounded-sm shadow-md h-24 md:h-24 flex flex-row items-center justify-center gap-4 border border-gray-200 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
            <div className="text-amber-600 flex items-center justify-center">
              <Coffee size={32} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800">Premium Beans</h3>
         </div>
          <div className="bg-white rounded-sm shadow-md h-24 md:h-24 flex flex-row items-center justify-center gap-4 border border-gray-200 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
            <div className="text-amber-600 flex items-center justify-center">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800">Our Location</h3>
         </div>
          <div className="bg-white rounded-sm shadow-md h-24 md:h-24 flex flex-row items-center justify-center gap-4 border border-gray-200 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
            <div className="text-amber-600 flex items-center justify-center">
              <Clock size={32} />
            </div>
            <h3 className="font-bold text-lg md:text-xl text-slate-800">Opening Hour</h3>
         </div>
        </div>

      </section>

    </main>
  );
}