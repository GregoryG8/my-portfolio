import React from "react";
import { useTranslation } from "react-i18next";
import { FiBriefcase, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiReact,
  SiVuedotjs,
  SiPostgresql,
  SiMysql,
  SiScrumalliance,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiGo,
} from "react-icons/si";

import "./Experience.css";

/**
 * Brand icon + color for each technology, mirroring the AboutMe skill tags.
 * Keys must match the technology strings used in EXPERIENCES.
 */
const TECH_META = {
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000" },
  Java: { icon: FaJava, color: "#ED8B00" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Spring: { icon: SiSpring, color: "#6DB33F" },
  React: { icon: SiReact, color: "#61DAFB" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Scrum: { icon: SiScrumalliance, color: "#009FDA" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "APIs RESTful": { icon: TbApi, color: "#3f87f2" },
  "HTML5 / CSS3": { icon: SiHtml5, color: "#E34F26" },
};

/**
 * Professional experience data.
 * Text values are pulled from i18n so the array stays language-agnostic;
 * technologies are visual badges and remain the same across languages.
 */
const EXPERIENCES = [
  {
    id: "linktic",
    icon: FiBriefcase,
    technologies: [
      "Node.js",
      "Java",
      "Go",
      "Spring",
      "Vue",
      "PostgreSQL",
      "Scrum",
    ],
  },
  {
    id: "aser-it",
    icon: FiBriefcase,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "APIs RESTful",
      "HTML5 / CSS3",
    ],
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience" aria-label={t("experience.sectionLabel")}>
      <div className="experience__wrapper">
        <header className="experience__intro">
          <h1 className="experience__title">{t("experience.title")}</h1>
          <p className="experience__subtitle">{t("experience.subtitle")}</p>
        </header>

        <ol className="experience__timeline" role="list">
          {EXPERIENCES.map((item, index) => {
            const NodeIcon = item.icon;
            const achievements = t(`experience.items.${index}.achievements`, {
              returnObjects: true,
            });

            return (
              <li key={item.id} className="experience__entry">
                {/* Timeline node */}
                <span className="experience__node" aria-hidden="true">
                  <NodeIcon className="experience__node-icon" />
                </span>

                {/* Experience card */}
                <article className="experience__card">
                  <header className="experience__card-header">
                    <h2 className="experience__role">
                      {t(`experience.items.${index}.role`)}
                    </h2>
                    <span className="experience__date">
                      <FiCalendar aria-hidden="true" focusable="false" />
                      {t(`experience.items.${index}.date`)}
                    </span>
                  </header>

                  <p className="experience__company">
                    {t(`experience.items.${index}.company`)}
                  </p>

                  <p className="experience__summary">
                    {t(`experience.items.${index}.summary`)}
                  </p>

                  <ul className="experience__achievements">
                    {Array.isArray(achievements) &&
                      achievements.map((achievement, i) => (
                        <li key={i} className="experience__achievement">
                          <FiCheckCircle
                            className="experience__check-icon"
                            aria-hidden="true"
                            focusable="false"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                  </ul>

                  <ul
                    className="experience__tech-list"
                    aria-label={t("experience.techLabel")}
                  >
                    {item.technologies.map((tech) => {
                      const meta = TECH_META[tech];
                      const TechIcon = meta?.icon;

                      return (
                        <li key={tech} className="experience__tech-badge">
                          {TechIcon && (
                            <TechIcon
                              className="experience__tech-icon"
                              style={{ color: meta.color }}
                              aria-hidden="true"
                            />
                          )}
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
