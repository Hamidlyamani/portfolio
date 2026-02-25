import React, { useLayoutEffect, useRef } from "react";
import "./services.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import service_1 from "../../assets/imgs/programming.png";
import service_2 from "../../assets/imgs/ux.png";
import service_3 from "../../assets/imgs/seo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const service = useRef(null);
  const title = useRef(null);

useGSAP(
    () => {
      gsap.from(title.current, {
    scale:1.1,
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
          <div className="soustitle">
            This journey has been a catalyst for the specialized services I
            offer.
          </div>
          <h2>Bringing You My Specializations.</h2>
        </div>
        <div className="services-boxs ">
          <CardGroup>
            <Card className="service">
              <Card.Img className="img-service" variant="top" src={service_2} alt="Interactive Web Interfaces" />
              <Card.Body>
                <Card.Title>Interactive Web Interfaces</Card.Title>
                <Card.Text>
                  Craft modern, responsive, and visually engaging interfaces designed for performance and seamless user experience. From interactive dashboards to dynamic platforms, deliver smooth and intuitive digital experiences.
                </Card.Text>
                <div className="serial-number">01</div>
              </Card.Body>
            </Card>

            <Card className="service">
              <Card.Img
                className="img-service"
                variant="left"
                src={service_1}
                alt="Scalable Backend Systems"
              />
              <Card.Body>
                <Card.Title>Scalable Backend Systems</Card.Title>
                <Card.Text>
                 Build secure, scalable, and well-structured backend systems that power reliable web applications. Design robust APIs, authentication systems, and business logic tailored for performance and growth.
                </Card.Text>
                <div className="serial-number">02</div>
              </Card.Body>
            </Card>
            
            <Card className="service">
              <Card.Img className="img-service" variant="top" alt="SEO" src={service_3} />
              <Card.Body>
                <Card.Title>Database Engineering</Card.Title>
                <Card.Text>
                  Design and manage optimized relational databases to ensure data integrity, efficiency, and scalability. From schema modeling to performance tuning, create strong foundations for data-driven applications.
                </Card.Text>
                <div className="serial-number">03</div>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </section>
  );
}
