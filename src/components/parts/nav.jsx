import React from "react";
import "./parts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGears,
  faList,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useLang, t } from "../../i18n.jsx";

const labels = {
  about: { fr: "À PROPOS", en: "ABOUT" },
  services: { fr: "Services", en: "Services" },
  portfolio: { fr: "RÉALISATIONS", en: "PORTFOLIO" },
  skills: { fr: "EXPERTISE", en: "EXPERTISE" },
  contact: { fr: "Contact", en: "Contact" },
};

const Nav = () => {
  const { lang } = useLang();
  return (
    <>
      <div className="nav_bar">
        <div className="nav-b">
          <a href="#about" className="item">
            <FontAwesomeIcon icon={faUser} /> <span>{t(labels.about, lang)}</span>
          </a>
          <a href="#service" className="item">
            <FontAwesomeIcon icon={faList} /> <span>{t(labels.services, lang)}</span>
          </a>
          <a href="#portfolio" className="item">
            <FontAwesomeIcon icon={faBriefcase} /> <span>{t(labels.portfolio, lang)}</span>
          </a>
          <a href="#skills" className="item">
            <FontAwesomeIcon icon={faGears} /> <span>{t(labels.skills, lang)}</span>
          </a>
          <a href="#contact" className="item">
            <FontAwesomeIcon icon={faPhone} /> <span>{t(labels.contact, lang)}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
