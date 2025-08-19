import { useRef, useState } from "react";
import "./progects.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import project_1 from "../../assets/imgs/img-1.webp";
import project_2 from "../../assets/imgs/img-2.webp";
import project_3 from "../../assets/imgs/img-3.webp";
import project_4 from "../../assets/imgs/img-4.png";
import project_5 from "../../assets/imgs/img-5.webp";
import project_6 from "../../assets/imgs/img-6.webp";
import project_7 from "../../assets/imgs/img-7.png";
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
import bootstrap from "../../assets/imgs/tech/bootstrap.png";
import ga from "../../assets/imgs/tech/g-a.png";
import typescript from "../../assets/imgs/tech/typescript.png";
import shadcn from "../../assets/imgs/tech/shadcn.png";
import wordpress from "../../assets/imgs/tech/wordpress.png";
import acf from "../../assets/imgs/tech/acf.png";
import woo from "../../assets/imgs/tech/woo.png";
import tailwind from "../../assets/imgs/tech/tailwind.svg";
import project_details_1 from "../../assets/imgs/project_details_1.webp";
import project_details_2 from "../../assets/imgs/project_details_2.webp";
import project_details_3 from "../../assets/imgs/project_details_3.webp";
import project_details_4 from "../../assets/imgs/project_details_4.png";
import project_details_5 from "../../assets/imgs/project_details_5.webp";
import project_details_6 from "../../assets/imgs/project_details_6.webp";
import project_details_7 from "../../assets/imgs/project_details_7.png";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function Progects() {
  const title = useRef(null);
  const projectRefs = useRef([]);

  const cardContents = [
    {
      id: 1,
      title: "TAMAIOZ",
      image_p: project_1,
      type: "Web Development & Design",
      Overview:
        "TAMAIOZ is a revolutionary platform designed to provide personalized learning experiences. It offers users the opportunity to connect with qualified teachers in various subjects for private lessons tailored to their individual needs. With features like teacher navigation, reservation capabilities, and personalized dashboards, TAMAIOZ aims to redefine the way people learn by facilitating direct interaction between students and teachers. ",
      items: [
        "Seamless reservation system for scheduling private lessons",
        "Personalized dashboards for users and teachers",
        "Integrated messaging system for communication",
        "Dedicated virtual meeting rooms for online lessons",
        "Comprehensive admin dashboard for platform management",
      ],
      imageName: [html, css, js, react, axios, php, mysql],
      project_details: project_details_1,
      code_source: "https://github.com/Hamidlyamani/Tamaioz",
    },
    {
      id: 7,
      title: "elyaX",
      image_p: project_7,
      type: "Web Development",
      Overview:
        "ElyaX is a modern crypto dashboard designed to provide fundamental market analysis. It enables users to track real-time price changes, explore interactive charts, and analyze over 30 cryptocurrencies. With an intuitive design and seamless user experience, ElyaX simplifies crypto tracking.<strong>Note:</strong> This is not a real application; it was created as a practice project to apply my knowledge in React and API integration using the free CoinGecko API: https://www.coingecko.com ",
      items: [
        "Interactive Charts: Dynamic charts displaying historical price data.",
        "30+ Cryptocurrencies: View and analyze prices of major cryptocurrencies.",
        "Dark Mode: Toggle between light and dark themes for better accessibility.",
        "Beautiful Design: Clean and modern UI with smooth user experience.",
      ],
      imageName: [react, typescript, shadcn, tailwind, html,],
      project_details: project_details_7,
      code_source: "https://github.com/Hamidlyamani/ElyaX_Crypto",
      link: "https://elya-x.onrender.com"
    },
    {
      id: 2,
      title: "OLINO",
      image_p: project_2,
      type: "Web Development & Design",
      Overview:
        "At Olino, we seamlessly blend tradition and modernity, encapsulating the vibrant spirit of Moroccan culture. Our name, rooted in the Tamazight language, symbolizes our deep bond with Morocco's illustrious heritage. Olino, meaning 'my heart', epitomizes the ardor and commitment we pour into safeguarding Moroccan traditions. Specializing in a magnificent array of women's traditional clothing, we embark on a journey to share the timeless allure of Moroccan fashion worldwide. Each garment in our curated collection is a testament to meticulous craftsmanship, vibrant hues, and the enduring legacy woven through generations of cultural heritage.",
      items: [
        "Browse Products: Discover our curated selection of traditional clothing.",
        "Place Orders: Easily order your favorite products.",
        "Shopping Cart: Manage items in your cart upon login or account creation.",
        "Admin Dashboard: Add, remove, and edit products; manage user accounts; and review orders.",
      ],
      imageName: [laravel, html, css, js],
      project_details: project_details_2,
      code_source: "https://github.com/Hamidlyamani/olino",
    },

    {
      id: 6,
      title: "One Task at a Time",
      type: "Web Development ",
      image_p: project_4,
      Overview:
        "One Task at a Time is a beautifully crafted landing page designed to celebrate the joy of accomplishment. This project showcases an application concept that helps users track progress, stay motivated, and celebrate successes. The landing page emphasizes simplicity and productivity, making it an engaging experience for visitors. <br>This is not a real application—it was created as a practice project to explore and master Tailwind CSS while demonstrating my front-end development skills in my portfolio.",
      items: [
        "Seamless experience across all devices.",
        "Dynamic interface with fluid, iOS-inspired animations.",
        "Clean, accessible, and visually appealing design.",
        "Elegant, functional newsletter form for updates.",
      ],
      imageName: [tailwind, css, ga],
      project_details: project_details_4,
      link: "https://saas-lp.onrender.com/",
      code_source: "https://github.com/Hamidlyamani/saas-lp",
    },

    {
      id: 4,
      title: "My Personal Portfolio",
      image_p: project_6,
      type: "Web Development & Design",
      Overview:
        "I built this portfolio to enhance my React and front-end development skills while showcasing my projects to potential clients and hiring managers. It features smooth GSAP animations and leverages React with Vite for efficient development and performance. This project demonstrates my ability to create dynamic, user-friendly web interfaces.",
      items: [
        "Project Showcase: Highlights key projects with descriptions and links to code repositories.",
        "Contact Form: Enables easy communication for inquiries and freelance opportunities.",
        "Smooth Animations: Interactive animations created using GSAP for a dynamic experience.",
        "Project Code Links: Direct access to code repositories for all featured projects.",
      ],
      imageName: [react, GSAP, html, css, js],
      project_details: project_details_6,
      code_source: "https://github.com/Hamidlyamani/portfolio",
    },
    {
      id: 5,
      title: "OLAM COPANY",
      type: "Web Development with SEO ",
      image_p: project_3,
      Overview:
        "OLAM COMPANY specializes in crafting dream villas and pools in Marrakech, offering turnkey construction services. Developed during my tenure at ONCLICK Agency, our expertise ensures excellence in every project.",
      items: [
        "Contact Form: Easily get in touch with us to inquire about our services, portfolio (Nos Réalisations), and blog (Articles).",
        "Services Page: Explore the range of services we offer, including turnkey villa and pool construction.",
        "Portfolio (Nos Réalisations): Browse through our portfolio to see our completed projects.",
        "Blog (Articles): Stay updated with our latest articles and insights on villa and pool construction.",
      ],
      imageName: [html, css, js, bootstrap, ga],
      project_details: project_details_3,
      link: "https://www.olamcompany.com/",
    },
    {
      id: 3,
      title: "CBM menuiserie",
      image_p: project_5,
      type: "Web Development ",
      Overview:
        "I created this demo to practice my skills in WordPress by integrating custom HTML, building themes, and using ACF for flexible content management. The project showcases CBM Menuiserie, a fictional company specializing in standard and custom wooden joinery. This allowed me to refine my abilities in theme development and WordPress customization.",
      items: [
        "Custom Dashboard with WooCommerce Integration: Manage products (add, update, remove) from the WordPress admin panel.",
        "Project Quote Request Form: Allows users to request quotes for custom joinery projects.",
        "Contact Form: Simple way for visitors to send inquiries directly from the site.",
        "ACF Custom Fields: Streamlines content management for standard and custom projects.",
      ],
      imageName: [wordpress, acf, woo, html, css, js],
      project_details: project_details_5,
      link: "https://cbm.serveurprod.com/",
    },
    {
      id: 8,
      title: "Formly - LMS Dashboard",
      image_p: project_5,
      type: "Web Development ",
      Overview:
        "Formly is a dashboard and login page for an LMS (Learning Management System) solution designed for schools. It provides an overview of courses, interactive charts, and pages for chat, events (calendars), and login functionality. This project was created to practice and apply my skills in React and TypeScript, with a focus on modern design and responsive layouts. <br/>Note: This is a practice project and not a real LMS application.",
      items: [
        "Dashboard Overview: See all courses and their progress at a glance.",
        "Interactive Charts: Visualize multiple types of data, including course tests and student progress.",
        "Chat Page: Communicate within the platform.",
        "Beautiful, Modern Design: Clean, responsive, and user-friendly layout.",
      ],
      imageName: [react, typescript, shadcn, tailwind, html],
      project_details: project_details_5,
      link: "https://hamidlyamani.github.io/Dashbord-e-learning/",
      code_source: "https://github.com/Hamidlyamani/Dashbord-e-learning/",
    },
    {
      id: 9,
      title: "Ebooksy",
      image_p: project_5,
      type: "Web Development ",
      Overview:
        "<p><strong>Ebooksy</strong> is a personal web project that functions as an online library where users can discover and download e-books for free. It also features a smart AI-powered recommendation tool to suggest the next book to read. The platform integrates ads for monetization and utilizes <strong>WordPress</strong> for content management, <strong>OpenAI API</strong> for recommendations and custom book descriptions, and <strong>Google Books API</strong> to fetch book information.</p><p> <strong>Note:</strong> This project was created to practice integrating APIs and developing a functional online library with personalized recommendations.</p>",
      items: [
        "<strong>Discover & Download:</strong> Access and download over 400 books and e-books.",
        "<strong>Smart Recommendations:</strong> AI-powered tool suggests the next book based on your reading preferences.",
        "<strong>Google Books Integration:</strong> Import books with one click and generate custom descriptions.",
        "<strong>User-Friendly Interface:</strong> Simple and intuitive design for browsing and downloading books.",
      ],
      imageName: [react, typescript, shadcn, tailwind, html],
      project_details: project_details_5,
      link: "https://ebooksy.site",
    },
  ];

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
    cardContents.forEach((card, index) => {
      const projectRef = projectRefs.current[index];
      if (projectRef) {
        gsap.from(projectRef, {
          bottom: "-100px",
          scale: 0.4,
          opacity: 0.3,
          stagger: { amount: 0.4 },
          scrollTrigger: {
            trigger: projectRef, // Or choose a different trigger element
            start: "top 100%",
            end: "top 50%",
            scrub: false,
            markers: false, // Remove markers in production
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
  return (
    <section className="Projects" id="portfolio">
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">
            But what good are services without showcasing our digital
            brilliance?
          </div>
          <h2>Explore My Portfolio .</h2>
        </div>
        <div className="cards-projects">
          <Row xs={1} md={2} className="g-4">
            {cardContents.map((card, index) => (
              <Col
                key={card.id}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <Card className="card-project">
                  <Card.Img
                    variant="top"
                    className="image-card"
                    src={card.image_p}
                  />
                  <Card.Body>
                    <div className="container-card">
                      <Card.Title> {card.title}</Card.Title>
                      <Card.Text>{card.type}</Card.Text>
                    </div>
                    <Button onClick={() => handleClick(card)}>
                      Discover more
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
