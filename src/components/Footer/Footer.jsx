import React from "react";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlitch } from "react-powerglitch";
import { FaSpider, FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./Footer.css";

const EMAIL = "gregory.gonzalez.martinez2@gmail.com";
const GITHUB_URL = "https://github.com/GregoryGonzalez";
const LINKEDIN_URL = "https://www.linkedin.com/in/gregory-gonzalez";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logoGlitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 450,
      iterations: 1,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.2,
      end: 0.7,
    },
  });

  const titleGlitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 450,
      iterations: 1,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.2,
      end: 0.7,
    },
  });

  return (
    <footer className="footer" aria-label={t("footer.label")}>
      {/* Primary call to action */}
      <div className="footer-cta">
        <p className="footer-cta__headline">{t("footer.cta")}</p>
        <a className="footer-cta__email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <div className="footer-cta__social">
          <a
            href={GITHUB_URL}
            className="footer-social__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("nav.social.github")}
          >
            <FaGithub aria-hidden="true" focusable="false" />
          </a>
          <a
            href={LINKEDIN_URL}
            className="footer-social__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("nav.social.linkedin")}
          >
            <FaLinkedinIn aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>

      {/* Bottom bar: logo + copyright */}
      <div className="footer-bottom">
        <div className="footer-content-logo">
          <button
            type="button"
            ref={logoGlitch.ref}
            className="logo-navbar"
            onClick={() => navigate("/")}
            aria-label={t("nav.goToHome")}
          >
            <FaSpider className="spider-icon" size={44} color="#182753" aria-hidden="true" />
          </button>
          <p className="footer-title" ref={titleGlitch.ref}>
            Gregory Gonzalez
          </p>
        </div>

        <div className="footer-content">
          <p>{t("footer.text")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
