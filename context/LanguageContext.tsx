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
    "about.achievements": "Logros",
    "about.stack": "Tecnologías",

    // AboutMe Roles



    // Experiencia laboral

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
    "about.achievements": "Achievements",
    "about.stack": "Technologies",

    // AboutMe Roles



    // Work experience

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
