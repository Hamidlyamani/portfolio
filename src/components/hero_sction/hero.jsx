import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./hero.css";
import logo from "../../assets/imgs/logo.png";
import pc from "../../assets/imgs/Layer1.png";
import mobile from "../../assets/imgs/mobile.png";
import Nav from "../parts/nav";

const Hero = () => {
  const scaleHeader = () => {
    const scalable = document.querySelectorAll(".scale--js");
    const margin = 10;
    scalable.forEach((item) => {
      const scalableContainer = item.parentNode;
      item.style.transform = "scale(1)";
      const scalableContainerWidth = scalableContainer.offsetWidth - margin;
      const scalableWidth = item.offsetWidth;
      item.style.transform =
        "scale(" + scalableContainerWidth / scalableWidth + ")";
      scalableContainer.style.height =
        item.getBoundingClientRect().height + "px";
    });
  };

  const debounce = (func, wait, immediate) => {
    let timeout;
    return (...args) => {
      const context = this;

      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    const myScaleFunction = debounce(() => {
      scaleHeader();
    }, 250);
    myScaleFunction();

    window.addEventListener("resize", myScaleFunction);

    return () => {
      window.removeEventListener("resize", myScaleFunction);
    };
  }, []);

  const [currentImage, setCurrentImage] = useState(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newImage = width <= 576 ? mobile : pc;
      setCurrentImage(newImage);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      <header>
        <div className="top-nav container">
          <div className="logo-Name">
            <div className="logo">
              <img src={logo} alt="E" />
            </div>
            <p className="name">
              ELYAMANI <br />
              hamid
            </p>
          </div>
          <div className="cta">Let's talk</div>
        </div>
        <div className="container_text_img container">
          <div className="background">
            <div className="web scale--js">web</div>
          </div>
          <div className="content">
            <div className="image-hero-src">
              <img
                src={currentImage}
                sizes="(max-width: 600px) 100%, 25%"
                alt=""
              />
            </div>
            <div className="developer">
              <div className="developer-text scale--js">
                <span className="de">DE</span>
                VELOPER
              </div>
            </div>
          </div>
        </div>
        <div className="scoll">
          <a href="#about">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Hero;
