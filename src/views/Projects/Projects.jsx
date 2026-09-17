import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink, FiGithub, FiFolder, FiZap } from "react-icons/fi";
import {
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiAwslambda,
  SiAmazons3,
  SiGo,
  SiAmazondynamodb,
  SiAmazonapigateway,
  SiAngular,
  SiAmazonaws,
  SiTypescript,
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
  "Amazon S3": { icon: SiAmazons3, color: "#569A31" },
  Go: { icon: SiGo, color: "#00ADD8" },
  "Go (Golang)": { icon: SiGo, color: "#00ADD8" },
  "AWS DynamoDB": { icon: SiAmazondynamodb, color: "#4053D6" },
  DynamoDB: { icon: SiAmazondynamodb, color: "#4053D6" },
  "API Gateway": { icon: SiAmazonapigateway, color: "#FF4F8B" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  CloudFront: { icon: SiAmazonaws, color: "#8C4FFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
};

/**
 * Icon per link type used in each project's `links` array.
 * "primary" renders a filled button; others render as outlined buttons.
 */
const LINK_ICONS = {
  demo: FiExternalLink,
  frontend: FiGithub,
  backend: FiZap,
  code: FiGithub,
};

/**
 * Featured projects data.
 * Text (title, description) is pulled from i18n so the array stays
 * language-agnostic; technologies and links live here.
 */
const PROJECTS = [
  {
    id: "shareloom",
    technologies: [
      "Go (Golang)",
      "AWS Lambda",
      "Angular",
      "DynamoDB",
      "Amazon S3",
      "CloudFront",
      "TypeScript",
    ],
    links: [
      { type: "demo", url: "https://www.linkedin.com/feed/update/urn:li:activity:7495872245085593600/", labelKey: "demo", primary: true },
      { type: "frontend", url: "https://github.com/GregoryG8/shareloom-web", labelKey: "repoFrontend" },
      { type: "backend", url: "https://github.com/GregoryG8/shareloom-lambda", labelKey: "repoBackend" },
    ],
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
                  {project.links.map((link) => {
                    const LinkIcon = LINK_ICONS[link.type] || FiExternalLink;
                    const projectName = t(`projects.items.${index}.title`);
                    const label = t(`projects.${link.labelKey}`);
                    // Treat "#" or empty URLs as not-yet-available placeholders.
                    const isPlaceholder = !link.url || link.url === "#";
                    const variant = link.primary
                      ? "projects__link--primary"
                      : "projects__link--secondary";

                    if (isPlaceholder) {
                      return (
                        <span
                          key={link.type}
                          className={`projects__link ${variant} projects__link--disabled`}
                          aria-disabled="true"
                          title={t("projects.comingSoon")}
                        >
                          <LinkIcon aria-hidden="true" focusable="false" />
                          {label}
                        </span>
                      );
                    }

                    return (
                      <a
                        key={link.type}
                        href={link.url}
                        className={`projects__link ${variant}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} — ${projectName}`}
                      >
                        <LinkIcon aria-hidden="true" focusable="false" />
                        {label}
                      </a>
                    );
                  })}
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
