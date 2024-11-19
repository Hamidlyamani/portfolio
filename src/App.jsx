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
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);



  console.log("isLoaded updated to false2");
  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    if (document.readyState === "complete") {
      // If the page is already loaded
      handlePageLoad();
    } else {
      // Add event listener for load event
      window.addEventListener("load", handlePageLoad);
    }

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
    <div className={`app-container ${isLoaded ? "loaded" : "not_loaded"}`}>
      <Loader />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technologies />
      <Contact />
      <Mouse x={x} y={y} />
      <Nav />
    </div>
  );
}
