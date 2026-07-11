import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useGlitch } from "react-powerglitch";
import { FaSpider } from "react-icons/fa";

import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

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
      start: 0.20,
      end: 0.70,
    },
  });

  return (
    <nav className="navbar" aria-label="Main navigation">
      <button
        type="button"
        ref={glitch.ref}
        className="logo-navbar"
        onClick={() => navigate("/")}
        aria-label="Go to home"
      >
        <FaSpider className="spider-icon" size={60} color="#182753" />
      </button>
      <div className={`navigation ${isMenuOpen ? "show" : "hidden"}`}>
        <NavigationLink to="/" text="About" />
        <NavigationLink to="/" text="Experience" />
        <NavigationLink to="/" text="Projects" />
        <NavigationLink to="/" text="Contact me" />
      </div>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
    </nav>
  );
};

const NavigationLink = ({ to, text }) => (
  <Link className="navbar-item" to={to}>
    {text}
  </Link>
);

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavBar;
