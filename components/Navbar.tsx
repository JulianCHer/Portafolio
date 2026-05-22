"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const linksData = [
    { key: "nav.home", href: "/" },
    { key: "nav.projects", href: "/proyectos" },
    { key: "nav.about", href: "/sobre-mi" },
];

export default function Navbar() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { t, language, setLanguage } = useLanguage();

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/[0.06]"
        >
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

                <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
                    {linksData.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.key)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className={`relative px-6 py-2 text-md font-medium rounded-full transition-colors duration-200 ${isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {hoveredLink === link.key && (
                                <motion.span
                                    layoutId="magic-pill"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    style={{ boxShadow: "0 0 16px rgba(96,165,250,0.15)" }}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <AnimatePresence>
                                {(hoveredLink === link.key || isActive(link.href)) && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-[6px] right-[8px] w-1.5 h-1.5 rounded-full bg-blue-400"
                                        style={{ boxShadow: "0 0 6px 2px rgba(96,165,250,0.6)" }}
                                    />
                                )}
                            </AnimatePresence>

                            <span className="relative z-10">{t(link.key)}</span>
                        </Link>
                    ))}
                </div>


                <div className="flex items-center ml-auto gap-3">
                    <button
                        onClick={() => setLanguage(language === "es" ? "en" : "es")}
                        className="flex items-center justify-center px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-gray-300 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                        aria-label="Toggle language"
                    >
                        {language === "es" ? (
                            <span className="flex items-center gap-2">
                                <img src="https://flagcdn.com/w20/co.png" srcSet="https://flagcdn.com/w40/co.png 2x" width="16" alt="Colombia" className="rounded-sm" />
                                ES
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" width="16" alt="USA" className="rounded-sm" />
                                EN
                            </span>
                        )}
                    </button>
                    
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.10] text-gray-300 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.svg key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </motion.svg>
                                ) : (
                                    <motion.svg key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed top-14 left-0 w-full h-[calc(100dvh-3.5rem)] bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col gap-8 items-center w-full px-4 pb-20">
                            {linksData.map((link, i) => (
                                <motion.div
                                    key={link.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-3xl font-semibold tracking-wide transition-colors duration-200 ${isActive(link.href) ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                                    >
                                        {t(link.key)}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
