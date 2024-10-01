import "./about.css";
import React, { useLayoutEffect, useRef } from "react";
import Charte from "./../charte/charte";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);
  const el2 = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { x: -1000, opacity: 0, skewX: 65 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1.5,
          scrollTrigger: {
            scroller: ".smooth-wrapper",
            trigger: el.current,
            start: "0% 90%",
            end: "0% 50%",
            toggleActions: "play play pause reverse",
            // scrub: false,
            lazy: false,
            // markers: true, // Remove in production
          },
        }
      );

      gsap.fromTo(
        el2.current,
        { x: 1000, opacity: 0, skewX: -65 },
        {
          x: 0,
          opacity: 1,
          skewX: 0,
          duration: 1.5,
          scrollTrigger: {
            scroller: ".smooth-wrapper",
            trigger: el2.current,
            start: "0% 90%",
            end: "0% 50%",
            // lazy: false,
            toggleActions: "play play pause reverse",
            scrub: false,
            // markers: true, // Remove in production
          },
        }
      );
    });
    return () => ctx.revert();
  }, [el, el2]);

  
  return (
    <>
      <section className="about" id="about">
        <div class="blob3"></div>
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
