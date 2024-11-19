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
import axios from "../../assets/imgs/tech/axios.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const title = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  useGSAP(
    () => {
      gsap.from(title.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.7,
        scrollTrigger: {
          trigger: title.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      });


    });

  return (
    <section className="Technologies" id="skills">
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
        <div className="slider  slider-1">
          <div
            className="box-tech item1">
            <div className="img-tech">
              <img src={html} alt="html" />
            </div>
            <div className="name-tech">HTML 5</div>
          </div>
          <div
            className="box-tech item2">
            <div className="img-tech">
              <img src={css} alt="css" />
            </div>
            <div className="name-tech">CSS 3</div>
          </div>
          <div className="box-tech item3">
            <div className="img-tech">
              <img src={bootstrap} alt="bootstrap" />
            </div>
            <div className="name-tech">bootstrap</div>
          </div>
          <div className="box-tech item4">
            <div className="img-tech">
              <img src={js} alt="js" />
            </div>
            <div className="name-tech">Javasript</div>
          </div>

          <div className="box-tech item5">
            <div className="img-tech">
              <img src={php} alt="php" />
            </div>
            <div className="name-tech">php</div>
          </div>
          <div className="box-tech item6">
            <div className="img-tech">
              <img src={laravel} alt="laravel" />
            </div>
            <div className="name-tech">laravel</div>
          </div>
          <div className="box-tech item7">
            <div className="img-tech">
              <img src={react} alt="react" />
            </div>
            <div className="name-tech">REACT</div>
          </div>
          <div className="box-tech item8">
            <div className="img-tech">
              <img src={axios} alt="axios" />
            </div>
            <div className="name-tech">Axios</div>
          </div>
        </div>
        <div className="slider slider-2">
          <div className="box-tech item1">
            <div className="img-tech">
              <img src={wordpress} alt="wordpress" />
            </div>
            <div className="name-tech">Wordpress</div>
          </div>
          <div className="box-tech  item2">
            <div className="img-tech">
              <img src={jquery} alt="jquery" />
            </div>
            <div className="name-tech">jquery</div>
          </div>

          <div className="box-tech  item3">
            <div className="img-tech">
              <img src={mysql} alt="mysql" />
            </div>
            <div className="name-tech">mysql</div>
          </div>
          <div className="box-tech  item4">
            <div className="img-tech">
              <img src={git} alt="git" />
            </div>
            <div className="name-tech">git/github</div>
          </div>
          <div className="box-tech  item5">
            <div className="img-tech">
              <img src={npm} alt="npm" />
            </div>
            <div className="name-tech">npm</div>
          </div>
          <div className="box-tech  item6">
            <div className="img-tech">
              <img src={figma} alt="figma" />
            </div>
            <div className="name-tech">figma</div>
          </div>
          <div className="box-tech  item7">
            <div className="img-tech">
              <img src={xd} alt="xd" />
            </div>
            <div className="name-tech">Adobe xd</div>
          </div>
          <div className="box-tech  item8">
            <div className="img-tech">
              <img src={ga} alt="ga" />
            </div>
            <div className="name-tech">Google Analytics</div>
          </div>
        </div>
      </div>
    </section>
  );
}
