import "./about.css";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const copy = {
  title: {
    fr: "Développeur full-stack, basé à Casablanca.",
    en: "Full-stack developer, based in Casablanca.",
  },
  text: {
    fr: "Je suis Hamid El-Yamani. Je conçois des plateformes web complètes, du front-end soigné aux architectures backend complexes, et j'intègre l'intelligence artificielle là où elle apporte une vraie valeur. Mon code est public : vous pouvez vérifier mon travail avant de me contacter. Je réponds en moins de 24h.",
    en: "I'm Hamid El-Yamani. I build complete web platforms, from polished front-ends to complex backend architectures, and I integrate AI where it brings real value. My code is public: you can verify my work before contacting me. I reply within 24 hours.",
  },
  cv: { fr: " Voir mon CV →", en: "View my resume →" },
  contact: { fr: "Me contacter", en: "Contact me" },
};

const About = () => {
  const { lang } = useLang();
  const el = useRef(null);
  const el2 = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      { x: "-50vw", opacity: 0, skewX: 65 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: el.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      }
    );

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        gsap.fromTo(
          el2.current,
          { x: "50vw", opacity: 0, skewX: -65 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            duration: 0.9,
            scrollTrigger: {
              trigger: el.current,
              start: "0% 100%",
              toggleActions: "play play pause reverse",
            },
          }
        );
      },
      "(max-width: 767px)": () => {
        gsap.fromTo(
          el2.current,
          { x: "-50vw", opacity: 0, skewX: 65 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el.current,
              start: "0% 100%",
              toggleActions: "play play pause reverse",
              lazy: false,
            },
          }
        );
      },
    });
  });

  return (
    <>
      <section className="about" id="about">
        <div className="blob3"></div>
        <div className="container">
          <div className="row about-text">
            <div className="col left" ref={el}>
              <h3>{t(copy.title, lang)}</h3>
            </div>
            <div className="col right" ref={el2}>
              <p>{t(copy.text, lang)}</p>
              <div className="about-buttons">
                        <a href="#contact" className="cta btn-border">
                  {t(copy.contact, lang)}
                </a>
                <a
                  href="elyamani_hamid.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="cta cta_sec btn-border"
                >
                  {t(copy.cv, lang)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
