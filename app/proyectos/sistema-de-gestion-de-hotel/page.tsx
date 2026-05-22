"use client";

import Navbar from "../../../components/Navbar";
import { Safari } from "../../../components/magicui/safari";
import dynamic from "next/dynamic";
const Iphone15Pro = dynamic(() => import("@/components/magicui/iphone-15-pro").then(mod => mod.Iphone15Pro), { ssr: false });
import { Dock } from "@/components/ui/dock";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

export default function SistemaDeGestionDeHotel() {
    const { t } = useLanguage();
    
    const renderHighlightedText = (text: string) => {
        return text.split('**').map((part, i) => 
            i % 2 === 1 ? <span key={i} className="text-white font-semibold">{part}</span> : part
        );
    };
    // Definimos las tecnologías de ejemplo
    const technologies = [
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    ];

    return (
        <main className="min-h-screen pt-24 px-6 lg:px-12 flex flex-col items-center overflow-x-hidden bg-transparent selection:bg-blue-500/30">
            <Navbar />
            
            <div className="max-w-7xl mx-auto w-full mt-10 space-y-20 pb-32">
                
                {/* Title Section */}
                <section className="flex flex-col items-center text-center w-full pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center w-full text-center"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide mb-4 inline-block">
                            {t("project.tag")}
                        </span>
                        <h1 className="text-6xl lg:text-7xl font-extrabold text-center text-white pb-2 w-full leading-tight">
                            {t("projects.hotel.title")}
                        </h1>
                    </motion.div>
                </section>

                {/* Combined Description & Desktop View */}
                <section className="flex flex-col xl:flex-row items-center justify-between gap-16 w-full">
                    
                    {/* Left Side: Desc & Dock */}
                    <div className="flex flex-col items-center text-center xl:items-start xl:text-left space-y-8 w-full xl:w-5/12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-gray-400 text-lg max-w-xl leading-relaxed text-justify"
                        >
                            {renderHighlightedText(t("projects.hotel.desc"))}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4"
                        >
                            <Dock items={technologies.map(tech => ({
                                title: tech.name,
                                icon: <tech.icon className={`w-1/2 h-1/2 ${tech.color} drop-shadow-md`} />
                            }))} />
                        </motion.div>
                    </div>

                    {/* Right Side: Safari */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="w-full xl:w-7/12 flex flex-col items-center"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="w-full relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <Safari
                                url="sistemagestionhotel.com"
                                className="w-full h-auto shadow-2xl relative"
                                imageSrc="/bonoslogin.png" 
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Responsive View (iPhone 15 Pro Component) */}
                <motion.section 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
                >
                    {/* Device */}
                    <motion.div 
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-full max-w-[300px] shrink-0 mx-auto md:mx-0"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full blur-[100px] opacity-30"></div>
                        <Iphone15Pro
                            imageSrc="/bonoslogin.png" 
                            className="shadow-2xl relative z-10"
                        />
                    </motion.div>

                    {/* Text content for mobile */}
                    <div className="max-w-md text-center md:text-left">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl text-blue-400 mb-6 border border-blue-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">{t("project.responsive.title")}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6 text-justify">
                            {t("projects.hotel.responsive.desc")}
                        </p>
                        <ul className="space-y-3 text-left">
                            {[t("project.responsive.feat1"), t("project.responsive.feat2"), t("project.responsive.feat3")].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
