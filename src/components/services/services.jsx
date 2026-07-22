import React, { useRef } from "react";
import "./services.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import service_1 from "../../assets/imgs/programming.png";
import service_2 from "../../assets/imgs/ux.png";
import service_3 from "../../assets/imgs/seo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const copy = {
  soustitle: {
    fr: "Trois domaines, un objectif : des solutions qui fonctionnent et qui durent.",
    en: "Three domains, one goal: solutions that work and last.",
  },
  title: { fr: "Mes Services.", en: "My Services." },
  cta: { fr: "Demander un devis →", en: "Request a quote →" },
  services: [
    {
      img: service_2,
      alt: "Sites & plateformes web",
      title: { fr: "Sites & plateformes web", en: "Websites & web platforms" },
      text: {
        fr: "De la vitrine professionnelle à la plateforme sur mesure (réservation, e-commerce, dashboards) : des produits rapides, sécurisés et pensés pour convertir vos visiteurs en clients.",
        en: "From professional showcase sites to custom platforms (booking, e-commerce, dashboards): fast, secure products built to turn your visitors into customers.",
      },
    },
    {
      img: service_3,
      alt: "Intégration IA & automatisation",
      title: { fr: "Intégration IA & automatisation", en: "AI integration & automation" },
      text: {
        fr: "J'intègre l'intelligence artificielle dans vos outils : recommandations personnalisées, chatbots, génération de contenu, automatisation des tâches répétitives. L'IA au service de votre productivité, pas comme gadget.",
        en: "I build AI into your tools: personalized recommendations, chatbots, content generation, automation of repetitive tasks. AI as productivity, not gimmick.",
      },
    },
    {
      img: service_1,
      alt: "Résolution de problèmes complexes",
      title: { fr: "Résolution de problèmes complexes", en: "Complex problem solving" },
      text: {
        fr: "Application lente, architecture fragile, bug que personne n'arrive à résoudre ? J'analyse, je diagnostique et je répare les systèmes complexes — performance, sécurité, scalabilité.",
        en: "Slow app, fragile architecture, a bug nobody can fix? I analyze, diagnose and repair complex systems — performance, security, scalability.",
      },
    },
  ],
};

export default function Services() {
  const { lang } = useLang();
  const service = useRef(null);
  const title = useRef(null);

  useGSAP(() => {
    gsap.from(title.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: title.current,
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });

    gsap.from(".service", {
      bottom: "-100px",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".service",
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
  });

  return (
    <section className="services" id="service" ref={service}>
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">{t(copy.soustitle, lang)}</div>
          <h2>{t(copy.title, lang)}</h2>
        </div>
        <div className="services-boxs ">
          <CardGroup>
            {copy.services.map((s, i) => (
              <Card className="service" key={i}>
                <Card.Img
                  className="img-service"
                  variant="top"
                  src={s.img}
                  alt={s.alt}
                />
                <Card.Body>
                  <Card.Title>{t(s.title, lang)}</Card.Title>
                  <Card.Text>{t(s.text, lang)}</Card.Text>
                  <a href="#contact" className="service-cta">
                    {t(copy.cta, lang)}
                  </a>
                  <div className="serial-number">0{i + 1}</div>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </div>
      </div>
    </section>
  );
}
