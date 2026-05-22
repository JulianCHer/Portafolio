"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface DockProps {
  children: React.ReactNode;
  className?: string;
}

export function Dock({ children, className = "" }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-4 px-4 pb-3 ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return <DockItem mouseX={mouseX}>{child}</DockItem>;
        }
        return child;
      })}
    </motion.div>
  );
}

interface DockItemProps {
  mouseX: any;
  children: React.ReactNode;
}

function DockItem({ mouseX, children }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Calculate width/scale based on distance
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-xl hover:bg-white/20 transition-colors"
    >
      {children}
    </motion.div>
  );
}
