import { useEffect, useRef, useState } from "react";
import "./progects.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import project_12 from "../../assets/imgs/img-12.png";
import project_13 from "../../assets/imgs/img-13.png";
import project_1 from "../../assets/imgs/img-1.webp";
import project_2 from "../../assets/imgs/img-2.webp";
import project_4 from "../../assets/imgs/img-4.png";
import project_5 from "../../assets/imgs/img-5.webp";
import project_6 from "../../assets/imgs/img-6.webp";
import project_7 from "../../assets/imgs/img-7.png";
import project_8 from "../../assets/imgs/img-8.png";
import project_9 from "../../assets/imgs/img-9.png";
import project_10 from "../../assets/imgs/img-10.webp";
import project_11 from "../../assets/imgs/img-11.webp";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Project from "./project-1";
import html from "../../assets/imgs/tech/html.png";
import css from "../../assets/imgs/tech/css3.png";
import js from "../../assets/imgs/tech/js.png";
import react from "../../assets/imgs/tech/react.png";
import GSAP from "../../assets/imgs/tech/gsap.png";
import php from "../../assets/imgs/tech/php.png";
import mysql from "../../assets/imgs/tech/mysql.png";
import axios from "../../assets/imgs/tech/axios.png";
import laravel from "../../assets/imgs/tech/laravel.png";
import typescript from "../../assets/imgs/tech/typescript.png";
import shadcn from "../../assets/imgs/tech/shadcn.png";
import wordpress from "../../assets/imgs/tech/wordpress.png";
import acf from "../../assets/imgs/tech/acf.png";
import woo from "../../assets/imgs/tech/woo.png";
import tailwind from "../../assets/imgs/tech/tailwind.svg";
import OpenAI from "../../assets/imgs/tech/openai.png";
import seckitLearn from "../../assets/imgs/tech/seckit-learn.webp";
import fastapi from "../../assets/imgs/tech/fastapi.webp";
import nextjs from "../../assets/imgs/tech/nextjs.webp";
import postgreSQL from "../../assets/imgs/tech/postgreSQL.webp";
import jwt from "../../assets/imgs/tech/jwt.webp";
import konva from "../../assets/imgs/tech/conva.webp";
import socketio from "../../assets/imgs/tech/socketio.webp";
import project_details_1 from "../../assets/imgs/project_details_1.webp";
import project_details_2 from "../../assets/imgs/project_details_2.webp";
import project_details_4 from "../../assets/imgs/project_details_4.png";
import project_details_5 from "../../assets/imgs/project_details_5.webp";
import project_details_6 from "../../assets/imgs/project_details_6.webp";
import project_details_7 from "../../assets/imgs/project_details_7.png";
import project_details_8 from "../../assets/imgs/project_details_8.png";
import project_details_9 from "../../assets/imgs/project_details_9.png";
import project_details_10 from "../../assets/imgs/project_details_10.webp";
import project_details_11 from "../../assets/imgs/project_details_11.png";
import project_details_12 from "../../assets/imgs/project_details_12.png";
import project_details_13 from "../../assets/imgs/project_details_13.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLang, t } from "../../i18n.jsx";
gsap.registerPlugin(ScrollTrigger);

const sectionCopy = {
  soustitle: {
    fr: "Chaque projet répond à un problème réel. Voici comment.",
    en: "Every project solves a real problem. Here is how.",
  },
  title: { fr: "Mes Réalisations.", en: "My Work." },
  showAll: { fr: "Voir tous les projets", en: "Show all projects" },
  showLess: { fr: "Voir moins", en: "Show less" },
  discover: { fr: "Découvrir", en: "Discover" },
};

export const cardContents = [
  {
    id: 0,
    title: "Postra",
    image_p: project_12,
    demo: false,
    type: { fr: "SaaS — IA & Réseaux Sociaux", en: "SaaS — AI & Social Media" },
    problem: {
      fr: "Gérer les réseaux sociaux d'une marque dévore des heures chaque semaine : création de contenu, publication multi-plateformes, analyse des résultats.",
      en: "Managing a brand's social media eats hours every week: content creation, multi-platform publishing, performance analysis.",
    },
    solution: {
      fr: "Postra, un SaaS que j'ai développé en full-stack : génération de posts par IA fidèle à la voix de la marque, planification automatique sur 6 plateformes (Instagram, LinkedIn, TikTok, Facebook, X, Threads) et analytics en temps réel.",
      en: "Postra, a SaaS I built full-stack: AI post generation true to the brand's voice, automatic scheduling across 6 platforms (Instagram, LinkedIn, TikTok, Facebook, X, Threads) and real-time analytics.",
    },
    result: {
      fr: "Un produit en production, utilisé par plus de 450 marketeurs, agences et créateurs dans le monde.",
      en: "A production product used by 450+ marketers, agencies and creators worldwide.",
    },
    items: [
      { fr: "Génération IA de textes et visuels, adaptés à chaque plateforme", en: "AI text & image generation, adapted to each platform" },
      { fr: "Planification automatique et file d'attente intelligente", en: "Auto-publishing and smart scheduling queue" },
      { fr: "Analytics multi-plateformes avec recommandations IA", en: "Cross-platform analytics with AI recommendations" },
      { fr: "Espaces multi-marques pour les agences", en: "Multi-brand workspaces for agencies" },
    ],
    imageName: [nextjs, typescript, tailwind, OpenAI, laravel, mysql, jwt],
    project_details: project_details_12,
    link: "https://postra.io",
  },
  {
    id: 1,
    title: "Roomly",
    image_p: project_10,
    demo: false,
    type: { fr: "Plateforme Full-Stack & IA", en: "Full-Stack Platform & AI" },
    problem: {
      fr: "Trouver un logement adapté demande des heures de recherche manuelle, et les propriétaires manquent d'outils pour gérer leurs biens.",
      en: "Finding suitable housing takes hours of manual searching, and owners lack tools to manage their properties.",
    },
    solution: {
      fr: "Plateforme de réservation avec recommandations personnalisées par machine learning (scikit-learn), authentification sécurisée par rôles et tableaux de bord dédiés pour administrateurs et propriétaires.",
      en: "Booking platform with personalized machine-learning recommendations (scikit-learn), secure role-based authentication and dedicated dashboards for admins and owners.",
    },
    result: {
      fr: "Recherche, réservation et gestion réunies dans une seule plateforme rapide et sécurisée.",
      en: "Search, booking and management united in one fast, secure platform.",
    },
    items: [
      { fr: "Authentification JWT avec gestion des rôles", en: "JWT authentication with role management" },
      { fr: "Moteur de recommandation machine learning", en: "Machine-learning recommendation engine" },
      { fr: "Dashboards administrateurs et propriétaires", en: "Admin and owner dashboards" },
      { fr: "API REST reliant Next.js et FastAPI", en: "REST API connecting Next.js and FastAPI" },
    ],
    imageName: [nextjs, fastapi, seckitLearn, postgreSQL, tailwind, jwt],
    project_details: project_details_10,
    code_source: "https://github.com/Hamidlyamani/roomly",
  },
  {
    id: 11,
    title: "Dropleather",
    image_p: project_13,
    demo: false,
    type: { fr: "Front-End & Framer", en: "Front-End & Framer" },
    problem: {
      fr: "Dropleather, plateforme de dropshipping de maroquinerie sur mesure, avait besoin d'une présence en ligne à la hauteur de ses produits premium.",
      en: "Dropleather, a custom leather goods dropshipping platform, needed an online presence worthy of its premium products.",
    },
    solution: {
      fr: "J'ai conçu et développé tout le front-end : le site marketing sous Framer et l'interface React de l'application — inscription, connexion des boutiques et personnalisation des produits.",
      en: "I designed and built the entire front-end: the marketing site in Framer and the React interface of the app — signup, store connections and product customization.",
    },
    result: {
      fr: "Une plateforme en production au service de plus de 200 marques dans le monde.",
      en: "A production platform serving 200+ brands worldwide.",
    },
    items: [
      { fr: "Site marketing complet réalisé sous Framer", en: "Complete marketing site built in Framer" },
      { fr: "Interface React de l'application (boutiques, produits, commandes)", en: "React app interface (stores, products, orders)" },
      { fr: "Parcours de connexion des boutiques : Shopify, WooCommerce, Etsy", en: "Store connection flows: Shopify, WooCommerce, Etsy" },
    ],
    imageName: [react, html, css, js],
    project_details: project_details_13,
    link: "https://dropleather.com",
  },
  {
    id: 2,
    title: "Pixo",
    image_p: project_11,
    demo: false,
    type: { fr: "Application Temps Réel", en: "Real-Time Application" },
    problem: {
      fr: "Collaborer sur un dessin à distance exige une synchronisation instantanée et fiable entre tous les participants.",
      en: "Collaborating on a drawing remotely requires instant, reliable synchronization between all participants.",
    },
    solution: {
      fr: "Canvas partagé en temps réel basé sur une architecture WebSocket scalable : salles partagées, gestion des rôles, synchronisation précise de chaque action.",
      en: "Real-time shared canvas built on a scalable WebSocket architecture: shared rooms, role management, precise synchronization of every action.",
    },
    result: {
      fr: "Plusieurs utilisateurs dessinent ensemble, de n'importe où, sans latence perceptible. Essayez la démo en ligne.",
      en: "Multiple users draw together from anywhere with no perceptible latency. Try the live demo.",
    },
    items: [
      { fr: "Dessin collaboratif multi-utilisateurs en temps réel", en: "Real-time multi-user collaborative drawing" },
      { fr: "Synchronisation instantanée de toutes les actions", en: "Instant synchronization of all actions" },
      { fr: "Export et partage des créations", en: "Export and sharing of artwork" },
    ],
    imageName: [nextjs, socketio, tailwind, konva],
    project_details: project_details_11,
    code_source: "https://github.com/Hamidlyamani/pixo",
    link: "https://pixospace.onrender.com",
  },
  {
    id: 3,
    title: "TAMAIOZ",
    image_p: project_1,
    demo: false,
    type: { fr: "Plateforme Web & Design", en: "Web Platform & Design" },
    problem: {
      fr: "Mettre en relation élèves et professeurs qualifiés pour des cours particuliers, avec réservation, communication et suivi.",
      en: "Connecting students with qualified teachers for private lessons, with booking, communication and follow-up.",
    },
    solution: {
      fr: "Plateforme complète : réservation de cours, messagerie intégrée, salles de réunion virtuelles, tableaux de bord personnalisés et administration centrale.",
      en: "Complete platform: lesson booking, built-in messaging, virtual meeting rooms, personalized dashboards and central administration.",
    },
    result: {
      fr: "Un parcours complet, de la recherche du professeur au cours en ligne, géré depuis une seule interface.",
      en: "A complete journey, from finding a teacher to the online lesson, managed from a single interface.",
    },
    items: [
      { fr: "Système de réservation de cours particuliers", en: "Private lesson booking system" },
      { fr: "Messagerie et salles virtuelles intégrées", en: "Built-in messaging and virtual rooms" },
      { fr: "Dashboards élèves, professeurs et admin", en: "Student, teacher and admin dashboards" },
    ],
    imageName: [react, axios, php, mysql, html, css, js],
    project_details: project_details_1,
    code_source: "https://github.com/Hamidlyamani/Tamaioz",
  },
  {
    id: 4,
    title: "OLINO",
    image_p: project_2,
    demo: false,
    type: { fr: "E-commerce", en: "E-commerce" },
    problem: {
      fr: "Une marque de vêtements traditionnels marocains sans canal de vente en ligne.",
      en: "A Moroccan traditional clothing brand without an online sales channel.",
    },
    solution: {
      fr: "Boutique e-commerce complète : catalogue produits, panier, gestion des commandes et tableau de bord d'administration.",
      en: "Complete e-commerce store: product catalog, cart, order management and admin dashboard.",
    },
    result: {
      fr: "Une boutique autonome, gérable sans aucune compétence technique.",
      en: "A self-sufficient store, manageable without any technical skills.",
    },
    items: [
      { fr: "Catalogue, panier et commandes en ligne", en: "Catalog, cart and online orders" },
      { fr: "Comptes clients et espace personnel", en: "Customer accounts and personal space" },
      { fr: "Dashboard admin : produits, utilisateurs, commandes", en: "Admin dashboard: products, users, orders" },
    ],
    imageName: [laravel, mysql, html, css, js],
    project_details: project_details_2,
    code_source: "https://github.com/Hamidlyamani/olino",
  },
  {
    id: 5,
    title: "Ebooksy",
    image_p: project_9,
    demo: false,
    type: { fr: "Plateforme Web & IA", en: "Web Platform & AI" },
    problem: {
      fr: "Aider les lecteurs à trouver leur prochain livre parmi des centaines d'e-books gratuits.",
      en: "Helping readers find their next book among hundreds of free e-books.",
    },
    solution: {
      fr: "Bibliothèque en ligne de plus de 400 livres avec recommandations personnalisées via l'API OpenAI et import automatique depuis Google Books.",
      en: "Online library of 400+ books with personalized recommendations via the OpenAI API and automatic import from Google Books.",
    },
    result: {
      fr: "Un site en production, monétisé par la publicité. Visitez-le en ligne.",
      en: "A production site, monetized through ads. Visit it online.",
    },
    items: [
      { fr: "400+ livres à découvrir et télécharger", en: "400+ books to discover and download" },
      { fr: "Recommandations IA personnalisées", en: "Personalized AI recommendations" },
      { fr: "Import en un clic depuis Google Books", en: "One-click import from Google Books" },
    ],
    imageName: [wordpress, OpenAI, html, css, js],
    project_details: project_details_9,
    link: "https://ebooksy.site",
  },
  {
    id: 6,
    title: "ElyaX",
    image_p: project_7,
    demo: true,
    type: { fr: "Dashboard Web", en: "Web Dashboard" },
    problem: {
      fr: "Suivre le marché crypto exige des données en temps réel, lisibles d'un coup d'œil.",
      en: "Tracking the crypto market requires real-time data, readable at a glance.",
    },
    solution: {
      fr: "Dashboard React avec graphiques interactifs et suivi de plus de 30 cryptomonnaies via l'API CoinGecko, mode sombre inclus.",
      en: "React dashboard with interactive charts and tracking of 30+ cryptocurrencies via the CoinGecko API, dark mode included.",
    },
    result: {
      fr: "Un dashboard rapide et fluide, consultable en ligne.",
      en: "A fast, smooth dashboard, available online.",
    },
    items: [
      { fr: "Graphiques interactifs de données historiques", en: "Interactive historical data charts" },
      { fr: "Suivi de 30+ cryptomonnaies en temps réel", en: "Real-time tracking of 30+ cryptocurrencies" },
      { fr: "Mode sombre / clair", en: "Dark / light mode" },
    ],
    imageName: [react, typescript, shadcn, tailwind, html],
    project_details: project_details_7,
    code_source: "https://github.com/Hamidlyamani/ElyaX_Crypto",
    link: "https://elya-x.onrender.com",
  },
  {
    id: 7,
    title: "Formly - LMS Dashboard",
    image_p: project_8,
    demo: true,
    type: { fr: "Dashboard Web", en: "Web Dashboard" },
    problem: {
      fr: "Les écoles ont besoin d'une vue d'ensemble claire : cours, progression, communication et événements.",
      en: "Schools need a clear overview: courses, progress, communication and events.",
    },
    solution: {
      fr: "Dashboard LMS avec graphiques interactifs, messagerie, calendrier d'événements et authentification, en React + TypeScript.",
      en: "LMS dashboard with interactive charts, chat, event calendar and authentication, built with React + TypeScript.",
    },
    result: {
      fr: "Une interface moderne et responsive, consultable en ligne.",
      en: "A modern, responsive interface, available online.",
    },
    items: [
      { fr: "Vue d'ensemble des cours et progressions", en: "Course and progress overview" },
      { fr: "Graphiques interactifs multi-données", en: "Interactive multi-data charts" },
      { fr: "Messagerie et calendrier intégrés", en: "Built-in chat and calendar" },
    ],
    imageName: [react, typescript, shadcn, tailwind, html, css],
    project_details: project_details_8,
    link: "https://hamidlyamani.github.io/Dashbord-e-learning/",
    code_source: "https://github.com/Hamidlyamani/Dashbord-e-learning/",
  },
  {
    id: 8,
    title: "One Task at a Time",
    image_p: project_4,
    demo: true,
    type: { fr: "Landing Page", en: "Landing Page" },
    problem: {
      fr: "Une landing page doit convaincre en quelques secondes, sur tous les écrans.",
      en: "A landing page must convince in seconds, on every screen.",
    },
    solution: {
      fr: "Page produit avec animations fluides inspirées d'iOS, design accessible et formulaire de newsletter élégant, construite avec Tailwind CSS.",
      en: "Product page with smooth iOS-inspired animations, accessible design and an elegant newsletter form, built with Tailwind CSS.",
    },
    result: {
      fr: "Une expérience impeccable sur tous les appareils, consultable en ligne.",
      en: "A flawless experience on every device, available online.",
    },
    items: [
      { fr: "Animations fluides inspirées d'iOS", en: "Smooth iOS-inspired animations" },
      { fr: "Design accessible et responsive", en: "Accessible, responsive design" },
      { fr: "Formulaire newsletter fonctionnel", en: "Functional newsletter form" },
    ],
    imageName: [tailwind, css, js],
    project_details: project_details_4,
    link: "https://saas-lp.onrender.com/",
    code_source: "https://github.com/Hamidlyamani/saas-lp",
  },
  {
    id: 9,
    title: "CBM Menuiserie",
    image_p: project_5,
    demo: true,
    type: { fr: "Site WordPress", en: "WordPress Site" },
    problem: {
      fr: "Un artisan menuisier a besoin d'un site vitrine avec demandes de devis, gérable sans développeur.",
      en: "A joinery craftsman needs a showcase site with quote requests, manageable without a developer.",
    },
    solution: {
      fr: "Thème WordPress sur mesure avec ACF pour la gestion de contenu flexible, WooCommerce pour les produits et formulaires de devis intégrés.",
      en: "Custom WordPress theme with ACF for flexible content management, WooCommerce for products and built-in quote forms.",
    },
    result: {
      fr: "Un site entièrement administrable depuis WordPress, consultable en ligne.",
      en: "A site fully manageable from WordPress, available online.",
    },
    items: [
      { fr: "Gestion produits via WooCommerce", en: "Product management via WooCommerce" },
      { fr: "Formulaire de demande de devis sur mesure", en: "Custom quote request form" },
      { fr: "Contenu flexible avec champs ACF", en: "Flexible content with ACF fields" },
    ],
    imageName: [wordpress, acf, woo, html, css, js],
    project_details: project_details_5,
    link: "https://cbm.serveurprod.com/",
  },
  {
    id: 10,
    title: { fr: "Ce Portfolio", en: "This Portfolio" },
    image_p: project_6,
    demo: false,
    type: { fr: "Développement Web & Design", en: "Web Development & Design" },
    problem: {
      fr: "Présenter mon travail avec un site aussi soigné que les projets qu'il présente.",
      en: "Presenting my work with a site as polished as the projects it showcases.",
    },
    solution: {
      fr: "Site React (Vite) avec animations GSAP sur mesure, formulaire de contact et liens directs vers le code source de chaque projet.",
      en: "React (Vite) site with custom GSAP animations, contact form and direct links to each project's source code.",
    },
    result: {
      fr: "Le site que vous êtes en train de visiter — code public sur GitHub.",
      en: "The site you're visiting right now — public code on GitHub.",
    },
    items: [
      { fr: "Animations GSAP interactives", en: "Interactive GSAP animations" },
      { fr: "Bilingue FR/EN", en: "Bilingual FR/EN" },
      { fr: "Code source public", en: "Public source code" },
    ],
    imageName: [react, GSAP, html, css, js],
    project_details: project_details_6,
    code_source: "https://github.com/Hamidlyamani/portfolio",
  },
];

const FEATURED_COUNT = 6;

export default function Progects() {
  const { lang } = useLang();
  const title = useRef(null);
  const projectRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);

  // Expanding/collapsing projects shifts everything below (incl. the timeline)
  // — re-measure all ScrollTrigger positions after the DOM updates.
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => clearTimeout(t);
  }, [showAll]);

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
    cardContents.slice(0, FEATURED_COUNT).forEach((card, index) => {
      const projectRef = projectRefs.current[index];
      if (projectRef) {
        gsap.from(projectRef, {
          bottom: "-100px",
          scale: 0.4,
          opacity: 0.3,
          stagger: { amount: 0.4 },
          scrollTrigger: {
            trigger: projectRef,
            start: "top 100%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play play pause reverse",
          },
        });
      }
    });
  });

  const [show, setShow] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClose = () => {
    setSelectedContent(null);
    setShow(false);
  };

  const handleClick = (card) => {
    setSelectedContent(card);
    setShow(true);
  };

  const visible = showAll ? cardContents : cardContents.slice(0, FEATURED_COUNT);

  return (
    <section className="Projects" id="portfolio">
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">{t(sectionCopy.soustitle, lang)}</div>
          <h2>{t(sectionCopy.title, lang)}</h2>
        </div>
        <div className="cards-projects">
          <Row xs={1} md={2} className="g-4">
            {visible.map((card, index) => (
              <Col key={card.id} ref={(el) => (projectRefs.current[index] = el)}>
                <Card className="card-project">
                  {card.demo && <span className="demo-badge">{lang === "fr" ? "Démo" : "Demo"}</span>}
                  <Card.Img
                    variant="top"
                    className="image-card"
                    src={card.image_p}
                    alt={t(card.title, lang)}
                  />
                  <Card.Body>
                    <div className="container-card">
                      <Card.Title> {t(card.title, lang)}</Card.Title>
                      <Card.Text>{t(card.type, lang)}</Card.Text>
                    </div>
                    <Button onClick={() => handleClick(card)}>
                      {t(sectionCopy.discover, lang)}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="projects-toggle">
            <button className="cta btn-border" onClick={() => setShowAll(!showAll)}>
              {showAll
                ? t(sectionCopy.showLess, lang)
                : `${t(sectionCopy.showAll, lang)} (+${cardContents.length - FEATURED_COUNT})`}
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Project content={selectedContent} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </section>
  );
}
