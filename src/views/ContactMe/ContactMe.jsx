import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FiCheck, FiX } from "react-icons/fi";

import "./ContactMe.css";

const ContactMe = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setToast(null);

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({ type: "success", message: t("contact.toast.success") });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          type: "error",
          message: data.message || t("contact.toast.error"),
        });
      }
    } catch {
      setToast({ type: "error", message: t("contact.toast.error") });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-me" aria-label={t("contact.sectionLabel")}>
      <div className="contact-me__wrapper">
        {/* Left column - Form */}
        <div className="contact-me__form-column">
          <header className="contact-me__header">
            <h1 className="contact-me__title">{t("contact.title")}</h1>
            <p className="contact-me__subtitle">{t("contact.subtitle")}</p>
          </header>

          <form className="contact-me__form" onSubmit={handleSubmit}>
            <div className="contact-me__form-row">
              <div className="contact-me__field">
                <label htmlFor="contact-name">{t("contact.form.name")}</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="contact-me__field">
                <label htmlFor="contact-email">{t("contact.form.email")}</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="contact-me__field">
              <label htmlFor="contact-message">
                {t("contact.form.message")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder={t("contact.form.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-me__submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  {t("contact.form.sending")}
                  <span className="contact-me__spinner" />
                </>
              ) : (
                <>
                  {t("contact.form.send")}{" "}
                  <FiSend className="contact-me__send-icon" />
                </>
              )}
            </button>
          </form>

          {/* Loading overlay */}
          {isLoading && (
            <div className="contact-me__loading-overlay" aria-live="polite">
              <div className="contact-me__loading-spinner" />
              <p className="contact-me__loading-text">
                {t("contact.loading")}
              </p>
            </div>
          )}
        </div>

        {/* Right column - Info cards + Social */}
        <aside className="contact-me__info-column">
          <div className="contact-me__info-card">
            <span className="contact-me__info-icon">
              <FiMail />
            </span>
            <h3>{t("contact.info.emailTitle")}</h3>
            <p>{t("contact.info.emailValue")}</p>
          </div>

          <div className="contact-me__info-card">
            <span className="contact-me__info-icon">
              <FiMapPin />
            </span>
            <h3>{t("contact.info.locationTitle")}</h3>
            <p>{t("contact.info.locationValue")}</p>
          </div>

          <div className="contact-me__social">
            <h4 className="contact-me__social-title">
              {t("contact.social.title")}
            </h4>
            <div className="contact-me__social-links">
              <a
                href="https://www.linkedin.com/in/gregory-gonzalez-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-me__social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/GregoryG8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-me__social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          className={`contact-me__toast contact-me__toast--${toast.type}`}
          role="alert"
          aria-live="assertive"
        >
          <span className="contact-me__toast-icon">
            {toast.type === "success" ? <FiCheck /> : <FiX />}
          </span>
          <span className="contact-me__toast-message">{toast.message}</span>
          <button
            type="button"
            className="contact-me__toast-close"
            onClick={() => setToast(null)}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
      )}
    </section>
  );
};

export default ContactMe;
