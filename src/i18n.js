import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: {
        mainSection: "Main presentation",
        badge: "Available for work",
        title: "Hi, I'm Gregory Gonzalez",
        subtitle: [
          "I'm a passionate Software Developer!",
          "I love creating stunning Frontend experiences.",
          "Let's turn ideas into reality together!",
          "Full Stack Developer | Development Enthusiast | Lifelong Learner | Problem Solver",
          "Welcome to my portfolio!",
        ],
      },
      experience: {
        sectionLabel: "Professional experience section",
        title: "Professional Journey",
        subtitle:
          "A walk through my technical roles, focused on cloud architecture, scalable systems, and full stack development.",
        techLabel: "Technologies used",
        items: [
          {
            role: "SemiSenior FullStack Developer",
            company: "LINKTIC",
            date: "Bogotá, Colombia (Remote) · Sep 2024 – Aug 2026",
            summary:
              "Full stack development and frontend technical leadership on the SGDA suite, focused on service integration, code quality, and performance.",
            achievements: [
              "Designed and developed robust RESTful APIs for SGDA service integration, ensuring high availability and secure client-server communication.",
              "Managed and optimized relational databases (PostgreSQL, MySQL), refactoring complex SQL queries to reduce response times by 35%.",
              "Led a frontend team of 4 developers, managing task assignment, Pull Request (PR) reviews, and raising code quality through clean standards.",
              "Designed and implemented a reusable Design System for the SGDA suite, reducing the layout time of new interfaces by 40%.",
              "Debugged and resolved over 100 critical bugs in legacy codebases across frontend, backend, and database, stabilizing overall system performance.",
              "Trained the team in web architecture, continuous integration, and agile methodologies (Scrum), increasing delivery speed each sprint.",
            ],
          },
          {
            role: "Frontend Developer",
            company: "ASER IT",
            date: "Madrid, Spain (Remote) · Oct 2023 – Mar 2024",
            summary:
              "Development and maintenance of the CogniSAP platform frontend in agile sprints, focused on responsive interfaces and API integration.",
            achievements: [
              "Developed and maintained the frontend of the CogniSAP platform (cognisap.com) using React, JavaScript, and TypeScript in agile sprints.",
              "Implemented 100% responsive interfaces integrated with RESTful APIs, ensuring an optimal user experience and cross-platform compatibility.",
            ],
          },
        ],
      },
      nav: {
        mainNavigation: "Main navigation",
        goToHome: "Go to home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact me",
        cv: {
          text: "Resume",
          ariaLabel: "Download Resume in PDF format",
          srDetail: "(PDF file, approximately 150 KB)",
        },
        social: {
          github: "Visit my GitHub profile (opens in a new tab)",
          linkedin: "Visit my LinkedIn profile (opens in a new tab)",
        },
      },
      footer: {
        label: "Site footer",
        text: "By Gregory Gonzalez © 2026.",
      },
      contact: {
        sectionLabel: "Contact section",
        title: "Let's Connect",
        subtitle:
          "I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some digital precision, drop me a line.",
        form: {
          name: "Name",
          namePlaceholder: "John Doe",
          email: "Email",
          emailPlaceholder: "john@example.com",
          message: "Message",
          messagePlaceholder: "Tell me about your project...",
          send: "Send Message",
          sending: "Sending...",
        },
        loading: "Sending your message, please wait...",
        toast: {
          success: "Message sent successfully! I'll get back to you soon.",
          error: "Something went wrong. Please try again later.",
          close: "Close notification",
        },
        info: {
          emailTitle: "Email",
          emailValue: "gregory.gonzalez.martinez2@gmail.com",
          locationTitle: "Location",
          locationValue: "Available Remote Worldwide",
        },
        social: {
          title: "Social Presence",
        },
      },
      languageToggle: {
        label: "English",
        switchTo: "Switch to Spanish",
      },
      aboutMe: {
        sectionLabel: "About me section",
        title: "About Me",
        imageAlt: "Gregory Gonzalez Martinez profile photo",
        description: [
          "FullStack Developer (Systems Technologist) with experience building scalable web architectures, designing RESTful APIs, and creating modern interfaces. Specialized in Node.js (Express), Java (Spring), TypeScript, React, and Vue, along with relational database management (PostgreSQL, MySQL).",
          "Known for leading frontend teams, developing Design Systems, optimizing client-server communication, and debugging legacy code in high-impact environments. I thrive where technical precision meets creative problem-solving.",
        ],
        skills: {
          title: "Technical Arsenal",
          label: "List of technical skills",
        },
        education: {
          title: "Education",
          items: [
            {
              degree: "Systems Information Technology",
              school: "Universidad del Valle",
              year: "2018 - 2023",
            },
          ],
        },
        interests: {
          title: "Certifications",
          items: [
            { emoji: "🎓", name: "Meta Front-End Developer" },
            { emoji: "🟢", name: "Node & Express Essentials - IBM" },
            { emoji: "⚛️", name: "Front-End Apps with React - IBM" },
            { emoji: "🐍", name: "Python - University of Michigan" },
            { emoji: "📜", name: "JavaScript Essentials - IBM" },
            { emoji: "🔄", name: "Scrum Fundamentals Certified" },
          ],
        },
        badges: {
          title: "Verified Badges",
          loading: "Loading verified badges...",
          verify: "Verify",
          verifyAria: "Verify the {{name}} badge on Credly (opens in a new tab)",
        },
      },
      a11y: {
        skipToContent: "Skip to main content",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
    },
  },
  es: {
    translation: {
      home: {
        mainSection: "Presentación principal",
        badge: "Disponible para trabajar",
        title: "Hola, soy Gregory Gonzalez",
        subtitle: [
          "¡Soy un desarrollador de software apasionado!",
          "Me encanta crear experiencias Frontend sorprendentes.",
          "¡Convirtamos ideas en realidad juntos!",
          "Desarrollador Full Stack | Entusiasta del desarrollo | Aprendiz de por vida | Resolutor de problemas",
          "¡Bienvenido a mi portafolio!",
        ],
      },
      experience: {
        sectionLabel: "Sección de experiencia profesional",
        title: "Trayectoria Profesional",
        subtitle:
          "Un recorrido por mis roles técnicos, enfocado en arquitectura cloud, sistemas escalables y desarrollo full stack.",
        techLabel: "Tecnologías utilizadas",
        items: [
          {
            role: "Desarrollador FullStack SemiSenior",
            company: "LINKTIC",
            date: "Bogotá, Colombia (Remoto) · Sep 2024 – Ago 2026",
            summary:
              "Desarrollo full stack y liderazgo técnico frontend en la suite SGDA, con foco en integración de servicios, calidad de código y rendimiento.",
            achievements: [
              "Diseñé y desarrollé APIs RESTful robustas para la integración de servicios SGDA, garantizando alta disponibilidad y comunicación segura cliente-servidor.",
              "Administré y optimicé bases de datos relacionales (PostgreSQL, MySQL), refactorizando consultas SQL complejas para reducir los tiempos de respuesta en un 35%.",
              "Lideré un equipo frontend de 4 desarrolladores, gestionando la asignación de tareas, revisión de Pull Requests (PRs) y elevando la calidad del código mediante estándares limpios.",
              "Diseñé e implementé un Design System reutilizable para la suite SGDA, reduciendo el tiempo de maquetación de nuevas interfaces en un 40%.",
              "Depuré y resolví más de 100 bugs críticos en bases de código legacy en frontend, backend y base de datos, estabilizando el rendimiento global del sistema.",
              "Capacité al equipo en arquitectura web, integración continua y metodologías ágiles (Scrum), incrementando la velocidad de entregas en cada sprint.",
            ],
          },
          {
            role: "Desarrollador Frontend",
            company: "ASER IT",
            date: "Madrid, España (Remoto) · Oct 2023 – Mar 2024",
            summary:
              "Desarrollo y mantenimiento del frontend de la plataforma CogniSAP en sprints ágiles, con foco en interfaces responsive e integración con APIs.",
            achievements: [
              "Desarrollé y mantuve el frontend de la plataforma CogniSAP (cognisap.com) utilizando React, JavaScript y TypeScript en sprints ágiles.",
              "Implementé interfaces 100% responsive integradas con APIs RESTful, asegurando una óptima experiencia de usuario y compatibilidad multiplataforma.",
            ],
          },
        ],
      },
      nav: {
        mainNavigation: "Navegación principal",
        goToHome: "Ir al inicio",
        about: "Acerca de",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contáctame",
        cv: {
          text: "CV",
          ariaLabel: "Descargar Currículum Vitae en formato PDF",
          srDetail: "(Archivo PDF, aproximadamente 150 KB)",
        },
        social: {
          github: "Visitar mi perfil de GitHub (se abre en una pestaña nueva)",
          linkedin: "Visitar mi perfil de LinkedIn (se abre en una pestaña nueva)",
        },
      },
      footer: {
        label: "Pie de página",
        text: "Hecho por Gregory Gonzalez © 2026.",
      },
      contact: {
        sectionLabel: "Sección de contacto",
        title: "Conectemos",
        subtitle:
          "Actualmente estoy disponible para proyectos freelance y oportunidades a tiempo completo. Si tienes un proyecto que necesita precisión digital, escríbeme.",
        form: {
          name: "Nombre",
          namePlaceholder: "John Doe",
          email: "Email",
          emailPlaceholder: "john@example.com",
          message: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto...",
          send: "Enviar Mensaje",
          sending: "Enviando...",
        },
        loading: "Enviando tu mensaje, por favor espera...",
        toast: {
          success: "¡Mensaje enviado con éxito! Te responderé pronto.",
          error: "Algo salió mal. Por favor intenta de nuevo más tarde.",
          close: "Cerrar notificación",
        },
        info: {
          emailTitle: "Email",
          emailValue: "gregory.gonzalez.martinez2@gmail.com",
          locationTitle: "Ubicación",
          locationValue: "Disponible Remoto Mundial",
        },
        social: {
          title: "Redes Sociales",
        },
      },
      languageToggle: {
        label: "Español",
        switchTo: "Cambiar a inglés",
      },
      aboutMe: {
        sectionLabel: "Sección sobre mí",
        title: "Sobre Mí",
        imageAlt: "Foto de perfil de Gregory Gonzalez Martinez",
        description: [
          "Desarrollador FullStack (Tecnólogo en Sistemas) con experiencia en la construcción de arquitecturas web escalables, diseño de APIs RESTful y creación de interfaces modernas. Especializado en Node.js (Express), Java (Spring), TypeScript, React y Vue, junto con el manejo de bases de datos relacionales (PostgreSQL, MySQL).",
          "Destacado por liderar equipos frontend, desarrollar Design Systems, optimizar la comunicación cliente-servidor y depurar código legacy en entornos de alto impacto. Me desenvuelvo donde la precisión técnica se encuentra con la resolución creativa de problemas.",
        ],
        skills: {
          title: "Arsenal Técnico",
          label: "Lista de habilidades técnicas",
        },
        education: {
          title: "Educación",
          items: [
            {
              degree: "Tecnología en Sistemas de Información",
              school: "Universidad del Valle",
              year: "2018 - 2023",
            },
          ],
        },
        interests: {
          title: "Certificaciones",
          items: [
            { emoji: "🎓", name: "Meta Front-End Developer" },
            { emoji: "🟢", name: "Node & Express Essentials - IBM" },
            { emoji: "⚛️", name: "Front-End Apps with React - IBM" },
            { emoji: "🐍", name: "Python - University of Michigan" },
            { emoji: "📜", name: "JavaScript Essentials - IBM" },
            { emoji: "🔄", name: "Scrum Fundamentals Certified" },
          ],
        },
        badges: {
          title: "Insignias Verificadas",
          loading: "Cargando insignias verificadas...",
          verify: "Verificar",
          verifyAria: "Verificar la insignia {{name}} en Credly (se abre en una pestaña nueva)",
        },
      },
      a11y: {
        skipToContent: "Saltar al contenido principal",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;