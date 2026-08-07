import React from "react";
import "./hero.css";
import logo from "../../assets/imgs/logo.png";
import pc2 from "../../assets/imgs/g1.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const copy = {
  headerCta: { fr: "Devis gratuit", en: "Free quote" },
  tagline: {
    fr: "J'aide les entreprises à construire des plateformes web rapides, intelligentes et fiables.",
    en: "I help businesses build fast, intelligent, reliable web platforms.",
  },
  taglineCta: { fr: "Discutons de votre projet →", en: "Let's talk about your project →" },
};

const Hero = () => {
  const { lang } = useLang();

  useGSAP(() => {
    gsap.from(".image-hero-src", {
      bottom: "-100px",
      opacity: 0,
      duration: 1.4,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".image-hero-src",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
    gsap.from(".web", {
      bottom: "-100px",
      duration: 1.2,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".web",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
    gsap.from(".developer-text", {
      bottom: "-100px",
      duration: 1.2,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".developer-text",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
     gsap.from(".bottom-btn", {
      bottom: "-100px",
      duration: 1.2,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".developer-text",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
    gsap.from(".hero-tagline", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.9,
    });
  });

  return (
    <>
      <header>
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="top-nav container">
          <div className="logo-Name">
            <div className="logo">
              <img src={logo} alt="Elyamani Hamid logo" />
            </div>
            <h1 className="name">
              ELYAMANI <br />
              hamid
            </h1>
          </div>
          <a href="#contact" className="cta btn-border">
            {t(copy.headerCta, lang)}
          </a>
        </div>
        <div className="container_text_img container">
          <div className="content">
            <div className="image-hero-src">
              <img src={pc2} alt="Elyamani Hamid — web developer" />
            </div>
            <div className="web ">web</div>
            <div className="web  outline">web</div>
            <div className="developer-text">
              <span className="de">DEV</span>ELOPER
            </div>
            <a href="#contact" className="cta btn-border small-cta bottom-btn">
              {t(copy.taglineCta, lang)}
            </a>
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Hero;
