import React from "react";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlitch } from "react-powerglitch";
import { FaSpider } from "react-icons/fa";

import "./Footer.css";

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
      start: 0.20,
      end: 0.70,
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
      start: 0.20,
      end: 0.70,
    },
  });

  return (
    <footer className="footer" aria-label={t("nav.mainNavigation")}>
      <div className="footer-content-logo">
        <button
          type="button"
          ref={logoGlitch.ref}
          className="logo-navbar"
          onClick={() => navigate("/")}
          aria-label={t("nav.goToHome")}
        >
          <FaSpider className="spider-icon" size={60} color="#182753" />
        </button>
        <p className="footer-title" ref={titleGlitch.ref}>
          Gregory Gonzalez
        </p>
      </div>
      
      <div className="footer-content">
        <p>{t("footer.text")}</p>
      </div>
    </footer>
  );
};

export default Footer;


