import { fullName } from '../config.js';

export const allowedLanguages = new Set(["es", "en"]);
export const defaultLanguage = "es";

export const ui = {
    es: {
        'fullname': fullName,
        'site.title': fullName,

        'hero.title': fullName,
        'hero.subtitle': 'Desarrollador de aplicaciones multiplataforma | Java & PHP',
        'hero.description': 'Especialista en la automatización de procesos y liderazgo técnico de proyectos web en entornos ágiles.',

        'error404.title': '404',
        'error404.code': '404',
        'error404.message': 'Página no encontrada',
        'error404.returnButton': 'Volver al inicio',

        'sobremi.title': 'Sobre Mí',
        'sobremi.text1': 'Soy un Desarrollador Full Stack y estudiante de DAM con experiencia liderando el ciclo de vida completo del software.',
        'sobremi.text2': 'Cuento con trayectoria internacional (Erasmus+ en Eslovenia) y una mentalidad proactiva enfocada en la eficiencia y la integridad de datos.',
        'sobremi.text3': 'Domino el desarrollo de portales y gestión de sistemas con un fuerte enfoque en Java, PHP y metodologías ágiles como Scrum y Kanban.',

        'skills.subtitle': 'Expertise',
        'skills.title': 'Ingeniería de Software',
        'skills.description': 'Stack especializado en Java, PHP (Laravel) y tecnologías modernas como Tailwind, junto con herramientas avanzadas de DevOps y automatización.',

        'experience.title': 'Experiencia',
        'experience.subtitle': 'Trayectoria profesional',

        'education.title': 'Educación',
        'education.subtitle': 'Formación académica',

        'projects.title': 'Proyectos',
        'projects.subtitle': 'Soluciones digitales y despliegues técnicos',
        
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Skills',
        'nav.education': 'Educación',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos'
    },
    en: {
        'fullname': fullName,
        'site.title': fullName,

        'hero.title': fullName,
        'hero.subtitle': 'Multiplataform Developer | Java & PHP',
        'hero.description': 'Specialist in process automation and technical leadership for web projects in agile environments.',

        'error404.title': '404',
        'error404.code': '404',
        'error404.message': 'Page not found',
        'error404.returnButton': 'Return to home',

        'sobremi.title': 'About Me',
        'sobremi.text1': 'I am a Full Stack Developer and DAM student with experience leading the entire software development lifecycle.',
        'sobremi.text2': 'I have international experience (Erasmus+ in Slovenia) and a proactive mindset focused on efficiency and data integrity.',
        'sobremi.text3': 'Expert in portal development and systems management with a strong focus on Java, PHP, and agile methodologies like Scrum and Kanban.',

        'skills.subtitle': 'Expertise',
        'skills.title': 'Software Engineering',
        'skills.description': 'Tech stack specialized in Java, PHP (Laravel), and modern frontend tools, combined with advanced DevOps and automation expertise.',

        'experience.title': 'Experience',
        'experience.subtitle': 'Professional experience',

        'education.title': 'Education',
        'education.subtitle': 'Academic background',

        'projects.title': 'Projects',
        'projects.subtitle': 'Digital solutions and technical deployments',

        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.skills': 'Skills',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects'
    }
}