"use client"

import { useState, useEffect } from "react";
// 1. Import motion dari framer-motion
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1920",
    title: "Nikmati Kopi Terbaik",
    desc: "Biji kopi pilihan untuk inspirasi harimu."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920",
    title: "Suasana Nyaman",
    desc: "Tempat perfect buat nugas."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1920",
    title: "Pastry Fresh Oven",
    desc: "Teman setia secangkir kopimu."
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] h-[50vh] md:h-[460px] w-full m-auto relative group overflow-hidden"> 
      <motion.div 
        className="w-full h-full flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{ backgroundImage: `url(${slide.url})` }}
            className="min-w-full h-full rounded-none bg-center bg-cover relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/40 "></div>

            <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                    {slide.title}
                </h1>
                <p className="text-sm md:text-2xl font-light drop-shadow-md opacity-90">
                    {slide.desc}
                </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center py-2 gap-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all duration-500 h-1.5 rounded-full shadow-sm ${
                currentIndex === slideIndex ? "bg-white w-6" : "bg-white/50 w-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}