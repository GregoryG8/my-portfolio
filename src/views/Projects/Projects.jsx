import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiAwslambda,
  SiAmazons3,
  SiGo,
  SiAmazondynamodb,
  SiAmazonapigateway,
} from "react-icons/si";

import "./Projects.css";

/**
 * Brand icon + color for each technology, mirroring the Experience badges.
 * Keys must match the technology strings used in PROJECTS.
 */
const TECH_META = {
  "React Native": { icon: SiReact, color: "#61DAFB" },
  Expo: { icon: SiExpo, color: "#000020" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "AWS Lambda": { icon: SiAwslambda, color: "#FF9900" },
  S3: { icon: SiAmazons3, color: "#569A31" },
  Go: { icon: SiGo, color: "#00ADD8" },
  "AWS DynamoDB": { icon: SiAmazondynamodb, color: "#4053D6" },
  "API Gateway": { icon: SiAmazonapigateway, color: "#FF4F8B" },
};

/**
 * Featured projects data.
 * Text (title, description) is pulled from i18n so the array stays
 * language-agnostic; technologies and links live here.
 */
const PROJECTS = [
  {
    id: "ecommerce-monorepo",
    technologies: ["React Native", "Expo", "Node.js", "AWS Lambda", "S3"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "inventory-api",
    technologies: ["Go", "AWS DynamoDB", "API Gateway"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects" aria-label={t("projects.sectionLabel")}>
      <div className="projects__wrapper">
        <header className="projects__intro">
          <h1 className="projects__title">{t("projects.title")}</h1>
          <p className="projects__subtitle">{t("projects.subtitle")}</p>
        </header>

        <ul className="projects__grid" role="list">
          {PROJECTS.map((project, index) => (
            <li key={project.id} className="projects__card">
              {/* Visual placeholder */}
              <div className="projects__thumb" aria-hidden="true">
                <FiFolder className="projects__thumb-icon" />
              </div>

              <div className="projects__body">
                <h2 className="projects__name">
                  {t(`projects.items.${index}.title`)}
                </h2>

                <p className="projects__description">
                  {t(`projects.items.${index}.description`)}
                </p>

                <ul
                  className="projects__tech-list"
                  aria-label={t("projects.techLabel")}
                >
                  {project.technologies.map((tech) => {
                    const meta = TECH_META[tech];
                    const TechIcon = meta?.icon;

                    return (
                      <li key={tech} className="projects__tech-badge">
                        {TechIcon && (
                          <TechIcon
                            className="projects__tech-icon"
                            style={{ color: meta.color }}
                            aria-hidden="true"
                          />
                        )}
                        {tech}
                      </li>
                    );
                  })}
                </ul>

                <footer className="projects__actions">
                  <a
                    href={project.demoUrl}
                    className="projects__link projects__link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projects.demoAria", {
                      name: t(`projects.items.${index}.title`),
                    })}
                  >
                    <FiExternalLink aria-hidden="true" focusable="false" />
                    {t("projects.demo")}
                  </a>
                  <a
                    href={project.codeUrl}
                    className="projects__link projects__link--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projects.codeAria", {
                      name: t(`projects.items.${index}.title`),
                    })}
                  >
                    <FiGithub aria-hidden="true" focusable="false" />
                    {t("projects.code")}
                  </a>
                </footer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
