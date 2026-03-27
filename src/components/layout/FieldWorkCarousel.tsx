"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/trabajo-campo-1.jpeg",
  "/images/trabajo-campo-2.jpeg",
  "/images/trabajo-campo-3.jpeg",
  "/images/trabajo-campo-4.jpeg",
  "/images/trabajo-campo-5.jpeg",
];

export default function FieldWorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl shadow-2xl overflow-hidden group">
      
      {/* Images container */}
      {IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Trabajo de campo técnico A&SO ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0} // LCP Optimization for first image
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gradient overlay to ensure text contrast if added later, and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? "w-8 bg-brand-orange"
                : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
