import React, { useEffect, useState } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Hero from "./components/hero_sction/hero";
import About from "./components/about/about";
import Services from "./components/services/services";
import Projects from "./components/projects/progects";
import Technologies from "./components/Technologies/Technologies";
import Charte from "./components/charte/charte";
import Offer from "./components/offer/offer";
import Process from "./components/process/process";
import Contact from "./components/contact/contact";
import Mouse from "./components/parts/mouse";
import Nav from "./components/parts/nav";
import Controls from "./components/parts/controls";
import WhatsappButton from "./components/parts/whatsapp";
import Loader from "./components/loader/loader";
import CharteTimeline from "./components/timeline/timeline";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const handlePageLoad = () => {
      setIsContentLoaded(true);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const shouldShowContent = isLoaded && isContentLoaded;

  // Content mounts AFTER the window "load" event, so ScrollTrigger's automatic
  // position refresh has already happened. Late-loading images then shift the
  // layout and every trigger fires too early. Re-measure once things settle.
  useEffect(() => {
    if (!shouldShowContent) return;
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 800);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shouldShowContent]);

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
          <Offer />
          <Technologies />
          {/* <Charte /> */}
        <CharteTimeline />
          <Process />
          <Contact />
          
          <Mouse x={x} y={y} />
          <Nav />
          <Controls />
          <WhatsappButton />
        </div>
      )}
    </div>
  );
}
