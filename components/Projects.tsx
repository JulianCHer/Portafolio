"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Carousel3D } from "@/components/ui/carousel-3d";

const projectsData = [
    {
        key: "projects.bonos.title",
        slug: "sistema-de-bonos",
        image: "/sistemabonos.png", // Placeholder
    },
    {
        key: "projects.licencias.title",
        slug: "sistema-de-licencias",
        image: "/licenses.png",
    },
    {
        key: "projects.hotel.title",
        slug: "sistema-de-gestion-de-hotel",
        image: "/hotel.png", // Placeholder
    },
    {
        key: "projects.elections.title",
        slug: "elecciones-colombia-2026",
        image: "/elections.png",
    }
];

// Aquí puedes colocar las URLs de tus páginas de WordPress
// Nota: Algunas páginas bloquean ser mostradas en iframes (X-Frame-Options). 
// Si alguna página tuya se ve en blanco, tendrás que usar una imagen estática.
const wpProjectsData = [
    {
        title: "Casa de la Licuadora Industrial",
        url: "https://casadelalicuadoraindustrial.com/",
        image: "/licuadora.png", // Imagen temporal
    },
    {
        title: "CEACAR",
        url: "https://ceacar.com.co/",
        image: "/ceacar.png", // Imagen temporal
    },
    {
        title: "DROI",
        url: "https://droi.com.co/",
        image: "/droi.png", // Imagen temporal
    }
];

export default function Projects() {
    const [hoveredButton, setHoveredButton] = useState<number | null>(null);
    const [hoveredButtonWP, setHoveredButtonWP] = useState<number | null>(null);
    const { t } = useLanguage();

    const carouselItems = projectsData.map((project, index) => ({
        id: index,
        content: (
            <div className="relative w-full h-full group bg-[#081324] border border-white/10 rounded-3xl overflow-hidden">
                <Image
                    src={project.image}
                    alt={t(project.key)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    priority={index === 0}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                        {t(project.key)}
                    </h3>
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
                                {t("projects.viewProject")}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }));

    const wpCarouselItems = wpProjectsData.map((project, index) => ({
        id: index + projectsData.length,
        content: (
            <div className="relative w-full h-full group bg-[#081324] border border-white/10 rounded-3xl overflow-hidden">
                {/* Imagen estática en lugar del Iframe */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    priority={index === 0}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay oscuro para legibilidad que se aclara en hover */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>

                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                        {project.title}
                    </h3>

                    {/* Botón "Visitar" */}
                    <div className="mt-auto flex justify-start pointer-events-auto">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredButtonWP(index)}
                            onMouseLeave={() => setHoveredButtonWP(null)}
                            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-200 text-gray-200 hover:text-white border border-white/20 bg-black/60 backdrop-blur-md"
                        >
                            {hoveredButtonWP === index && (
                                <motion.span
                                    layoutId="wp-magic-pill"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    style={{ boxShadow: "0 0 16px rgba(96,165,250,0.3)" }}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <AnimatePresence>
                                {hoveredButtonWP === index && (
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
                                Visitar Sitio
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }));

    return (
        <section id="proyectos" className="relative w-full py-16 lg:py-24 px-6 lg:px-12 flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto w-full space-y-32">

                {/* Sección Aplicativos Web */}
                <div className="w-full">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
                        Aplicativos Web
                    </h2>
                    <Carousel3D items={carouselItems} />
                </div>

                {/* Sección Páginas Web WordPress */}
                <div className="w-full">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
                        Páginas Web WordPress
                    </h2>
                    <Carousel3D items={wpCarouselItems} />
                </div>

            </div>
        </section>
    );
}
