import React, { useState, useEffect, useCallback } from "react";
import "./hero.css";
import logo from "../../assets/imgs/logo.png";
import pc from "../../assets/imgs/g1.png";
import mobile from "../../assets/imgs/mobile.png";
import Nav from "../parts/nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ locoScroll }) => {
  const handleClick = useCallback(
    // (e) => {
    //   e.preventDefault();
    //   const targetScroll = e.currentTarget.getAttribute("data-scroll");
    //   if (locoScroll.current && targetScroll) {
    //     locoScroll.current.update();
    //     locoScroll.current.scrollTo(targetScroll);
    //     console.log(locoScroll.current);
    //   }
    // },
    // [locoScroll]
  );
  const scaleHeader = () => {
    const scalable = document.querySelectorAll(".scale--js");
    const margin = 0;
    scalable.forEach((item) => {
      const scalableContainer = item.parentNode;
      item.style.transform = "scale(1)";

      const scalableContainerWidth = scalableContainer.offsetWidth - margin;
      const scalableWidth = item.offsetWidth;

      // Scale the item based on container width
      item.style.transform =
        "scale(" + scalableContainerWidth / scalableWidth + ")";

      // Update the container width based on the scaled width of the item
      scalableContainer.style.width = item.getBoundingClientRect().width + "px";
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

  

  return (
    <>
      <header>
        <div className="blob1"></div>
        <div className="blob2"></div>
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
          <div className="cta" data-scroll="#contact" onClick={handleClick}>
            My Resume
          </div>
        </div>
        <div className="container_text_img container">
          <div className="content">
            <div className="image-hero-src">
              <img src={pc} alt="" />
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
