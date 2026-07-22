import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLang, useTheme } from "../../i18n.jsx";

export default function Controls() {
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="corner-controls">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
      </button>
      <div className="lang-switch vertical" aria-label="Language">
        <button
          className={lang === "fr" ? "active" : ""}
          onClick={() => setLang("fr")}
        >
          FR
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
