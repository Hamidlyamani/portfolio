import "./about.css";
import React, {  useRef } from "react";
import Charte from "./../charte/charte";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);
  const el2 = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      { x: "-50vw", opacity: 0, skewX: 65 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: el.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      }
    );

    ScrollTrigger.matchMedia({
      // Desktop animations
      "(min-width: 768px)": () => {
        gsap.fromTo(
          el2.current,
          { x: "50vw", opacity: 0, skewX: -65 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            duration: 0.9,
            scrollTrigger: {
              trigger: el.current,
              start: "0% 100%",
              toggleActions: "play play pause reverse",
            },
          }
        );
      },

      // Mobile animations
      "(max-width: 767px)": () => {
        gsap.fromTo(
          el2.current,
          { x: "-50vw", opacity: 0, skewX: 65 },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            duration: 1,
            data: 0.5,
            scrollTrigger: {
              trigger: el.current,
              start: "0% 100%",
              toggleActions: "play play pause reverse",
              lazy: false,
            },
          }
        );
      },
    });
  });

  return (
    <>
      <section className="about" id="about">
        <div className="blob3"></div>
        <div className="container">
          <div className="row about-text">
            <div className="col left" ref={el}>
              <h3>
                Hi. I’m Hamid, nice to meet you. Please take a look around!
              </h3>
            </div>
            <div className="col right" ref={el2}>
              <p>
                As a frontend developer and freelance web artisan, I thrive on
                crafting visually captivating interfaces and optimizing for SEO.
                Hailing from Marrakech, I bring a unique cultural perspective to
                my work. Let's collaborate to bring your digital aspirations to
                life. Whether you're an ambitious entrepreneur or a fellow
                developer, I'm dedicated to creating solutions tailored to your
                needs. Let's connect and explore endless possibilities together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Charte />
    </>
  );
};
export default About;
