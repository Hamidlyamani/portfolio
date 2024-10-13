import React, { StrictMode, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./App.css";
import Hero from "./components/hero_sction/hero";
import About from "./components/about/about";
import Services from "./components/services/services";
import Projects from "./components/projects/progects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/contact/contact";
import Mouse from "./components/parts/mouse";
import Nav from "./components/parts/nav";
import Loader from "./components/loader/loader";

export default function App() {
  const scrollContainerRef = useRef(null);
  const fixedElementRef = useRef(null);
  const locoScrollRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      // Wait for an additional 2 seconds before setting isLoaded to true
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000); // 2000 milliseconds = 2 seconds
    };

    // When the page has fully loaded
    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const handleMouseMovement = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMovement);
    return () => {
      document.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return (
    <div className={`app-container ${isLoaded ? "loaded" : ""}`}>
      <Loader />
      <div
        className="smooth-wrapper"
        id="scroll-container"
        ref={scrollContainerRef}
      >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </div>

      <Mouse x={x} y={y} />
      <Nav />
    </div>
  );
}
