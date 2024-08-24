import React, {
  StrictMode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
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

export default function App() {
  const scrollContainerRef = useRef(null);
  const fixedElementRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

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
    const locoScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: scrollContainerRef.current.style.transform
        ? "transform"
        : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: scrollContainerRef.current });
    // --- SETUP END ---
  }, []);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(fixedElementRef.current, {
  //       scrollTrigger: {
  //         trigger: fixedElementRef.current,
  //         start: "top top", // when the top of the trigger hits the top of the viewport
  //         end: "100%",
  //         scroller: ".smooth-wrapper",
  //         pin: true, // pin the element
  //         pinSpacing: false, // removes extra space that might be added
  //       },
  //     });
  //   });
  //   return () => ctx.revert();
  // }, [fixedElementRef]);
  return (
    <StrictMode>
      <div
        className="smooth-wrapper"
        id="scroll-container"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Technologies />
        <Contact />
      </div>
      <div className="fixed-element" ref={fixedElementRef}>
        <Mouse x={x} y={y} />
      </div>
    </StrictMode>
  );
}
