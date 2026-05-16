
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/profile3.png";

export default function Presentation() {
    const [hoveredContact, setHoveredContact] = useState<string | null>(null);
    return (
        <section className="relative w-full min-h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden pt-24 lg:pt-14 pb-12 lg:pb-0">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 relative z-10">
                <div className="image relative flex justify-center items-end lg:items-center w-full lg:w-[40%] order-1 lg:order-2 h-[450px] sm:h-[600px] lg:h-full mt-4 lg:mt-0">

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 flex justify-center items-end lg:items-center h-full w-full"
                    >
                        <Image
                            src={photo}
                            quality={100}
                            alt="Profile-photo"
                            className="w-auto h-auto max-h-full max-w-full"
                            style={{
                                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                            }}
                        />
                    </motion.div>


                    {[
                        { name: "DigitalOcean", src: "/digitalocean.svg", top: "8%", left: "10%", delay: 0.3 },
                        { name: "React", src: "/react.svg", top: "18%", left: "2%", delay: 0 },
                        { name: "JavaScript", src: "/js.svg", top: "28%", left: "12%", delay: 0.8 },
                        { name: "Laravel", src: "/laravel.svg", top: "38%", left: "2%", delay: 2.8 },
                        { name: "Vue.js", src: "/vue.svg", top: "48%", left: "10%", delay: 1 },
                        { name: "TypeScript", src: "/typescript.svg", top: "58%", left: "1%", delay: 1.4 },
                        { name: "Java", src: "/java.svg", top: "68%", left: "10%", delay: 1.8 },
                        { name: "CSS3", src: "/css.svg", top: "78%", left: "1%", delay: 2 },
                        { name: "WordPress", src: "/wordpress.svg", top: "88%", left: "10%", delay: 1.7 },

                        { name: "Next.js", src: "/next.svg", top: "12%", right: "10%", delay: 0.5, bgClass: "bg-white" },
                        { name: "Python", src: "/python.svg", top: "24%", right: "2%", delay: 1.2 },
                        { name: "Tailwind CSS", src: "/tailwind.svg", top: "36%", right: "15%", delay: 0.9 },
                        { name: "PHP", src: "/php.svg", top: "48%", right: "2%", delay: 1.5 },
                        { name: "SQL", src: "/sql.svg", top: "60%", right: "15%", delay: 2.2 },
                        { name: "HTML5", src: "/html.svg", top: "72%", right: "2%", delay: 2.5 },
                        { name: "Git", src: "/git.svg", top: "84%", right: "15%", delay: 1.1 },
                    ].map((icon, index) => (
                        <motion.div
                            key={index}
                            title={icon.name}
                            className={`absolute z-20 flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-full backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] cursor-pointer transition-colors ${icon.bgClass || "bg-white/5 hover:bg-white/10"}`}
                            style={{
                                top: icon.top,
                                bottom: icon.bottom,
                                left: icon.left,
                                right: icon.right,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -15, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.7 + (index * 0.1) },
                                scale: { type: "spring", stiffness: 200, damping: 10, delay: 0.7 + (index * 0.1) },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 + icon.delay }
                            }}
                        >
                            <img src={icon.src} alt={`${icon.name} icon`} className="w-5 h-5 lg:w-7 lg:h-7 object-contain" />
                        </motion.div>
                    ))}
                </div>


                <div className="information flex flex-col justify-center items-center lg:items-start w-full lg:w-[55%] z-10 order-2 lg:order-1 py-8 lg:py-0 text-center lg:text-left">
                    <h1 className="uppercase font-bold text-[36px] lg:text-[50px] flex flex-wrap justify-center lg:justify-start">
                        {Array.from("Julián Hernandez").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 + 0.2 }}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="roles flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-2 lg:gap-3 mt-3 mb-6 w-full"
                    >
                        <Link href="/sobre-mi?master=experiencia&role=ceo">
                            <h3 className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-full border border-blue-500/40 bg-[#081324] text-blue-100 font-semibold text-xs lg:text-[13px] shadow-[0_0_15px_rgba(59,130,246,0.15)] whitespace-nowrap hover:bg-blue-500/20 cursor-pointer transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400 shrink-0">
                                    <path d="M11.64 5.23a.75.75 0 00-1.28 0l-1.39 2.5a5.25 5.25 0 01-2.24 2.24l-2.5 1.39a.75.75 0 000 1.28l2.5 1.39a5.25 5.25 0 012.24 2.24l1.39 2.5a.75.75 0 001.28 0l1.39-2.5a5.25 5.25 0 012.24-2.24l2.5-1.39a.75.75 0 000-1.28l-2.5-1.39a5.25 5.25 0 01-2.24-2.24l-1.39-2.5zM21.5 3a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0121.5 3zM18.5 18a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0118.5 18z" />
                                </svg>
                                CEO de Lazarus Tech
                            </h3>
                        </Link>
                        <Link href="/sobre-mi?master=experiencia&role=ingeniero">
                            <h3 className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-full border border-blue-500/40 bg-[#081324] text-blue-100 font-semibold text-xs lg:text-[13px] shadow-[0_0_15px_rgba(59,130,246,0.15)] whitespace-nowrap hover:bg-blue-500/20 cursor-pointer transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400 shrink-0">
                                    <path d="M11.64 5.23a.75.75 0 00-1.28 0l-1.39 2.5a5.25 5.25 0 01-2.24 2.24l-2.5 1.39a.75.75 0 000 1.28l2.5 1.39a5.25 5.25 0 012.24 2.24l1.39 2.5a.75.75 0 001.28 0l1.39-2.5a5.25 5.25 0 012.24-2.24l2.5-1.39a.75.75 0 000-1.28l-2.5-1.39a5.25 5.25 0 01-2.24-2.24l-1.39-2.5zM21.5 3a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0121.5 3zM18.5 18a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0118.5 18z" />
                                </svg>
                                Ingeniero Informático Full Stack
                            </h3>
                        </Link>
                        <Link href="/sobre-mi?master=experiencia&role=techlead">
                            <h3 className="inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 rounded-full border border-blue-500/40 bg-[#081324] text-blue-100 font-semibold text-xs lg:text-[13px] shadow-[0_0_15px_rgba(59,130,246,0.15)] whitespace-nowrap hover:bg-blue-500/20 cursor-pointer transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400 shrink-0">
                                    <path d="M11.64 5.23a.75.75 0 00-1.28 0l-1.39 2.5a5.25 5.25 0 01-2.24 2.24l-2.5 1.39a.75.75 0 000 1.28l2.5 1.39a5.25 5.25 0 012.24 2.24l1.39 2.5a.75.75 0 001.28 0l1.39-2.5a5.25 5.25 0 012.24-2.24l2.5-1.39a.75.75 0 000-1.28l-2.5-1.39a5.25 5.25 0 01-2.24-2.24l-1.39-2.5zM21.5 3a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0121.5 3zM18.5 18a.75.75 0 01.75.75v.5h.5a.75.75 0 010 1.5h-.5v.5a.75.75 0 01-1.5 0v-.5h-.5a.75.75 0 010-1.5h.5v-.5A.75.75 0 0118.5 18z" />
                                </svg>
                                Tech Lead
                            </h3>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="description text-justify max-w-lg"
                    >
                        <p className="text-gray-300 text-sm lg:text-base">No solo escribo código, diseño soluciones digitales que transforman la operación de tu negocio. Especialista en automatizar procesos complejos, conectar sistemas empresariales en tiempo real y liderar equipos técnicos hacia entregas eficientes.</p>
                    </motion.div>

                    {/* Botones de Contacto */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1, delayChildren: 1.8 }
                            }
                        }}
                        className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4 mt-8 w-full"
                        onMouseLeave={() => setHoveredContact(null)}
                    >
                        {[
                            { name: "Gmail", src: "/gmail.svg", href: "mailto:julianhernandezgon@gmail.com", brandColor: "#EA4335" },
                            { name: "WhatsApp", src: "/whatsapp.svg", href: "https://wa.me/573142110985", brandColor: "#25D366" },
                            { name: "Git", src: "/git.svg", href: "https://github.com/JulianCHer?tab=repositories", brandColor: "#9ca3af" },
                            { name: "LinkedIn", src: "/linkedin.svg", href: "https://www.linkedin.com/in/julian-hernandez-gon", brandColor: "#0A66C2" },
                        ].map((btn, index) => (
                            <motion.a
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                                    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 10 } }
                                }}
                                href={btn.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredContact(btn.name)}
                                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {hoveredContact === btn.name && (
                                    <motion.span
                                        layoutId="contact-pill"
                                        className="absolute inset-0 rounded-full bg-white/10"
                                        style={{ boxShadow: `0 0 16px ${btn.brandColor}25` }}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <AnimatePresence>
                                    {hoveredContact === btn.name && (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-[8px] right-[10px] w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: btn.brandColor, boxShadow: `0 0 6px 2px ${btn.brandColor}80` }}
                                        />
                                    )}
                                </AnimatePresence>
                                <img src={btn.src} alt={`${btn.name} icon`} className="relative z-10 w-4 h-4 object-contain" />
                                <span className="relative z-10 text-sm font-medium">{btn.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

