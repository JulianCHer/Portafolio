"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

export const Dock = ({ items }: { items: { title: string; icon: React.ReactNode }[] }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-[90px] items-end gap-3 lg:gap-4 px-4 lg:px-8 pb-3"
    >
      {items.map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
};

function DockIcon({
  mouseX,
  item,
}: {
  mouseX: any;
  item: { title: string; icon: React.ReactNode };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative flex flex-col items-center justify-end h-full">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.8 }}
            className="absolute -top-12 whitespace-nowrap rounded-md bg-[#081324] border border-white/20 px-3 py-1.5 text-xs lg:text-sm font-semibold text-white shadow-xl z-50 pointer-events-none"
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex aspect-square items-center justify-center rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] cursor-pointer transition-colors duration-200"
      >
        {item.icon}
      </motion.div>
    </div>
  );
}
