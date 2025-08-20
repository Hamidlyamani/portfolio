import React, { StrictMode, useEffect, useRef, useState } from "react";
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
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true); // Show content after 2 seconds
    }, 1400);

    const handlePageLoad = () => {
      setIsContentLoaded(true); // Content is fully loaded
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearTimeout(timer); // Clear timer if component unmounts
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  // Display content only if both loading animation and page load are complete
  const shouldShowContent = isLoaded && isContentLoaded;

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
      {shouldShowContent && (
        <div>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Technologies />
          <Contact />
          <Mouse x={x} y={y} />
          <Nav />
        </div>
      )}
    </div>
  );
}
