import React, { useLayoutEffect, useRef } from "react";
import "./Technologies.css";
import html from "../../assets/imgs/tech/html.png";
import css from "../../assets/imgs/tech/css3.png";
import js from "../../assets/imgs/tech/js.png";
import react from "../../assets/imgs/tech/react.png";
import laravel from "../../assets/imgs/tech/laravel.png";
import bootstrap from "../../assets/imgs/tech/bootstrap.png";
import jquery from "../../assets/imgs/tech/jquery.png";
import php from "../../assets/imgs/tech/php.png";
import mysql from "../../assets/imgs/tech/mysql.png";
import git from "../../assets/imgs/tech/git.png";
import npm from "../../assets/imgs/tech/npm.png";
import figma from "../../assets/imgs/tech/figma.png";
import xd from "../../assets/imgs/tech/xd.png";
import ga from "../../assets/imgs/tech/g-a.png";
import wordpress from "../../assets/imgs/tech/wordpress.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const title = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(title.current, {
        scale: 0.3,
        opacity: 0.3,
        duration: 1.5,
        scrollTrigger: {
          trigger: title.current,
          scroller: ".smooth-wrapper",
          start: "center 100%",
          end: "center 60%",
          toggleActions: "play play pause reverse",
          scrub: false,
        },
      });
      gsap.fromTo(
        sliderRef2.current,
        {
          x: "-100%",
        },
        {
          x: "0%",
          scrollTrigger: {
            trigger: sliderRef2.current,
            scroller: ".smooth-wrapper",
            start: "top 100%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        sliderRef3.current,
        {
          x: "50%",
        },
        {
          x: "-45%",
          scrollTrigger: {
            trigger: sliderRef3.current,
            scroller: ".smooth-wrapper",
            start: "top 100%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [title, sliderRef2, sliderRef3]);
  return (
    <section className="Technologies">
      <div className="container">
        <div className="title-part" ref={title}>
          <div className="soustitle">
            But behind every digital masterpiece lies a toolbox of powerful
            technologies.
          </div>
          <h2>Utilized Technologies Overview.</h2>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider" ref={sliderRef2}>
          <div className="box-tech">
            <div className="img-tech">
              <img src={html} alt="" />
            </div>
            <div className="name-tech">HTML 5</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={css} alt="" />
            </div>
            <div className="name-tech">CSS 3</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={bootstrap} alt="" />
            </div>
            <div className="name-tech">bootstrap</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={js} alt="" />
            </div>
            <div className="name-tech">Javasript</div>
          </div>

          <div className="box-tech">
            <div className="img-tech">
              <img src={php} alt="" />
            </div>
            <div className="name-tech">php</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={laravel} alt="" />
            </div>
            <div className="name-tech">laravel</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={react} alt="" />
            </div>
            <div className="name-tech">REACT</div>
          </div>
        </div>
        <div className="slider slider-2" ref={sliderRef3}>
          <div className="box-tech">
            <div className="img-tech">
              <img src={wordpress} alt="" />
            </div>
            <div className="name-tech">Wordpress</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={jquery} alt="" />
            </div>
            <div className="name-tech">jquery</div>
          </div>

          <div className="box-tech">
            <div className="img-tech">
              <img src={mysql} alt="" />
            </div>
            <div className="name-tech">mysql</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={git} alt="" />
            </div>
            <div className="name-tech">git/github</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={npm} alt="" />
            </div>
            <div className="name-tech">npm</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={figma} alt="" />
            </div>
            <div className="name-tech">figma</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={xd} alt="" />
            </div>
            <div className="name-tech">Adobe xd</div>
          </div>
          <div className="box-tech">
            <div className="img-tech">
              <img src={ga} alt="" />
            </div>
            <div className="name-tech">Google Analytics</div>
          </div>
        </div>
      </div>
    </section>
  );
}
