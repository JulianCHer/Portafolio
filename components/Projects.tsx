"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Sistema de Bonos",
        slug: "sistema-de-bonos",
        image: "/bonoslogin.png", // Placeholder
    },
    {
        title: "Sistema de Licencias",
        slug: "sistema-de-licencias",
        image: "/licencias.png", // Placeholder
    },
    {
        title: "Sistema de Gestión de Hotel",
        slug: "sistema-de-gestion-de-hotel",
        image: "/hotel.png", // Placeholder
    }
];

export default function Projects() {
    const [hovered, setHovered] = useState<number | null>(null);
    const [hoveredButton, setHoveredButton] = useState<number | null>(null);

    return (
        <section id="proyectos" className="relative w-full min-h-screen py-24 px-6 lg:px-12 flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="uppercase font-bold text-[30px] lg:text-[40px] text-white text-center">Proyectos Destacados</h2>
                    <div className="w-24 h-1 bg-blue-500 mt-4 rounded-full"></div>
                </motion.div>

                {/* Focus Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            className={`relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] w-full transition-all duration-300 ease-out cursor-default border border-white/10 bg-[#081324]/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)]
                                ${hovered !== null && hovered !== index ? "blur-sm scale-[0.98] opacity-50" : "scale-100 opacity-100 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)]"}`}
                        >
                            {/* Imagen de fondo */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500"
                            />

                            {/* Overlay oscuro para legibilidad que se aclara en hover */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${hovered === index ? "opacity-40" : "opacity-10"}`}></div>

                            {/* Contenido (Aparece y se mueve arriba en hover) */}
                            <div className={`absolute inset-0 flex flex-col justify-end p-6 lg:p-8 transition-all duration-500 ${hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-md">
                                    {project.title}
                                </h3>

                                {/* Botón "Ver proyecto" estilo Navbar Hover */}
                                <div className="mt-auto flex justify-start">
                                    <Link
                                        href={`/proyectos/${project.slug}`}
                                        onMouseEnter={() => setHoveredButton(index)}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 text-gray-200 hover:text-white border border-white/20 bg-black/40 backdrop-blur-md"
                                    >
                                        {hoveredButton === index && (
                                            <motion.span
                                                layoutId="project-magic-pill"
                                                className="absolute inset-0 rounded-full bg-white/10"
                                                style={{ boxShadow: "0 0 16px rgba(96,165,250,0.3)" }}
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <AnimatePresence>
                                            {hoveredButton === index && (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-[8px] right-[10px] w-1.5 h-1.5 rounded-full bg-blue-400"
                                                    style={{ boxShadow: "0 0 6px 2px rgba(96,165,250,0.6)" }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <span className="relative z-10 flex items-center gap-2">
                                            Ver proyecto
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
