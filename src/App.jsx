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

  useEffect(() => {
    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    // Set ScrollTrigger to use LocomotiveScroll’s scrolling position
    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScrollRef.current.scrollTo(value, {
              duration: 0,
              disableLerp: true,
            })
          : locoScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // Define the type of pinning ScrollTrigger should use (transform or fixed)
      pinType: scrollContainerRef.current.style.transform
        ? "transform"
        : "fixed",
    });

    // Refresh ScrollTrigger and sync with LocomotiveScroll
    ScrollTrigger.addEventListener("refresh", () =>
      locoScrollRef.current.update()
    );
    ScrollTrigger.defaults({ scroller: scrollContainerRef.current });

    // Trigger an initial refresh to sync everything
    ScrollTrigger.refresh();
  }, [scrollContainerRef]);
  return (
    <div className={`app-container ${isLoaded ? "loaded" : ""}`}>
      <Loader />
      <div
        className="smooth-wrapper"
        id="scroll-container"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <Hero locoScroll={locoScrollRef} />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </div>
      <div className="fixed-element" ref={fixedElementRef}>
        <Mouse x={x} y={y} />
        <Nav locoScroll={locoScrollRef} />
      </div>
    </div>
  );
}
