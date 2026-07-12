import React from "react";
import { useTranslation } from "react-i18next";

import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language?.startsWith("es") ? "es" : "en";
  const nextLanguage = currentLanguage === "es" ? "en" : "es";
  const buttonLabel = currentLanguage === "es" ? "EN" : "ES";

  const handleLanguageChange = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={handleLanguageChange}
      aria-label={t("languageToggle.switchTo")}
      aria-pressed={currentLanguage === "es"}
    >
      {buttonLabel}
    </button>
  );
};

export default LanguageToggle;