import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const copy = {
  soustitle: {
    fr: "Pas de surprise : voici exactement comment on travaille ensemble.",
    en: "No surprises: here is exactly how we work together.",
  },
  title: { fr: "Comment ça se passe", en: "How it works" },
  steps: [
    {
      title: { fr: "Appel découverte (gratuit, 30 min)", en: "Discovery call (free, 30 min)" },
      text: {
        fr: "On clarifie votre besoin et vos objectifs.",
        en: "We clarify your needs and goals.",
      },
    },
    {
      title: { fr: "Proposition + devis sous 24h", en: "Proposal + quote within 24h" },
      text: {
        fr: "Périmètre, délais et étapes. Sans surprise.",
        en: "Scope, timeline and milestones. No surprises.",
      },
    },
    {
      title: { fr: "Design & développement", en: "Design & development" },
      text: {
        fr: "Points d'étape réguliers : vous suivez tout l'avancement.",
        en: "Regular checkpoints: you follow all the progress.",
      },
    },
    {
      title: { fr: "Lancement + 30 jours de support", en: "Launch + 30 days of support" },
      text: {
        fr: "Je reste disponible après la mise en ligne.",
        en: "I stay available after going live.",
      },
    },
  ],
};

export default function Process() {
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
    gsap.from(".process-step", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".process-grid",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
  });

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">{t(copy.soustitle, lang)}</div>
          <h2>{t(copy.title, lang)}</h2>
        </div>
        <div className="process-grid">
          {copy.steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-num">0{i + 1}</div>
              <h4>{t(s.title, lang)}</h4>
              <p>{t(s.text, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
