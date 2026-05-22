"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Carousel3DProps {
  items: {
    id: string | number;
    content: React.ReactNode;
  }[];
}

export function Carousel3D({ items }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-[85%] sm:max-w-sm md:max-w-xl lg:max-w-3xl h-full flex items-center justify-center perspective-[1200px]">
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + items.length) % items.length;
            const isNext = index === (activeIndex + 1) % items.length;
            
            // Calculamos posiciones relativas al índice activo
            let x = "0%";
            let scale = 1;
            let zIndex = 0;
            let opacity = 0;
            let rotateY = 0;

            if (isActive) {
              x = "0%";
              scale = 1;
              zIndex = 20;
              opacity = 1;
              rotateY = 0;
            } else if (isPrev) {
              x = "-65%";
              scale = 0.8;
              zIndex = 10;
              opacity = 0.6;
              rotateY = 15;
            } else if (isNext) {
              x = "65%";
              scale = 0.8;
              zIndex = 10;
              opacity = 0.6;
              rotateY = -15;
            } else {
              x = "0%";
              scale = 0.6;
              zIndex = 0;
              opacity = 0;
            }

            return (
              <motion.div
                key={item.id}
                className={`absolute w-full h-full rounded-3xl overflow-hidden transition-shadow duration-300
                  ${isActive ? 'cursor-default' : 'cursor-pointer hover:shadow-[0_8px_40px_rgba(59,130,246,0.3)]'}
                `}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity,
                  rotateY,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                style={{
                  boxShadow: isActive ? "0 20px 50px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.8)",
                  transformStyle: "preserve-3d"
                }}
              >
                {item.content}
                
                {/* Capa de oscurecimiento para elementos inactivos */}
                <motion.div 
                  className="absolute inset-0 bg-black pointer-events-none"
                  animate={{ opacity: isActive ? 0 : 0.4 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-0 right-0 px-4 md:px-12 flex justify-between z-30 pointer-events-none">
        <button 
          onClick={prev}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-white pointer-events-auto hover:scale-110 active:scale-95"
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <button 
          onClick={next}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-white pointer-events-auto hover:scale-110 active:scale-95"
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}
