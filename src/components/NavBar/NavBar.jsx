import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useGlitch } from "react-powerglitch";
import { FaSpider } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import LanguageToggle from "../LanguageToggle/LanguageToggle";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const glitch = useGlitch({
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

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Close menu on route change (resize beyond mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="navbar" aria-label={t("nav.mainNavigation")} ref={navRef}>
      <button
        type="button"
        ref={glitch.ref}
        className="logo-navbar"
        onClick={() => navigate("/")}
        aria-label={t("nav.goToHome")}
      >
        <FaSpider className="spider-icon" size={60} color="#182753" aria-hidden="true" />
      </button>

      <ul
        id="nav-menu"
        className={`navigation ${isMenuOpen ? "show" : "hidden"}`}
        role="list"
      >
        <li>
          <Link className="navbar-item" to="/" onClick={() => setIsMenuOpen(false)}>
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/" onClick={() => setIsMenuOpen(false)}>
            {t("nav.experience")}
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/" onClick={() => setIsMenuOpen(false)}>
            {t("nav.projects")}
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="/contact" onClick={() => setIsMenuOpen(false)}>
            {t("nav.contact")}
          </Link>
        </li>
      </ul>

      <div className="navbar-actions">
        <LanguageToggle />
        <div
          aria-label={isMenuOpen ? t("a11y.menuClose") : t("a11y.menuOpen")}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          role="button"
          className="navbar-hamburger"
        >
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
