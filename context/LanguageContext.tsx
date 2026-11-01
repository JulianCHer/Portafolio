"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",

    // Presentation
    "presentation.roles.ceo": "CEO de Primal Tech",
    "presentation.roles.engineer": "Ingeniero Informático Full Stack",
    "presentation.roles.techlead": "Tech Lead",
    "presentation.description": "No solo escribo código, diseño soluciones digitales que transforman la operación de tu negocio. Especialista en automatizar procesos complejos, conectar sistemas empresariales en tiempo real y liderar equipos técnicos hacia entregas eficientes.",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.viewProject": "Ver proyecto",
    "projects.bonos.title": "Sistema de Bonos",
    "projects.licencias.title": "Sistema de Licencias",
    "projects.hotel.title": "Sistema de Gestión de Hotel",
    "projects.elections.title": "Elecciones Colombia 2026",

    // AboutMe Tabs
    "about.arsenal.title": "Arsenal Tecnológico",
    "about.roles.title": "Roles y Experiencia",

    // AboutMe Roles
    "about.role.engineer.title": "Ingeniero Full Stack",
    "about.role.engineer.desc1": "Ingeniero Informático Full Stack graduado de la AUNAR. Con 5 años de trayectoria desarrollando soluciones web a medida, combinando más de 3 años de experiencia corporativa con proyectos independientes de alto impacto.",
    "about.role.engineer.exp1.title": "Experiencia en Agencia DROI SAS:",
    "about.role.engineer.exp1.desc": "Como desarrollador a cargo de módulos críticos en el sistema base GESADMIN. Diseñé e implementé un sistema de control de acceso automatizado con lógicas complejas (mensual, quincenal y por turnos) y desarrollé el módulo de transformaciones y materia prima para control de producción.",
    "about.role.engineer.exp2.title": "Enfoque Freelance (5 años - Presente):",
    "about.role.engineer.exp2.desc": "Arquitectura y despliegue end-to-end de aplicativos web robustos, optimizando la gestión y operación de clientes empresariales.",

    "about.role.ceo.title": "CEO Primal Tech",
    "about.role.ceo.desc1": "es mi firma de desarrollo independiente de tecnológica a medida. Nos diferenciamos por mantener un canal directo",
    "about.role.ceo.desc2": "cliente - proveedor",
    "about.role.ceo.desc3": ", garantizando que cada opinión, requerimiento o PQRS sea gestionado con total agilidad bajo los más altos estándares de calidad del mercado. No buscamos ser un proveedor técnico temporal, sino el",
    "about.role.ceo.desc4": "aliado estratégico",
    "about.role.ceo.desc5": "que acompaña la evolución y el éxito de su negocio en cada etapa del camino.",
    "about.role.ceo.desc6": "Como desarrollador líder detrás de este ecosistema, he desplegado soluciones de gran envergadura para clientes clave en la región, entre los que destacan:",
    "about.role.ceo.exp1.title": "Inversiones del Meta:",
    "about.role.ceo.exp1.desc": "Arquitectura y automatización de su Sistema de Gestión de Sorteos y Bonos, una plataforma transaccional que automatiza la distribución y validación de premios basados en bonos vendidos.",
    "about.role.ceo.exp2.title": "CEACAR:",
    "about.role.ceo.exp2.desc": "Diseño, optimización y despliegue de su plataforma web corporativa, mejorando su presencia digital y captación de clientes.",

    "about.role.techlead.title": "Tech Lead",
    "about.role.techlead.desc1": "En Agencia DROI SAS, lideré equipos de desarrollo multifuncionales para el diseño, optimización y despliegue de plataformas empresariales críticas dentro del ecosistema corporativo. Entre mis principales logros dirigiendo personal destacan:",
    "about.role.techlead.exp1.title": "GESAGEN (Sistema de Agendamiento B2B):",
    "about.role.techlead.exp1.desc": "Diseñé e implementé el sistema para la Rueda de Negocios de la ANDI en Bogotá. Diseñé una lógica de validación automática que coordinó más de 50 sesiones simultáneas entre vendedores y compradores, expandiendo alianzas comerciales y reduciendo los conflictos de agenda en un 60%.",
    "about.role.techlead.exp2.title": "GESPARKING (Gestor de Parqueadero Corporativo):",
    "about.role.techlead.exp2.desc": "Dirigí el equipo técnico encargado de la reingeniería y optimización del software. Supervisé la normalización completa de la base de datos relacional, lo que eliminó la redundancia de datos y mejoró el rendimiento de las consultas SQL en un 50%.",

    // Experiencia laboral
    "about.role.work.title": "Experiencia laboral",
    "about.work.1.role": "Cloud-Based Web Applications Developer",
    "about.work.1.company": "Lucid Bot · Remoto",
    "about.work.1.period": "Sept 2026 – Actualidad",
    "about.work.1.desc": "Onboarding interactivo de punta a punta en React + TypeScript con API REST (Node/MySQL), integración de un agente de IA que automatiza tareas en las tiendas y mejoras de UX que redujeron el flujo de crear pedido de 11 a 4 pasos.",
    "about.work.2.role": "Docente",
    "about.work.2.company": "AUNAR Villavicencio · Presencial",
    "about.work.2.period": "Ago 2026 – Actualidad",
    "about.work.2.desc": "Diseño de contenidos y recursos para el aula virtual y enseñanza progresiva de la lógica de programación a aplicaciones con bases de datos, llevando a clase ejemplos de proyectos reales (APIs REST, PHP/Laravel, React/Next.js).",
    "about.work.3.role": "Desarrollador Freelance · Primal Tech",
    "about.work.3.company": "Autónomo · Remoto",
    "about.work.3.period": "Ene 2021 – Actualidad",
    "about.work.3.desc": "Soluciones web end-to-end para clientes empresariales, desde la arquitectura hasta el despliegue: un PMS hotelero con React, Next.js y Nest.js + TypeScript (35% menos de tiempo en gestión de reservas) y el sistema de sorteos y bonos de Inversiones del Meta con Vue.js y Laravel (facturación y distribución por WhatsApp Business API y correo 100% automatizadas).",
    "about.work.4.role": "Desarrollador sénior",
    "about.work.4.company": "Consuerte · Presencial",
    "about.work.4.period": "May 2026 – Oct 2026",
    "about.work.4.desc": "Mejoras en convenios, recaudo y reportes de la plataforma Autofile; integración del sistema comercial (PHP/PostgreSQL) con datáfonos Redeban para operar como corresponsal bancario y servicio local en Python que comunica el navegador con el datáfono por puerto serial.",
    "about.work.5.role": "Desarrollador sénior",
    "about.work.5.company": "Agencia DROI SAS · Presencial",
    "about.work.5.period": "Ago 2022 – Mar 2026",
    "about.work.5.desc": "Soluciones web escalables para clientes corporativos: integración REST bidireccional con SIIGO ERP (90% menos errores), control de acceso para más de 200 empleados (40% menos de tiempo de registro), agendamiento de la Rueda de Negocios ANDI y normalización de la base de datos de un parqueadero corporativo (50% más rápido en consultas SQL).",

    // Betas de los proyectos
    "projects.beta.cta": "Ver versión beta",
    "projects.beta.note": "Versión de prueba en línea; los datos son ficticios.",
    "projects.stack.title": "Lenguajes y tecnologías",

    // Project details (Shared)
    "project.tag": "Desarrollo Web & Backend",
    "project.deploy.title": "Despliegue en Producción",
    "project.responsive.title": "Diseño 100% Responsive",
    "project.responsive.feat1": "Navegación táctil optimizada",
    "project.responsive.feat2": "Tiempos de carga reducidos",
    "project.responsive.feat3": "Visualización adaptativa de tablas",

    // Bonos
    "projects.bonos.desc": "Desarrollé una **plataforma robusta** de venta de bonos y boletería utilizando **Laravel** para el backend y **Vue.js** en el frontend. Implementé un sistema de **control de concurrencia en tiempo real** que previene la duplicidad de ventas bloqueando boletas activas entre múltiples usuarios simultáneos. Mediante la **integración estratégica de herramientas de IA (Codex)** para la optimización de flujos de trabajo y refactorización de código, logré acelerar el **Time-to-Market**, entregando el producto completamente funcional en un **tiempo récord de solo 2 meses**.",
    "projects.bonos.responsive.desc": "La interfaz fue construida bajo un enfoque Mobile-First y completamente responsiva, asegurando que la gestión y venta de boletería sea intuitiva y accesible para cualquier tipo de usuario, sin importar las especificaciones del dispositivo técnico desde el cual operen.",

    // Licencias
    "projects.licencias.desc": "Diseñé y desarrollé un **sistema centralizado de licenciamiento de software** para **proteger la propiedad intelectual** de Primal Tech y mitigar los riesgos de distribución no autorizada. Implementé un **modelo de cobro periódico (suscripciones)** que permite cotizar y gestionar la permanencia de los clientes de manera automatizada. La arquitectura fue construida con **Next.js (React) y TypeScript**, **PostgreSQL** con SQL parametrizado y **licencias firmadas con Ed25519** que cada sistema cliente verifica sin depender de la red (migrada desde una primera versión en **Laravel**). Mediante el **uso avanzado de agentes de IA (Gemini y Claude)** para la optimización de consultas a bases de datos y refactorización arquitectónica, logré desplegar el sistema completo en un **tiempo récord de solo 2 semanas**.",
    "projects.licencias.responsive.desc": "Sabemos que los usuarios necesitan acceder al sistema desde cualquier lugar. Por eso, la plataforma se adapta perfectamente a dispositivos móviles, ofreciendo una experiencia nativa fluida, sin perder ninguna de las funcionalidades críticas presentes en la versión de escritorio.",

    // Hotel
    "projects.hotel.desc": "Plataforma integral para la gestión de reservas, habitaciones y huéspedes. Este sistema permite a los administradores llevar el control de forma segura y eficiente, mientras el staff del hotel disfruta de una interfaz intuitiva para su labor diaria. Está construido con **Next.js** y **TypeScript** en el frontend y una API en **Node.js (Express)** sobre **PostgreSQL** con SQL parametrizado, **carga progresiva de datos** para que la interfaz responda de inmediato y **activación por licencia firmada** verificada contra mi Sistema de Licencias.",
    "projects.hotel.responsive.desc": "Sabemos que los usuarios necesitan acceder al sistema desde cualquier lugar. Por eso, la plataforma se adapta perfectamente a dispositivos móviles, ofreciendo una experiencia nativa fluida, sin perder ninguna de las funcionalidades críticas presentes en la versión de escritorio.",

    // Elecciones Colombia 2026
    "projects.elections.desc": "Desarrollé una **landing page interactiva** para las elecciones presidenciales de Colombia 2026 utilizando **Next.js** y **React** en el frontend, estilizada con **Tailwind CSS**. Implementé un diseño **moderno, interactivo y de alto impacto visual** enfocado en la experiencia del usuario, optimizando los tiempos de carga y la visualización de los candidatos. Mediante el **uso de los asistentes de IA Claude y Gemini**, logré optimizar el flujo de trabajo y completar el desarrollo en un **tiempo récord de solo 12 horas**. La aplicación fue desplegada en **Vercel**.",
    "projects.elections.responsive.desc": "La interfaz cuenta con un diseño móvil adaptativo e intuitivo, asegurando que todos los votantes puedan consultar las propuestas y la información de los candidatos de manera rápida desde cualquier dispositivo móvil o tablet.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About me",

    // Presentation
    "presentation.roles.ceo": "CEO of Primal Tech",
    "presentation.roles.engineer": "Full Stack Software Engineer",
    "presentation.roles.techlead": "Tech Lead",
    "presentation.description": "I don't just write code, I design digital solutions that transform your business operations. Specialist in automating complex processes, connecting enterprise systems in real-time, and leading technical teams towards efficient deliveries.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.viewProject": "View project",
    "projects.bonos.title": "Bonus System",
    "projects.licencias.title": "License System",
    "projects.hotel.title": "Hotel Management System",
    "projects.elections.title": "Colombia Elections 2026",

    // AboutMe Tabs
    "about.arsenal.title": "Tech Arsenal",
    "about.roles.title": "Roles & Experience",

    // AboutMe Roles
    "about.role.engineer.title": "Full Stack Engineer",
    "about.role.engineer.desc1": "Full Stack Software Engineer graduated from AUNAR. With 5 years of experience developing custom web solutions, combining over 3 years of corporate experience with high-impact independent projects.",
    "about.role.engineer.exp1.title": "Experience at Agencia DROI SAS:",
    "about.role.engineer.exp1.desc": "As a developer in charge of critical modules in the base system GESADMIN. I designed and implemented an automated access control system with complex logic (monthly, biweekly, and shift-based) and developed the transformations and raw material module for production control.",
    "about.role.engineer.exp2.title": "Freelance Focus (5 years - Present):",
    "about.role.engineer.exp2.desc": "End-to-end architecture and deployment of robust web applications, optimizing the management and operation of corporate clients.",

    "about.role.ceo.title": "CEO of Primal Tech",
    "about.role.ceo.desc1": "is my independent custom technology development firm. We distinguish ourselves by maintaining a direct",
    "about.role.ceo.desc2": "client - provider",
    "about.role.ceo.desc3": "channel, ensuring every opinion, requirement, or PQRS is managed with total agility under the highest market quality standards. We don't aim to be a temporary technical provider, but the",
    "about.role.ceo.desc4": "strategic ally",
    "about.role.ceo.desc5": "that accompanies the evolution and success of your business at every step of the way.",
    "about.role.ceo.desc6": "As the lead developer behind this ecosystem, I have deployed large-scale solutions for key clients in the region, among which the following stand out:",
    "about.role.ceo.exp1.title": "Inversiones del Meta:",
    "about.role.ceo.exp1.desc": "Architecture and automation of their Sweepstakes and Bonus Management System, a transactional platform that automates the distribution and validation of prizes based on sold bonuses.",
    "about.role.ceo.exp2.title": "CEACAR:",
    "about.role.ceo.exp2.desc": "Design, optimization, and deployment of their corporate web platform, improving their digital presence and client acquisition.",

    "about.role.techlead.title": "Tech Lead",
    "about.role.techlead.desc1": "At Agencia DROI SAS, I led cross-functional development teams in the design, optimization, and deployment of critical enterprise platforms within the corporate ecosystem. Among my main achievements managing personnel are:",
    "about.role.techlead.exp1.title": "GESAGEN (B2B Scheduling System):",
    "about.role.techlead.exp1.desc": "Designed and implemented the system for the ANDI Business Matchmaking in Bogotá. I designed an automatic validation logic that coordinated over 50 simultaneous sessions between sellers and buyers, expanding commercial alliances and reducing scheduling conflicts by 60%.",
    "about.role.techlead.exp2.title": "GESPARKING (Corporate Parking Manager):",
    "about.role.techlead.exp2.desc": "I directed the technical team in charge of software reengineering and optimization. I supervised the complete normalization of the relational database, which eliminated data redundancy and improved SQL query performance by 50%.",

    // Work experience
    "about.role.work.title": "Work experience",
    "about.work.1.role": "Cloud-Based Web Applications Developer",
    "about.work.1.company": "Lucid Bot · Remote",
    "about.work.1.period": "Sep 2026 – Present",
    "about.work.1.desc": "End-to-end interactive onboarding in React + TypeScript with a REST API (Node/MySQL), an AI agent integration that automates store tasks, and UX improvements that cut the order creation flow from 11 steps to 4.",
    "about.work.2.role": "Lecturer",
    "about.work.2.company": "AUNAR Villavicencio · On-site",
    "about.work.2.period": "Aug 2026 – Present",
    "about.work.2.desc": "Designing virtual classroom content and resources and teaching programming logic through to database-backed applications, bringing real-project examples to class (REST APIs, PHP/Laravel, React/Next.js).",
    "about.work.3.role": "Freelance Developer · Primal Tech",
    "about.work.3.company": "Self-employed · Remote",
    "about.work.3.period": "Jan 2021 – Present",
    "about.work.3.desc": "End-to-end web solutions for business clients, from architecture to production: a hotel PMS with React, Next.js and Nest.js + TypeScript (35% less time spent on reservations) and the raffle and bonus system for Inversiones del Meta with Vue.js and Laravel (billing and distribution 100% automated via WhatsApp Business API and email).",
    "about.work.4.role": "Senior Developer",
    "about.work.4.company": "Consuerte · On-site",
    "about.work.4.period": "May 2026 – Oct 2026",
    "about.work.4.desc": "Improvements to collections, reports and agreements in the Autofile platform; integration of the commercial system (PHP/PostgreSQL) with Redeban payment terminals to operate as a banking correspondent, plus a local Python service bridging the browser and the terminal over a serial port.",
    "about.work.5.role": "Senior Developer",
    "about.work.5.company": "Agencia DROI SAS · On-site",
    "about.work.5.period": "Aug 2022 – Mar 2026",
    "about.work.5.desc": "Scalable web solutions for corporate clients: bidirectional REST integration with SIIGO ERP (90% fewer errors), access control for 200+ employees (40% faster check-in), scheduling for the ANDI Business Matchmaking, and database normalization for a corporate parking system (50% faster SQL queries).",

    // Project betas
    "projects.beta.cta": "View beta version",
    "projects.beta.note": "Online test version; all data is fictional.",
    "projects.stack.title": "Languages & technologies",

    // Project details (Shared)
    "project.tag": "Web & Backend Development",
    "project.deploy.title": "Production Deployment",
    "project.responsive.title": "100% Responsive Design",
    "project.responsive.feat1": "Optimized touch navigation",
    "project.responsive.feat2": "Reduced load times",
    "project.responsive.feat3": "Adaptive table visualization",

    // Bonos
    "projects.bonos.desc": "I developed a **robust platform** for bonus and ticket sales using **Laravel** for the backend and **Vue.js** on the frontend. I implemented a **real-time concurrency control** system that prevents duplicate sales by locking active tickets among multiple simultaneous users. Through the **strategic integration of AI tools (Codex)** for workflow optimization and code refactoring, I was able to accelerate the **Time-to-Market**, delivering the fully functional product in a **record time of just 2 months**.",
    "projects.bonos.responsive.desc": "The interface was built under a Mobile-First approach and is fully responsive, ensuring that ticket management and sales are intuitive and accessible for any type of user, regardless of the technical specifications of the device from which they operate.",

    // Licencias
    "projects.licencias.desc": "I designed and developed a **centralized software licensing system** to **protect intellectual property** for Primal Tech and mitigate unauthorized distribution risks. I implemented a **recurring billing model (subscriptions)** that allows automating quotes and managing customer retention. The architecture was built with **Next.js (React) and TypeScript**, **PostgreSQL** with parameterized SQL and **Ed25519-signed licenses** that each client system verifies without depending on the network (migrated from a first version in **Laravel**). Through the **advanced use of AI agents (Gemini and Claude)** for database query optimization and architectural refactoring, I managed to deploy the entire system in a **record time of only 2 weeks**.",
    "projects.licencias.responsive.desc": "We know users need to access the system from anywhere. That's why the platform adapts perfectly to mobile devices, offering a fluid native experience without losing any of the critical functionalities present in the desktop version.",

    // Hotel
    "projects.hotel.desc": "Comprehensive platform for managing reservations, rooms, and guests. This system allows administrators to keep control securely and efficiently, while the hotel staff enjoys an intuitive interface for their daily work. It is built with **Next.js** and **TypeScript** on the frontend and a **Node.js (Express)** API on **PostgreSQL** with parameterized SQL, **progressive data loading** so the interface responds instantly, and **signed-license activation** verified against my License System.",
    "projects.hotel.responsive.desc": "We know users need to access the system from anywhere. That's why the platform adapts perfectly to mobile devices, offering a fluid native experience without losing any of the critical functionalities present in the desktop version.",

    // Elecciones Colombia 2026
    "projects.elections.desc": "I developed an **interactive landing page** for the 2026 presidential elections in Colombia using **Next.js** and **React** on the frontend, styled with **Tailwind CSS**. I implemented a **modern, interactive, and high-impact visual design** focused on user experience, optimizing load times and candidate visualization. Through the **use of Claude and Gemini AI assistants**, I was able to optimize workflows and complete the development in a **record time of just 12 hours**. The application was deployed on **Vercel**.",
    "projects.elections.responsive.desc": "The interface features an intuitive, mobile-responsive design, ensuring that all voters can quickly view candidate proposals and information from any mobile device or tablet.",
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.startsWith("en") ? "en" : "es";
      setLanguage(browserLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
