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
  const sircle = useRef(null);
  const service = useRef(null);
  const title = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
     

      gsap.from(title.current, {
        scale: 0.3,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: title.current,
          scroller:'.smooth-wrapper',
          start: "center 100%",
          end: "center 60%",
          toggleActions: "play play pause reverse",
          scrub: false,
        },
      });

      gsap.from(".service", {
        bottom: "-100px",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".service",
          start: "top 90%",
          scroller:'.smooth-wrapper',
          end: "top 50%",
          scrub: false,
          toggleActions: "play play pause reverse",
        },
      });
    });
    return () => ctx.revert();
  }, [service, title]);

  return (
    <section className="services" id="service" ref={service}>
      {/* <div className="container-sircle">
        <div className="sircleScale" ref={sircle}></div>
      </div> */}
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
              <Card.Img
                className="img-service"
                variant="left"
                src={service_1}
              />
              <Card.Body>
                <Card.Title>WEB DEVELOPMENT</Card.Title>
                <Card.Text>
                  Experience expert web development for functional, responsive
                  websites tailored to your needs. From static to dynamic
                  platforms, ensure seamless performance across devices. Let's
                  elevate your online presence together.
                </Card.Text>
                <div className="serial-number">01</div>
              </Card.Body>
            </Card>
            <Card className="service">
              <Card.Img className="img-service" variant="top" src={service_2} />
              <Card.Body>
                <Card.Title>WEB DESIGN</Card.Title>
                <Card.Text>
                  Elevate your online presence with bespoke web design.
                  Specializing in sleek layouts and engaging interfaces tailored
                  to your brand, I ensure seamless navigation and drive
                  engagement. Let me bring your vision to life.
                </Card.Text>
                <div className="serial-number">02</div>
              </Card.Body>
            </Card>
            <Card className="service">
              <Card.Img className="img-service" variant="top" src={service_3} />
              <Card.Body>
                <Card.Title>SEO</Card.Title>
                <Card.Text>
                  Maximize online visibility with comprehensive SEO strategies.
                  Rank higher on search engines, attract qualified leads, ensure
                  sustainable growth.
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
