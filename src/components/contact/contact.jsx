import React, { useRef, useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import linkdin from "../../assets/imgs/social/linkedin.png";
import behance from "../../assets/imgs/social/behance.png";
import github from "../../assets/imgs/social/github.png";
import whatsapp from "../../assets/imgs/social/whatsapp.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLang, t } from "../../i18n.jsx";

const MySwal = withReactContent(Swal);

gsap.registerPlugin(ScrollTrigger);

const copy = {
  soustitle: {
    fr: "Décrivez votre besoin en deux phrases — devis gratuit sous 24h. Pressé ? WhatsApp, c'est encore plus rapide.",
    en: "Describe your need in two sentences — free quote within 24h. In a hurry? WhatsApp is even faster.",
  },
  title: { fr: "PARLONS DE VOTRE PROJET", en: "LET'S TALK ABOUT YOUR PROJECT" },
  details: { fr: "Coordonnées", en: "Contact details" },
  location: { fr: "Localisation", en: "Location" },
  whatsappCta: { fr: "Discuter sur WhatsApp", en: "Chat on WhatsApp" },
  name: { fr: "Votre nom *", en: "Your name *" },
  email: { fr: "Votre email *", en: "Your email *" },
  subject: {
    fr: "Quel service recherchez-vous ?",
    en: "What service are you looking for?",
  },
  message: { fr: "Votre message... *", en: "Your message... *" },
  send: { fr: "ENVOYER MA DEMANDE", en: "SEND MY REQUEST" },
  successTitle: { fr: "Message reçu !", en: "Message received!" },
  successText: {
    fr: "Je vous réponds avec un devis sous 24h.",
    en: "I'll reply with a quote within 24 hours.",
  },
  errorTitle: { fr: "Une erreur est survenue", en: "An error occurred" },
  errorText: {
    fr: "Réessayez, ou contactez-moi directement sur WhatsApp.",
    en: "Try again, or contact me directly on WhatsApp.",
  },
  copyright: {
    fr: "© 2026 Elyamani Hamid - Développeur web, Casablanca",
    en: "© 2026 Elyamani Hamid - Web developer, Casablanca",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const title = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  useGSAP(() => {
    gsap.from(title.current, {
      opacity: 0,
      scale: 1.1,
      duration: 0.7,
      scrollTrigger: {
        trigger: title.current,
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
    gsap.from(left.current, {
      x: "-40vw",
      duration: 0.9,
      scrollTrigger: {
        trigger: left.current,
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
    gsap.from(right.current, {
      opacity: 0,
      duration: 0.9,
      scrollTrigger: {
        trigger: right.current,
        start: "0% 100%",
        toggleActions: "play play pause reverse",
      },
    });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sub: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const domain = window.location.origin;

      const response = await fetch(`${domain}/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          sub: formData.sub,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();
      if (result && result.success === false) {
        throw new Error(result.message || "Send failed");
      }

      setFormData({ name: "", email: "", sub: "", message: "" });
      MySwal.fire({
        title: t(copy.successTitle, lang),
        text: t(copy.successText, lang),
        icon: "success",
      });
    } catch (error) {
      MySwal.fire({
        title: t(copy.errorTitle, lang),
        text: t(copy.errorText, lang),
        icon: "warning",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="title-part" ref={title}>
            <div className="soustitle">{t(copy.soustitle, lang)}</div>
            <h2>{t(copy.title, lang)}</h2>
          </div>
          <div className="row row-cont">
            <div className="col-xl-4 info-contact" ref={left}>
              <a
                href="https://wa.me/+212628142424?text=Salam Hamid! Je veux discuter d'un projet."
                target="_blank"
                rel="noreferrer"
                className="cta btn-border whatsapp-cta"
              >
               <img src={whatsapp} alt='WhatsApp' className='whatap_button' /> {t(copy.whatsappCta, lang)}
              </a>
              <h3>{t(copy.details, lang)}</h3>
              <div className="info-item">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#f37500" }}
                />
                <a href="mailto:hamidelyamani22@gmail.com">
                  hamidelyamani22@gmail.com
                </a>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#f37500" }} />
                <a href="tel:+212628142424">+212 628142424</a>
              </div>
              <h3>{t(copy.location, lang)}</h3>
              <div className="info-item">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#f37500" }} />
                <span>Casablanca - Morocco</span>
              </div>
            </div>
            <div className="col-xl-8 form-contact" ref={right}>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t(copy.name, lang)}
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t(copy.email, lang)}
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-12">
                    <input
                      type="text"
                      name="sub"
                      value={formData.sub}
                      onChange={handleChange}
                      placeholder={t(copy.subject, lang)}
                      className="inptFld"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      placeholder={t(copy.message, lang)}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 submet-botton ">
                    <button
                      type="submit"
                      name="submit"
                      className="inptBtn btn-border"
                      disabled={sending}
                    >
                      {t(copy.send, lang)}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="social_media_copyright">
            <div className="social_media">
              <a
                href="https://www.linkedin.com/in/hamid-el-yamani-63bb57376"
                className="social linkedIn hvr-sweep-to-top"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image">
                  <img src={linkdin} alt="LinkedIn" />
                </div>
                <p className="name">linkedIn</p>
              </a>

              <a
                href="https://github.com/Hamidlyamani"
                className="social GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image">
                  <img src={github} alt="GitHub" />
                </div>
                <p className="name">GitHub</p>
              </a>
              <a
                href="https://www.behance.net/mnhxhx"
                className="social Behance"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image">
                  <img src={behance} alt="Behance" />
                </div>
                <p className="name">Behance</p>
              </a>
              <a
                href="https://wa.me/+212628142424?text=Salam Hamid!"
                className="social Whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <div className="image">
                  <img src={whatsapp} alt="Whatsapp" />
                </div>
                <p className="name">Whatsapp</p>
              </a>
            </div>
            <div className="copyright">
              <p>{t(copy.copyright, lang)}</p>
            </div>
          </div>
        </div>
        <div className="blob4"></div>
      </section>
    </>
  );
}
