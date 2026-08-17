import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: {
        mainSection: "Main presentation",
        title: "Hi, I'm Gregory Gonzalez",
        subtitle: [
          "I'm a passionate Software Developer!",
          "I love creating stunning Frontend experiences.",
          "Let's turn ideas into reality together!",
          "Full Stack Developer | Development Enthusiast | Lifelong Learner | Problem Solver",
          "Welcome to my portfolio!",
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
        title: "Hola, soy Gregory Gonzalez",
        subtitle: [
          "¡Soy un desarrollador de software apasionado!",
          "Me encanta crear experiencias Frontend sorprendentes.",
          "¡Convirtamos ideas en realidad juntos!",
          "Desarrollador Full Stack | Entusiasta del desarrollo | Aprendiz de por vida | Resolutor de problemas",
          "¡Bienvenido a mi portafolio!",
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