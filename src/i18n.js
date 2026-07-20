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