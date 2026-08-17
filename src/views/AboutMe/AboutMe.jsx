import React from "react";

import { useTranslation } from "react-i18next";
import { FiUser, FiCode, FiDownload } from "react-icons/fi";
import { FiBookOpen, FiAward } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiVuedotjs,
  SiAngular,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiAzuredevops,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import "./AboutMe.css";

const profileImg = "/images/profile.jpg";

const SKILLS = [
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Azure DevOps", icon: SiAzuredevops, color: "#0078D7" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  const education = t("aboutMe.education.items", { returnObjects: true });
  const interests = t("aboutMe.interests.items", { returnObjects: true });

  const isSpanish = i18n.language === "es";
  const cvHref = isSpanish ? "/cv-es.pdf" : "/cv-en.pdf";
  const cvDownload = isSpanish
    ? "CV_Gregory_Gonzalez_ES.pdf"
    : "CV_Gregory_Gonzalez_EN.pdf";

  return (
    <section className="about-me" aria-label={t("aboutMe.sectionLabel")}>
      <div className="about-me__wrapper">
        {/* About Me Section */}
        <div className="about-me__card">
          <header className="about-me__header">
            <FiUser className="about-me__header-icon" aria-hidden="true" />
            <h1 className="about-me__title">{t("aboutMe.title")}</h1>
          </header>

          <div className="about-me__content">
            <div className="about-me__text">
              <p>{t("aboutMe.description.0")}</p>
              <p>{t("aboutMe.description.1")}</p>
            </div>

            <div className="about-me__image-wrapper">
              <img
                src={profileImg}
                alt={t("aboutMe.imageAlt")}
                className="about-me__image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-me__cta">
            <a
              href={cvHref}
              download={cvDownload}
              className="about-me__cv-link"
              aria-label={t("aboutMe.cv.ariaLabel")}
            >
              <FiDownload
                className="about-me__cv-icon"
                aria-hidden="true"
                focusable="false"
              />
              {t("aboutMe.cv.text")}
              <span className="sr-only">
                {t("aboutMe.cv.srDetail")}
              </span>
            </a>
          </div>
        </div>

        {/* Technical Arsenal Section */}
        <div className="about-me__card">
          <header className="about-me__header">
            <FiCode className="about-me__header-icon" aria-hidden="true" />
            <h2 className="about-me__title">{t("aboutMe.skills.title")}</h2>
          </header>

          <ul className="about-me__skills" aria-label={t("aboutMe.skills.label")}>
            {SKILLS.map((skill) => (
              <li key={skill.name} className="about-me__skill-tag">
                <skill.icon
                  className="about-me__skill-icon"
                  style={{ color: skill.color }}
                  aria-hidden="true"
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Education & Interests Row */}
        <div className="about-me__row">
          {/* Education */}
          <div className="about-me__card about-me__card--half">
            <header className="about-me__header">
              <FiBookOpen className="about-me__header-icon" aria-hidden="true" />
              <h2 className="about-me__title">{t("aboutMe.education.title")}</h2>
            </header>

            <ul className="about-me__education-list">
              {Array.isArray(education) &&
                education.map((item, index) => (
                  <li key={index} className="about-me__education-item">
                    <span className="about-me__education-dot" aria-hidden="true" />
                    <div>
                      <strong className="about-me__education-degree">
                        {item.degree}
                      </strong>
                      <p className="about-me__education-school">{item.school}</p>
                      <p className="about-me__education-year">{item.year}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="about-me__card about-me__card--half">
            <header className="about-me__header">
              <FiAward className="about-me__header-icon" aria-hidden="true" />
              <h2 className="about-me__title">{t("aboutMe.interests.title")}</h2>
            </header>

            <div className="about-me__interests-grid">
              {Array.isArray(interests) &&
                interests.map((item, index) => (
                  <div key={index} className="about-me__interest-card">
                    <span className="about-me__interest-emoji" aria-hidden="true">
                      {item.emoji}
                    </span>
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
