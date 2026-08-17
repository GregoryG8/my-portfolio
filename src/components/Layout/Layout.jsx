import React from "react";

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import "./Layout.css";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className="layout-container">
      <a href="#main-content" className="skip-link">
        {t("a11y.skipToContent")}
      </a>
      <NavBar />
      <main id="main-content" className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
