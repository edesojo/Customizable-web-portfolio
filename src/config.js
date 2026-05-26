export const SITE_DATA = {
    // Personal Info
    name: "Eric",
    firstLastName: "de Sojo",
    secondLastName: "Vilches",

    // Contact & Social 
    email: "ericdesojo7496@gmail.com",
    phone: "+34 682 786 220",
    phoneHref: "+34682786220",

    // Social Links 
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/edesojo",
            icon: "github",
            type: ""
        },
        {
            name: "Linkedin",
            url: "https://linkedin.com/in/eric-de-sojo-vilches",
            icon: "linkedin",
            type: ""
        },
        {
            name: "ericdesojo7496@gmail.com",
            url: "ericdesojo7496@gmail.com",
            icon: "email",
            type: "mailto:"
        },
        {
            name: "+34 682 786 220",
            url: "https://wa.me/34682786220",
            icon: "whatsapp",
            type: ""
        }
    ],

    // Skills categorizadas según CV 
    skills: [
        // Frontend - Nombres cortos para cajas de 75px
        { name: "HTML5", icon: "html", category: "Frontend" },
        { name: "CSS3", icon: "css", category: "Frontend" },
        { name: "JS", icon: "js", category: "Frontend" },
        { name: "WP", icon: "wordpress", category: "Frontend" },
        { name: "Tailwind", icon: "tailwind", category: "Frontend" },
        { name: "Bootstrap", icon: "bootstrap", category: "Frontend" },
        { name: "Flowbite", icon: "flowbite", category: "Frontend" },
        { name: "astro", icon: "astro", category: "Frontend" },

        //Backend & Multiplataforma
        { name: "Java", icon: "java", category: "Backend" },
        { name: "PHP", icon: "php", category: "Backend" },
        { name: "Laravel", icon: "laravel", category: "Backend" },
        { name: "C#", icon: "c-sharp", category: "Backend" },
        { name: "SQL", icon: "sql", category: "Backend" },
        { name: "Python", icon: "python", category: "Backend" },

        { name: "Desktop", icon: "pc", category: "Environments" },
        { name: "Android", icon: "android", category: "Environments" },
        { name: "Unity", icon: "unity", category: "Environments" },

        //DevOps & Tools
        { name: "GitHub", icon: "github", category: "DevOps" },
        { name: "Make", icon: "make", category: "DevOps" },
        { name: "Docker", icon: "docker", category: "DevOps" },
        { name: "DevOps", category: "DevOps" },
        { name: "AI Tools", icon: "gpt", category: "DevOps" },

        //QA & Metodologías
        { name: "QA", category: "QA" },
        { name: "Scrum", category: "Agile" },
        { name: "Kanban", category: "Agile" },

        //Idiomas
        { name: "ES", category: "Idiomas" },
        { name: "CAT", category: "Idiomas" },
        { name: "EN (B2)", category: "Idiomas" }
    ],


    experience: {
        es: [
            {
                company: "Diagonal Finance Society",
                role: "DevOps Tech Lead & Full Stack Developer",
                startDate: "Noviembre 2025",
                endDate: "Actualidad",
                description: "Desarrollo, implementando metodologías ágiles y supervisando el ciclo de vida del software (DevOps). Desarrollo de la plataforma web corporativa.",
                technologies: ["DevOps", "HTML5", "Agile", "Gestión de Equipos"],
                icon: "code-tag"
            },
            {
                company: "Valua Travel",
                role: "QA Software Tester",
                startDate: "Marzo 2025",
                endDate: "Noviembre 2025",
                description: "Ejecución de pruebas de software para garantizar la calidad del código. Identificación y resolución de bugs en entornos de producción.",
                technologies: ["QA", "Testing", "Bugs Tracking"],
                icon: "github"
            },
            {
                company: "Profesional Independiente",
                role: "Desarrollador Web WordPress (Freelance)",
                startDate: "Mayo 2024",
                endDate: "Enero 2025",
                description: "Diseño e implementación de funcionalidades personalizadas (plugins) y optimización de rendimiento para clientes en remoto.",
                technologies: ["WordPress", "PHP", "Plugins", "Optimización"],
                icon: "wordpress"
            },
            {
                company: "Miha Borec s.p (Eslovenia)",
                role: "Desarrollador Web (Erasmus+)",
                startDate: "Noviembre 2023",
                endDate: "Diciembre 2023",
                description: "Desarrollo de portales web en un entorno internacional utilizando WordPress y PHP. Comunicación diaria en inglés.",
                technologies: ["WordPress", "PHP", "English", "Europass"],
                icon: "wordpress"
            }
        ],
        en: [
            {
                company: "Diagonal Finance Society",
                role: "DevOps Tech Lead & Full Stack Developer",
                startDate: "November 2025",
                endDate: "Present",
                description: "Technical leadership of the development team, implementing agile methodologies and supervising the software lifecycle (DevOps).",
                technologies: ["DevOps", "HTML5", "Agile", "Team Lead"],
                icon: "code-tag"
            },
            {
                company: "Valua Travel",
                role: "QA Software Tester (Dual Vocational Training)",
                startDate: "March 2025",
                endDate: "Present",
                description: "Software testing execution to ensure code quality. Bug identification and resolution in production environments.",
                technologies: ["QA", "Testing", "Bugs Tracking"],
                icon: "github"
            },
            {
                company: "Freelance Professional",
                role: "WordPress Web Developer",
                startDate: "May 2024",
                endDate: "January 2025",
                description: "Design and implementation of custom features (plugins) and performance optimization for remote clients.",
                technologies: ["WordPress", "PHP", "Plugins", "Optimization"],
                icon: "wordpress"
            },
            {
                company: "Miha Borec s.p (Slovenia)",
                role: "Web Developer (Erasmus+)",
                startDate: "November 2023",
                endDate: "December 2023",
                description: "Web portal development in an international environment using WordPress and PHP. Daily communication in English.",
                technologies: ["WordPress", "PHP", "English", "Europass"],
                icon: "wordpress"
            }
        ]
    },

    education: {
        es: [
            {
                institution: "Escola Pia Santa Anna Mataró",
                degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
                startDate: "2024",
                endDate: "2026",
                description: "Enfoque en el desarrollo de aplicaciones para diversos entornos y lenguajes de programación modernos.",
                technologies: ["Java", "SQL", "Android", "Sistemas"],
            },
            {
                institution: "Escola Pia Santa Anna Mataró",
                degree: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
                startDate: "2022",
                endDate: "2024",
                description: "Formación técnica en hardware, redes y administración de sistemas.",
                technologies: ["Redes", "Sistemas", "Hardware"],
            }
        ],
        en: [
            {
                institution: "Escola Pia Santa Anna Mataró",
                degree: "Higher Degree in Multiplatform Applications Development (DAM)",
                startDate: "2024",
                endDate: "2026",
                description: "Focus on developing applications for various environments and modern programming languages.",
                technologies: ["Java", "SQL", "Android", "Systems"],
            },
            {
                institution: "Escola Pia Santa Anna Mataró",
                degree: "Vocational Training in Microcomputer Systems and Networks (SMR)",
                startDate: "2022",
                endDate: "2024",
                description: "Technical training in hardware, networking, and systems administration.",
                technologies: ["Networking", "Systems", "Hardware"],
            }
        ]
    },
    projects: {
        es: [
            {
                title: "Portfolio Web",
                description: "Mi portfolio personal construido con Astro y Tailwind CSS para mostrar mis proyectos y habilidades. Diseñado con un enfoque en rendimiento y accesibilidad.",
                date: "2023 - Presente",
                technologies: ["Astro", "Tailwind", "JavaScript"],
                repoLink: "https://github.com/edesojo/Customizable-web-portfolio",
                image: "portfolio.png",
                linkIcon: "github",
            }
        ],
        en: [
            {
                title: "Web Portfolio",
                description: "My personal portfolio built with Astro and Tailwind CSS to showcase my projects and skills. Designed with a focus on performance and accessibility.",
                date: "2023 - Present",
                technologies: ["Astro", "Tailwind", "JavaScript"],
                repoLink: "https://github.com/edesojo/Customizable-web-portfolio",
                image: "portfolio.png",
                linkIcon: "github",
            }
        ]
    }
};

// Derived helper
export const fullName = `${SITE_DATA.name} ${SITE_DATA.firstLastName} ${SITE_DATA.secondLastName}`;
