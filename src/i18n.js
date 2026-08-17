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
      },
      footer: {
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
        },
        info: {
          emailTitle: "Email",
          emailValue: "hello@gregorygonzalez.dev",
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
      },
      footer: {
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
        },
        info: {
          emailTitle: "Email",
          emailValue: "hello@gregorygonzalez.dev",
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