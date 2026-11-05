"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "@/components/ui/tabs";
import { Dock } from "@/components/ui/dock";
import {
    SiTypescript, SiJavascript, SiPhp, SiPython,
    SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiBootstrap, SiHtml5, SiCss,
    SiLaravel, SiNodedotjs, SiNestjs, SiCplusplus, SiC, SiPostman,
    SiWordpress, SiMysql, SiPostgresql, SiDocker, SiDigitalocean, SiGit, SiGithub, SiGitlab, SiBitbucket,
    SiWhatsapp, SiOpenai, SiClaude, SiGooglegemini
} from "react-icons/si";
import { FaDatabase, FaServer, FaCogs, FaUsers, FaCreditCard, FaJava, FaCode, FaBriefcase } from "react-icons/fa";

// Arsenal alineado con el perfil de LinkedIn y el CV 2026.
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
        title: "Backend",
        value: "backend",
        content: (
            <Dock items={[
                { title: "Node.js", icon: <SiNodedotjs className="w-1/2 h-1/2 text-green-500" /> },
                { title: "NestJS", icon: <SiNestjs className="w-1/2 h-1/2 text-red-500" /> },
                { title: "PHP", icon: <SiPhp className="w-1/2 h-1/2 text-indigo-400" /> },
                { title: "Laravel", icon: <SiLaravel className="w-1/2 h-1/2 text-red-500" /> },
                { title: "Python", icon: <SiPython className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "Java", icon: <FaJava className="w-1/2 h-1/2 text-red-500" /> },
                { title: "C++", icon: <SiCplusplus className="w-1/2 h-1/2 text-blue-500" /> },
                { title: "C", icon: <SiC className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "APIs e Integraciones",
        value: "integraciones",
        content: (
            <Dock items={[
                { title: "APIs REST", icon: <FaServer className="w-1/2 h-1/2 text-green-400" /> },
                { title: "Postman", icon: <SiPostman className="w-1/2 h-1/2 text-orange-500" /> },
                { title: "SIIGO ERP", icon: <FaCogs className="w-1/2 h-1/2 text-cyan-500" /> },
                { title: "WhatsApp Business API", icon: <SiWhatsapp className="w-1/2 h-1/2 text-green-500" /> },
                { title: "Datáfonos Redeban", icon: <FaCreditCard className="w-1/2 h-1/2 text-emerald-400" /> },
            ]} />
        )
    },
    {
        title: "Bases de datos",
        value: "datos",
        content: (
            <Dock items={[
                { title: "SQL", icon: <FaDatabase className="w-1/2 h-1/2 text-gray-300" /> },
                { title: "MySQL", icon: <SiMysql className="w-1/2 h-1/2 text-blue-400" /> },
                { title: "PostgreSQL", icon: <SiPostgresql className="w-1/2 h-1/2 text-sky-400" /> },
            ]} />
        )
    },
    {
        title: "DevOps & Cloud",
        value: "devops",
        content: (
            <Dock items={[
                { title: "Docker", icon: <SiDocker className="w-1/2 h-1/2 text-sky-500" /> },
                { title: "DigitalOcean", icon: <SiDigitalocean className="w-1/2 h-1/2 text-blue-500" /> },
                { title: "Git", icon: <SiGit className="w-1/2 h-1/2 text-orange-500" /> },
                { title: "GitHub", icon: <SiGithub className="w-1/2 h-1/2 text-white" /> },
                { title: "GitLab", icon: <SiGitlab className="w-1/2 h-1/2 text-orange-500" /> },
                { title: "Bitbucket", icon: <SiBitbucket className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "CMS",
        value: "cms",
        content: (
            <Dock items={[
                { title: "WordPress", icon: <SiWordpress className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    },
    {
        title: "Herramientas IA",
        value: "ia",
        content: (
            <Dock items={[
                { title: "Claude", icon: <SiClaude className="w-1/2 h-1/2 text-[#D97757]" /> },
                { title: "Gemini", icon: <SiGooglegemini className="w-1/2 h-1/2 text-[#8E75FF]" /> },
                { title: "Codex (OpenAI)", icon: <SiOpenai className="w-1/2 h-1/2 text-white" /> },
            ]} />
        )
    },
    {
        title: "Metodologías",
        value: "metodologias",
        content: (
            <Dock items={[
                { title: "Agile / Scrum", icon: <FaUsers className="w-1/2 h-1/2 text-blue-400" /> },
            ]} />
        )
    }
];

import { useLanguage } from "@/context/LanguageContext";
import { jobs, periodLabel, durationLabel } from "@/lib/experiencia";

function AboutMeContent() {
    const searchParams = useSearchParams();
    const masterParam = searchParams.get("master") || "arsenal";
    const roleParam = searchParams.get("role") || jobs[0].id;
    const { t, language } = useLanguage();

    const lang = language;
    const rolesTabs = jobs.map((job) => {
        const duration = durationLabel(job, lang);
        return {
            title: (
                <span className="flex flex-col items-center leading-tight">
                    <span>{job.company}</span>
                    <span className="text-[11px] font-normal opacity-70">{job.tabRole[lang]}</span>
                </span>
            ),
            value: job.id,
            content: (
                <article className="w-full max-w-4xl bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 lg:p-12 text-gray-300 text-base lg:text-lg leading-relaxed font-medium">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">{job.role[lang]}</h3>
                    <p className="mt-1 text-sm lg:text-base text-blue-300">{job.company} · {periodLabel(job, lang)}{duration && ` · ${duration}`}</p>
                    <p className="text-sm text-gray-400">{job.place[lang]}</p>
                    {job.summary && <p className="mt-5 text-gray-200">{job.summary[lang]}</p>}
                    <h4 className="mt-6 mb-3 text-sm uppercase tracking-widest text-gray-400">{t("about.achievements")}</h4>
                    <ul className="list-none space-y-4">
                        {job.achievements.map((item, i) => (
                            <li key={i} className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                {item[lang]}
                            </li>
                        ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("about.stack")}>
                        {job.stack.map((s) => (
                            <li key={s} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.04] text-gray-300">{s}</li>
                        ))}
                    </ul>
                </article>
            ),
        };
    });

    const masterTabs = [
        {
            title: <div className="flex items-center gap-2"><FaCode className="w-5 h-5 text-blue-400" /> <span>{t("about.arsenal.title")}</span></div>,
            value: "arsenal",
            content: (
                <div className="w-full flex flex-col items-center w-full max-w-5xl">
                    <Tabs tabs={techTabs} propId="tech" />
                </div>
            )
        },
        {
            title: <div className="flex items-center gap-2"><FaBriefcase className="w-5 h-5 text-purple-400" /> <span>{t("about.roles.title")}</span></div>,
            value: "experiencia",
            content: (
                <div className="w-full flex flex-col items-center w-full max-w-5xl">
                    <Tabs key={roleParam} tabs={rolesTabs} propId="roles" defaultActiveValue={roleParam} />
                </div>
            )
        }
    ];

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
                    <Tabs key={masterParam} tabs={masterTabs} propId="master" defaultActiveValue={masterParam} containerClassName="bg-white/[0.03] border border-white/10 rounded-full p-2 shadow-lg mb-2" tabClassName="px-8 py-3 text-base lg:text-lg" />
                </motion.div>
            </div>
        </section>
    );
}

export default function AboutMe() {
    return (
        <Suspense fallback={
            <section id="sobre-mi" className="relative w-full min-h-screen py-24 flex items-center justify-center">
                <div className="text-white">Cargando...</div>
            </section>
        }>
            <AboutMeContent />
        </Suspense>
    );
}
