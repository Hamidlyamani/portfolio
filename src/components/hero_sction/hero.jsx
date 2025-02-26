import React, {useEffect } from "react";
import "./hero.css";
import logo from "../../assets/imgs/logo.png";
import pc2 from "../../assets/imgs/g1.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {

  return (
    <>
      <header>
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="top-nav container">
          <div className="logo-Name">
            <div className="logo">
              <img src={logo} alt="Elyamani hamid logo" />
            </div>
            <h1 className="name">
              ELYAMANI <br />
              hamid
            </h1>
          </div>
          <a href="elyamani_hamid.pdf" className="cta btn-border" data-scroll="#contact">
            My Resume
          </a>
        </div>
        <div className="container_text_img container">
          <div className="content">
            <div className="image-hero-src">
              <img src={pc2} alt="ELYAMANI HAMID IMAGE" />
            </div>
            <div className="web ">web</div>
            <div className="web  outline">web</div>
            <div className="developer-text ">
              <span className="de">DE</span>
              VELOPER
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
