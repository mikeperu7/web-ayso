"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [stage, setStage] = useState<"drawing" | "filled" | "exiting" | "hidden">("drawing");

  useEffect(() => {
    // 1. Inicia dibujado de lineas (CSS anim) durante 1s
    const fillTimer = setTimeout(() => {
      setStage("filled");
    }, 1000);

    // 2. Comienza a desaparecer (fade out) a los 2.2s
    const exitTimer = setTimeout(() => {
      setStage("exiting");
    }, 2200);

    // 3. Oculta del DOM por completo a los 3s
    const hideTimer = setTimeout(() => {
      setStage("hidden");
    }, 3000);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] transition-opacity duration-700 pointer-events-none ${
        stage === "exiting" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Usaremos un enfoque puramente tipográfico estilizado si no tenemos SVG, o un logo textual como se planeó */}
        <h1 
          className={`font-heading text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-1000 ease-out
            ${stage === "drawing" ? "text-transparent stroke-text" : "text-white scale-95"}`}
        >
          AYSO
        </h1>
        <div 
           className={`h-[2px] bg-accent mt-4 transition-all duration-700 ease-in-out
           ${stage === "drawing" ? "w-0 opacity-0" : "w-full opacity-100"}`} 
        />
        <style dangerouslySetInnerHTML={{__html: `
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          }
        `}} />
      </div>
    </div>
  );
}
