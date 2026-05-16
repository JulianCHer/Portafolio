"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "@/components/ui/tabs";
import { Dock } from "@/components/ui/dock";
import {
    SiTypescript, SiJavascript, SiPhp, SiPython,
    SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiBootstrap, SiHtml5, SiCss,
    SiLaravel, SiWordpress, SiMysql, SiDigitalocean, SiGit, SiGithub, SiBitbucket,
    SiJira, SiNpm, SiComposer, SiWhatsapp, SiOpenai, SiAnthropic, SiGoogle
} from "react-icons/si";
import { FaDatabase, FaServer, FaCogs, FaUsers, FaCreditCard, FaJava, FaCode, FaBriefcase } from "react-icons/fa";

const techTabs = [
    {
        title: "Frontend",
        value: "frontend",
        content: (
            <Dock items={[
                { title: "TypeScript", icon: <SiTypescript className="w-1/2 h-1/2 text-blue-500" /> },
                { title: "JavaScript", icon: <SiJavascript className="w-1/2 h-1/2 text-yellow-400" /> },
                { title: "React.js", icon: <SiReact className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "Next.js", icon: <SiNextdotjs className="w-1/2 h-1/2 text-white" /> },
                { title: "Vue.js", icon: <SiVuedotjs className="w-1/2 h-1/2 text-emerald-500" /> },
                { title: "Tailwind", icon: <SiTailwindcss className="w-1/2 h-1/2 text-cyan-400" /> },
                { title: "Bootstrap", icon: <SiBootstrap className="w-1/2 h-1/2 text-purple-500" /> },
                { title: "HTML5", icon: <SiHtml5 className="w-1/2 h-1/2 text-orange-500" /> },
                { title: "CSS3", icon: <SiCss className="w-1/2 h-1/2 text-blue-500" /> },
            ]} />
        )
    },
    {
        title: "Backend & CMS",
        value: "backend",
        content: (
            <Dock items={[
                { title: "PHP", icon: <SiPhp className="w-1/2 h-1/2 text-indigo-400" /> },
                { title: "Python", icon: <SiPython className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "Java", icon: <FaJava className="w-1/2 h-1/2 text-red-500" /> },
                { title: "SQL", icon: <FaDatabase className="w-1/2 h-1/2 text-gray-300" /> },
                { title: "Laravel", icon: <SiLaravel className="w-1/2 h-1/2 text-red-500" /> },
                { title: "APIs RESTful", icon: <FaServer className="w-1/2 h-1/2 text-green-400" /> },
                { title: "WebSockets", icon: <FaCogs className="w-1/2 h-1/2 text-blue-300" /> },
                { title: "WordPress", icon: <SiWordpress className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "DevOps & Cloud",
        value: "devops",
        content: (
            <Dock items={[
                { title: "DigitalOcean", icon: <SiDigitalocean className="w-1/2 h-1/2 text-blue-500" /> },
                { title: "Git", icon: <SiGit className="w-1/2 h-1/2 text-orange-500" /> },
                { title: "GitHub", icon: <SiGithub className="w-1/2 h-1/2 text-white" /> },
                { title: "Bitbucket", icon: <SiBitbucket className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "Herramientas IA",
        value: "ia",
        content: (
            <Dock items={[
                { title: "Claude (Anthropic)", icon: <SiAnthropic className="w-1/2 h-1/2 text-stone-200" /> },
                { title: "Gemini (Google)", icon: <SiGoogle className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "Codex (OpenAI)", icon: <SiOpenai className="w-1/2 h-1/2 text-white" /> },
            ]} />
        )
    },
    {
        title: "Integraciones",
        value: "integraciones",
        content: (
            <Dock items={[
                { title: "SIIGO ERP", icon: <FaCogs className="w-1/2 h-1/2 text-cyan-500" /> },
                { title: "WhatsApp API", icon: <SiWhatsapp className="w-1/2 h-1/2 text-green-500" /> },
                { title: "Pasarelas de Pago", icon: <FaCreditCard className="w-1/2 h-1/2 text-emerald-400" /> },
                { title: "MySQL", icon: <SiMysql className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "Metodologías",
        value: "metodologias",
        content: (
            <Dock items={[
                { title: "Agile / Scrum", icon: <FaUsers className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "Jira", icon: <SiJira className="w-1/2 h-1/2 text-blue-500" /> },
                { title: "npm", icon: <SiNpm className="w-1/2 h-1/2 text-red-500" /> },
                { title: "Composer", icon: <SiComposer className="w-1/2 h-1/2 text-amber-600" /> },
            ]} />
        )
    }
];

const roles = [
    {
        id: "ingeniero",
        title: "Ingeniero Full Stack",
        description: (
            <div className="text-justify">
                <p className="mb-6 text-justify text-gray-200">
                    Ingeniero Informático Full Stack graduado de la AUNAR. Con 5 años de trayectoria desarrollando soluciones web a medida, combinando más de 3 años de experiencia corporativa con proyectos independientes de alto impacto.
                </p>
                <ul className="list-none space-y-4">
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">Experiencia en Agencia DROI SAS:</strong> Como desarrollador a cargo de módulos críticos en el sistema base GESADMIN. Diseñé e implementé un sistema de control de acceso automatizado con lógicas complejas (mensual, quincenal y por turnos) y desarrollé el módulo de transformaciones y materia prima para control de producción.
                    </li>
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">Enfoque Freelance (5 años - Presente):</strong> Arquitectura y despliegue end-to-end de aplicativos web robustos, optimizando la gestión y operación de clientes empresariales.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: "ceo",
        title: "CEO Lazarus Tech",
        description: (
            <div className="text-justify">
                <p className="mb-6 text-justify text-gray-200">
                    <strong>Lazarus Tech</strong> es mi firma de desarrollo independiente de tecnológica a medida. Nos diferenciamos por mantener un canal directo <strong>cliente - proveedor</strong>, garantizando que cada opinión, requerimiento o PQRS sea gestionado con total agilidad bajo los más altos estándares de calidad del mercado. No buscamos ser un proveedor técnico temporal, sino el <strong>aliado estratégico</strong> que acompaña la evolución y el éxito de su negocio en cada etapa del camino.
                    <br></br><br></br>Como desarrollador líder detrás de este ecosistema, he desplegado soluciones de gran envergadura para clientes clave en la región, entre los que destacan:
                </p>
                <ul className="list-none space-y-4">
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">Inversiones del Meta:</strong> Arquitectura y automatización de su Sistema de Gestión de Sorteos y Bonos, una plataforma transaccional que automatiza la distribución y validación de premios basados en bonos vendidos.
                    </li>
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">CEACAR:</strong> Diseño, optimización y despliegue de su plataforma web corporativa, mejorando su presencia digital y captación de clientes.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: "techlead",
        title: "Tech Lead",
        description: (
            <div className="text-justify">
                <p className="mb-6 text-justify text-gray-200">
                    En Agencia DROI SAS, lideré equipos de desarrollo multifuncionales para el diseño, optimización y despliegue de plataformas empresariales críticas dentro del ecosistema corporativo. Entre mis principales logros dirigiendo personal destacan:
                </p>
                <ul className="list-none space-y-4">
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">GESAGEN (Sistema de Agendamiento B2B):</strong> Diseñé e implementé el sistema para la Rueda de Negocios de la ANDI en Bogotá. Diseñé una lógica de validación automática que coordinó más de 50 sesiones simultáneas entre vendedores y compradores, expandiendo alianzas comerciales y reduciendo los conflictos de agenda en un 60%.
                    </li>
                    <li className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <strong className="text-white">GESPARKING (Gestor de Parqueadero Corporativo):</strong> Dirigí el equipo técnico encargado de la reingeniería y optimización del software. Supervisé la normalización completa de la base de datos relacional, lo que eliminó la redundancia de datos y mejoró el rendimiento de las consultas SQL en un 50%.
                    </li>
                </ul>
            </div>
        )
    }
];

const rolesTabs = roles.map(role => ({
    title: role.title,
    value: role.id,
    content: (
        <div className="w-full max-w-4xl bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-start relative">
            <div className="text-gray-300 text-base lg:text-lg leading-relaxed lg:leading-loose max-w-4xl mx-auto font-medium text-justify">
                {role.description}
            </div>
        </div>
    )
}));

const masterTabs = [
    {
        title: <div className="flex items-center gap-2"><FaCode className="w-5 h-5 text-blue-400" /> <span>Arsenal Tecnológico</span></div>,
        value: "arsenal",
        content: (
            <div className="w-full flex flex-col items-center w-full max-w-5xl">
                <Tabs tabs={techTabs} propId="tech" />
            </div>
        )
    },
    {
        title: <div className="flex items-center gap-2"><FaBriefcase className="w-5 h-5 text-purple-400" /> <span>Roles y Experiencia</span></div>,
        value: "experiencia",
        content: (
            <div className="w-full flex flex-col items-center w-full max-w-5xl">
                <Tabs tabs={rolesTabs} propId="roles" />
            </div>
        )
    }
];

export default function AboutMe() {
    return (
        <section id="sobre-mi" className="relative w-full min-h-screen py-24 px-6 lg:px-12 flex flex-col items-center border-t border-white/[0.05]">
            <div className="max-w-5xl mx-auto w-full flex flex-col items-center">



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full flex flex-col items-center mb-24"
                >
                    <Tabs tabs={masterTabs} propId="master" containerClassName="bg-white/[0.03] border border-white/10 rounded-full p-2 shadow-lg mb-2" tabClassName="px-8 py-3 text-base lg:text-lg" />
                </motion.div>

            </div>
        </section>
    );
}
