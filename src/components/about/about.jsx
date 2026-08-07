import "./about.css";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, useTheme, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

// Total timeline length. Scrub maps this onto the scroll range, so the
// absolute value only controls the ratio between the two staggers.
const SPAN = 1;

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

// Character splitter. Words stay unbreakable so wrapping is unaffected;
// the readable string is kept on aria-label and the spans are hidden from
// assistive tech, otherwise screen readers spell the text out letter by letter.
const SplitChars = ({ text }) => (
  <span className="split-chars" aria-label={text}>
    {text.split(" ").map((word, w) => (
      <React.Fragment key={w}>
        {w > 0 && " "}
        <span className="sc-word" aria-hidden="true">
          {Array.from(word).map((ch, c) => (
            <span className="sc-char" key={c}>
              {ch}
            </span>
          ))}
        </span>
      </React.Fragment>
    ))}
  </span>
);

const About = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const section = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const titleChars = gsap.utils.toArray(".left .sc-char", section.current);
      const bodyChars = gsap.utils.toArray(".right .sc-char", section.current);
      if (!titleChars.length && !bodyChars.length) return;

      // Read the target colour from CSS so the light/dark themes stay the
      // single source of truth (see --sc-on in about.css).
      const revealColor = getComputedStyle(section.current)
        .getPropertyValue("--sc-on")
        .trim();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          // Fill completes when the section's centre reaches the middle of
          // the viewport, not when the section has scrolled up to the top.
          start: "top 80%",
          end: "center center",
          scrub: 0.75,
        },
      });

      // Both columns fill in parallel and land together, rather than the
      // paragraph waiting for the heading to finish.
      if (titleChars.length) {
        tl.set(
          titleChars,
          { color: revealColor, stagger: SPAN / titleChars.length },
          0.1
        );
      }
      if (bodyChars.length) {
        tl.set(
          bodyChars,
          { color: revealColor, stagger: SPAN / bodyChars.length },
          0.1
        );
      }
    },
    { scope: section, dependencies: [lang, theme], revertOnUpdate: true }
  );

  return (
    <>
      <section className="about" id="about" ref={section}>
        <div className="blob3"></div>
        <div className="container">
          <div className="row about-text">
            <div className="col left">
              <h3>
                <SplitChars text={t(copy.title, lang)} />
              </h3>
            </div>
            <div className="col right">
              <p>
                <SplitChars text={t(copy.text, lang)} />
              </p>
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
