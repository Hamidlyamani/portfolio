import React from "react";
import whatsapp from "../../assets/imgs/social/whatsapp.png";
import { useLang } from "../../i18n.jsx";

export default function WhatsappButton() {
  const { lang } = useLang();
  const text =
    lang === "fr"
      ? "Salam Hamid ! Je veux discuter d'un projet."
      : "Hi Hamid! I'd like to discuss a project.";

  return (
    <a
      href={`https://wa.me/212628142424?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  );
}
