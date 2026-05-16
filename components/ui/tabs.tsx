"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type Tab = {
  title: React.ReactNode;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  propId = "tabs",
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  propId?: string;
}) => {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const [hoveringTab, setHoveringTab] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center relative w-full py-4 gap-2 lg:gap-4",
          containerClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab)}
            onMouseEnter={() => setHoveringTab(tab.value)}
            onMouseLeave={() => setHoveringTab(null)}
            className={cn("relative px-6 py-2 text-sm lg:text-base font-medium rounded-full transition-colors duration-200", tabClassName, active.value === tab.value ? "text-white" : "text-gray-400 hover:text-white")}
          >
            {hoveringTab === tab.value && (
                <motion.span
                    layoutId={`${propId}-hover-pill`}
                    className="absolute inset-0 rounded-full bg-white/10"
                    style={{ boxShadow: "0 0 16px rgba(96,165,250,0.15)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
            
            <AnimatePresence>
                {(hoveringTab === tab.value || active.value === tab.value) && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.15 }}
                        className={cn("absolute top-[6px] right-[8px] w-1.5 h-1.5 rounded-full bg-blue-400", activeTabClassName)}
                    />
                )}
            </AnimatePresence>

            <span className="relative z-10 block">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <div className={cn("relative w-full mt-4 lg:mt-6 min-h-[120px]", contentClassName)}>
        <AnimatePresence mode="wait">
            {tabs.map((tab) => (
                active.value === tab.value && (
                    <motion.div
                        key={tab.value}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="w-full flex justify-center"
                    >
                        {tab.content}
                    </motion.div>
                )
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};
