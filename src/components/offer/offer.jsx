import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const copy = {
  soustitle: {
    fr: "Vous hésitez encore ? Voyez d'abord, décidez ensuite.",
    en: "Still hesitating? See first, decide after.",
  },
  title: { fr: "Votre page d'accueil, gratuite.", en: "Your homepage, free." },
  text: {
    fr: "Je conçois gratuitement la maquette complète de votre future page d'accueil, personnalisée pour votre activité, sous 72h. Vous voyez exactement ce que vous obtiendrez avant de dépenser un dirham. Si elle vous plaît, on construit la suite ensemble.",
    en: "I'll design the complete mockup of your future homepage, personalized to your business, free, within 72 hours. You see exactly what you'd get before spending anything. If you like it, we build the rest together.",
  },
  cta: {
    fr: "Recevoir ma page d'accueil gratuite",
    en: "Get my free homepage",
  },
};

export default function Offer() {
  const { lang } = useLang();
  const title = useRef(null);

  useGSAP(() => {
    gsap.from(title.current, {
      scale: 1.05,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: title.current,
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
  });

  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">{t(copy.soustitle, lang)}</div>
          <h2>{t(copy.title, lang)}</h2>
        </div>
        <p className="offer-text">{t(copy.text, lang)}</p>
        <a href="#contact" className="cta btn-border">
          {t(copy.cta, lang)}
        </a>
      </div>
    </section>
  );
}
