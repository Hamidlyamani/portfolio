import { useLayoutEffect, useRef, useState } from "react";
import "./progects.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import project_1 from "../../assets/imgs/img-1.png";
import project_2 from "../../assets/imgs/img-2.png";
import project_3 from "../../assets/imgs/img-3.png";
import project_4 from "../../assets/imgs/img-4.png";
import project_5 from "../../assets/imgs/img-5.png";
import project_6 from "../../assets/imgs/img-6.png";
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
import wordpress from "../../assets/imgs/tech/wordpress.png";
import acf from "../../assets/imgs/tech/acf.png";
import woo from "../../assets/imgs/tech/woo.png";
import project_details_1 from "../../assets/imgs/project_details_1.png";
import project_details_2 from "../../assets/imgs/project_details_2.png";
import project_details_3 from "../../assets/imgs/project_details_3.png";
import project_details_4 from "../../assets/imgs/project_details_4.png";
import project_details_5 from "../../assets/imgs/project_details_5.png";
import project_details_6 from "../../assets/imgs/project_details_6.png";
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
    },
    {
      id: 6,
      title: "OUI TRAVEL",
      type: "Web Development with SEO",
      image_p: project_4,
      Overview:
        "Oui Travel Morocco crafts personalized journeys to uncover Morocco's hidden treasures, blending wanderlust with bespoke experiences. Developed during my tenure at ONCLICK Agency, our platform invites you to explore the vibrant souks of Marrakech and the tranquil rhythms of the Sahara, transcending the ordinary to create unforgettable memories.",
      items: [
        "Excursion and tour reservations",
        "Curated lists of excursions and tours",
        "Gallery showcasing travel experiences",
        "Contact page for inquiries and bookings",
      ],
      imageName: [wordpress, css, ga],
      project_details: project_details_4,
    },
  ];

  useGSAP(
    () => {
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
