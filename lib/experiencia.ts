// Experiencia laboral. Fechas y cargos contrastados con el perfil de LinkedIn (nov 2026).
// Las fechas van como [año, mes]; `end` ausente = trabajo actual. El texto del periodo y la duración se calculan de ahí.
export type Lang = "es" | "en";
type Text = Record<Lang, string>;
type YearMonth = [number, number];

export interface Job {
    id: string;
    company: string;
    role: Text;          // cargo completo
    tabRole: Text;       // cargo corto para la pestaña
    start: YearMonth;
    end?: YearMonth;
    place: Text;
    summary?: Text;
    achievements: Text[];
    stack: string[];
}

export const jobs: Job[] = [
    {
        id: "lucidbot",
        company: "Lucid Bot",
        role: { es: "Cloud-Based Web Applications Developer", en: "Cloud-Based Web Applications Developer" },
        tabRole: { es: "Desarrollador web cloud", en: "Cloud web developer" },
        start: [2026, 9],
        place: { es: "Colombia · Remoto", en: "Colombia · Remote" },
        achievements: [
            { es: "Onboarding interactivo de punta a punta en React + TypeScript con API REST (Node/MySQL): guarda el progreso por usuario, adapta el recorrido a rol, plan y tienda, y salta de forma segura los módulos no habilitados.", en: "End-to-end interactive onboarding in React + TypeScript with a REST API (Node/MySQL): it saves progress per user, adapts the journey to role, plan and store, and safely skips modules that are not enabled." },
            { es: "Tutorial para el agente de IA de la plataforma: lancé la integración del onboarding con la Consola de IA, que automatiza tareas manuales y está habilitada solo en las tiendas autorizadas.", en: "Tutorial for the platform's AI agent: I launched the onboarding integration with the AI Console, which automates manual tasks and is enabled only for authorized stores." },
            { es: "Mejora de UX medible: reduje el recorrido de crear pedido de 11 a 4 pasos y el detalle de pedido de 8 a 1, y alineé la interfaz al design system oficial.", en: "Measurable UX improvement: I cut the create-order flow from 11 steps to 4 and the order detail from 8 to 1, and aligned the interface with the official design system." },
            { es: "Funcionalidades de ventas en front y back: datos de tipo de pago (desde un endpoint nuevo hasta su visualización y filtros en la tabla de pedidos) y un botón de soporte por WhatsApp.", en: "Sales features across front and back end: payment-type data (from a new endpoint to its display and filters in the orders table) and a WhatsApp support button." },
            { es: "Documentación técnica interactiva de los módulos principales (Catálogo, Multimedia, Pedidos y Superbodega) con recorridos animados y un mapa de datos por módulo, que agilizó el entendimiento del código.", en: "Interactive technical documentation of the main modules (Catalog, Multimedia, Orders and Superbodega) with animated walkthroughs and a data map per module, which sped up code comprehension." },
        ],
        stack: ["React", "TypeScript", "Node.js", "MySQL"],
    },
    {
        id: "aunar",
        company: "AUNAR Villavicencio",
        role: { es: "Docente", en: "Lecturer" },
        tabRole: { es: "Docente", en: "Lecturer" },
        start: [2026, 8],
        place: { es: "Villavicencio, Meta · Presencial", en: "Villavicencio, Meta · On-site" },
        achievements: [
            { es: "Diseño de contenidos y recursos propios para el aula virtual: guías de código, foros técnicos, cuestionarios y evaluaciones alineados al syllabus.", en: "Designed original content and resources for the virtual classroom: code guides, technical forums, quizzes and assessments aligned with the syllabus." },
            { es: "Enseñanza progresiva de la lógica de programación a aplicaciones con bases de datos.", en: "Progressive teaching, from programming logic to database-backed applications." },
            { es: "Ejemplos de proyectos reales en clase (APIs REST, PHP/Laravel, React/Next.js, integraciones empresariales) desde mi experiencia como desarrollador sénior.", en: "Real-project examples in class (REST APIs, PHP/Laravel, React/Next.js, enterprise integrations) drawn from my experience as a senior developer." },
            { es: "Acompañamiento a estudiantes de varios niveles, desde primer semestre hasta asignaturas avanzadas de móvil y sistemas embebidos.", en: "Mentoring students at several levels, from first semester to advanced mobile and embedded-systems courses." },
            { es: "Aprendizaje basado en la práctica, con herramientas de uso profesional (NetBeans, XAMPP, MySQL, Git).", en: "Practice-based learning with professional tools (NetBeans, XAMPP, MySQL, Git)." },
            { es: "Acompañamiento en la revisión y elaboración de proyectos de grado.", en: "Support reviewing and developing degree projects." },
        ],
        stack: ["MySQL", "Git", "PHP", "Java"],
    },
    {
        id: "freelance",
        company: "Primal Tech",
        role: { es: "Full Stack Developer · CEO de Primal Tech (Freelance)", en: "Full Stack Developer · CEO of Primal Tech (Freelance)" },
        tabRole: { es: "Full Stack · CEO", en: "Full Stack · CEO" },
        start: [2021, 1],
        place: { es: "Colombia · Remoto (autónomo)", en: "Colombia · Remote (self-employed)" },
        summary: {
            es: "Primal Tech es mi firma de desarrollo independiente de tecnología a medida, con un canal directo cliente-proveedor. Entrego soluciones web end-to-end para clientes empresariales, desde la arquitectura hasta el despliegue en producción.",
            en: "Primal Tech is my independent custom-technology firm, built around a direct client-provider channel. I deliver end-to-end web solutions for business clients, from architecture to production deployment.",
        },
        achievements: [
            { es: "Sistema de Gestión Hotelera (PMS): plataforma con React, Next.js y Nest.js + TypeScript para reservas, habitaciones y reportes en tiempo real. Redujo en un 35% el tiempo de gestión de reservas del cliente.", en: "Hotel Management System (PMS): platform built with React, Next.js and Nest.js + TypeScript for reservations, rooms and real-time reports. It cut the client's reservation-handling time by 35%." },
            { es: "Sistema de Gestión de Sorteos y Bonos (Inversiones del Meta): con Vue.js y Laravel, automatizó el 100% de la facturación y distribución de bonos por WhatsApp Business API y correo.", en: "Raffle and Bonus Management System (Inversiones del Meta): built with Vue.js and Laravel, it automated 100% of billing and bonus distribution via WhatsApp Business API and email." },
            { es: "Sistema de Licencias: licenciamiento centralizado con suscripciones y licencias firmadas con Ed25519 que cada sistema cliente verifica sin depender de la red.", en: "Licensing System: centralized licensing with subscriptions and Ed25519-signed licenses that each client system verifies without relying on the network." },
            { es: "CEACAR: diseño, optimización y despliegue de su plataforma web corporativa, mejorando su presencia digital y captación de clientes.", en: "CEACAR: design, optimization and deployment of their corporate website, improving their digital presence and customer acquisition." },
        ],
        stack: ["Next.js", "Nest.js", "React", "Vue.js", "Laravel", "PostgreSQL"],
    },
    {
        id: "consuerte",
        company: "Consuerte",
        role: { es: "Desarrollador sénior", en: "Senior Developer" },
        tabRole: { es: "Desarrollador sénior", en: "Senior developer" },
        start: [2026, 5],
        end: [2026, 10],
        place: { es: "Villavicencio, Meta · Presencial", en: "Villavicencio, Meta · On-site" },
        achievements: [
            { es: "Lideré e implementé una mejora en la plataforma Autofile: refactoricé a nivel de código y base de datos cómo se añadían convenios, se generaban reportes y se cargaba la información de facturas de cada convenio, de forma dinámica.", en: "Led and implemented an improvement to the Autofile platform: refactored, at code and database level, how agreements were added, reports generated and invoice data loaded for each agreement, dynamically." },
            { es: "Integré el sistema de gestión comercial (PHP/PostgreSQL) con los datáfonos de Redeban para operar como corresponsal bancario del Grupo Aval: pago de convenios (consulta de factura y recaudo), consignaciones y retiros con y sin tarjeta, a partir de los manuales técnicos del proveedor.", en: "Integrated the commercial management system (PHP/PostgreSQL) with Redeban payment terminals to operate as a Grupo Aval banking correspondent: agreement payments (invoice lookup and collection), deposits and withdrawals with and without a card, built from the provider's technical manuals." },
            { es: "Desarrollé un servicio local en Python que comunica el navegador con el datáfono por puerto serial, a través del middleware de Redeban.", en: "Built a local Python service that connects the browser to the terminal over the serial port, through Redeban's middleware." },
            { es: "Diagnostiqué fallas de integración en campo analizando los logs del middleware, separé los problemas de configuración del terminal de los de la aplicación y documenté los requerimientos técnicos para el proveedor.", en: "Diagnosed field integration failures by analyzing middleware logs, separated terminal configuration problems from application ones, and documented the technical requirements for the provider." },
        ],
        stack: ["PHP", "PostgreSQL", "Python", "API"],
    },
    {
        id: "droi",
        company: "Agencia DROI SAS",
        role: { es: "Senior Full Stack Developer | Technical Lead", en: "Senior Full Stack Developer | Technical Lead" },
        tabRole: { es: "Sénior · Tech Lead", en: "Senior · Tech Lead" },
        start: [2022, 8],
        end: [2026, 3],
        place: { es: "Villavicencio, Meta · Presencial", en: "Villavicencio, Meta · On-site" },
        summary: {
            es: "Soluciones web escalables para clientes corporativos, liderando integraciones complejas y sistemas de gestión empresarial, y equipos de desarrollo multifuncionales.",
            en: "Scalable web solutions for corporate clients, leading complex integrations, enterprise management systems and cross-functional development teams.",
        },
        achievements: [
            { es: "Integración REST bidireccional con SIIGO ERP: sincronización en tiempo real de facturación, clientes, inventario y compras. Eliminó el 100% del ingreso manual de datos contables y redujo errores en un 90%.", en: "Bidirectional REST integration with SIIGO ERP: real-time sync of invoicing, customers, inventory and purchasing. It eliminated 100% of manual accounting data entry and cut errors by 90%." },
            { es: "Sistema corporativo de control de acceso: validaciones en tiempo real que redujeron en un 40% los tiempos de registro para más de 200 empleados diarios, con lógicas mensual, quincenal y por turnos.", en: "Corporate access-control system: real-time validations that cut check-in times by 40% for 200+ employees daily, with monthly, bi-weekly and shift-based rules." },
            { es: "GESAGEN, agendamiento de la Rueda de Negocios ANDI: coordinó más de 50 sesiones simultáneas entre vendedores y compradores y redujo los conflictos de agenda en un 60%.", en: "GESAGEN, scheduling for the ANDI Business Matchmaking: coordinated 50+ simultaneous sessions between sellers and buyers and cut scheduling conflicts by 60%." },
            { es: "GESPARKING, parqueadero corporativo: dirigí la reingeniería y la normalización de la base de datos, eliminando la redundancia y mejorando en un 50% el rendimiento de las consultas SQL.", en: "GESPARKING, corporate parking manager: led the re-engineering and database normalization, removing redundancy and improving SQL query performance by 50%." },
            { es: "Módulo de transformaciones y materia prima para el control de producción, dentro del sistema base GESADMIN.", en: "Transformations and raw-materials module for production control, within the GESADMIN base system." },
        ],
        stack: ["PHP", "JavaScript", "SQL", "REST", "SIIGO ERP"],
    },
];

const MONTHS: Record<Lang, string[]> = {
    es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
const CURRENT: Text = { es: "Actualidad", en: "Present" };

const fmt = ([y, m]: YearMonth, lang: Lang) => `${MONTHS[lang][m - 1]} ${y}`;

/** «may 2026 – oct 2026» o «ene 2021 – Actualidad». */
export function periodLabel(job: Job, lang: Lang): string {
    return `${fmt(job.start, lang)} – ${job.end ? fmt(job.end, lang) : CURRENT[lang]}`;
}

/** Duración de un trabajo terminado, contando ambos meses (como LinkedIn): «3 años 8 meses». Vacío si sigue vigente (cambiaría con la fecha de compilación). */
export function durationLabel(job: Job, lang: Lang): string {
    if (!job.end) return "";
    const months = (job.end[0] - job.start[0]) * 12 + (job.end[1] - job.start[1]) + 1;
    const y = Math.floor(months / 12), m = months % 12;
    const unit = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
    const parts = [
        y ? unit(y, lang === "es" ? "año" : "yr", lang === "es" ? "años" : "yrs") : "",
        m ? unit(m, lang === "es" ? "mes" : "mo", lang === "es" ? "meses" : "mos") : "",
    ].filter(Boolean);
    return parts.join(" ");
}
