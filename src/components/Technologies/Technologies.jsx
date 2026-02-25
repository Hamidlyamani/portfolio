import React, { useRef } from "react";
import "./Technologies.css";



import html from "../../assets/imgs/tech/html.png";
import css from "../../assets/imgs/tech/css3.png";
import js from "../../assets/imgs/tech/js.png";
import next from "../../assets/imgs/tech/nextjs.webp";
import tailwind from "../../assets/imgs/tech/tailwind.png";
import shadcn from "../../assets/imgs/tech/shadcn.png";
import typescript from "../../assets/imgs/tech/typescript.png";
import jquery from "../../assets/imgs/tech/jquery.png";
import axios from "../../assets/imgs/tech/axios.png";
import bootstrap from "../../assets/imgs/tech/bootstrap.png";
import npm from "../../assets/imgs/tech/npm.png";

import angular from "../../assets/imgs/tech/angular.png";









import laravel from "../../assets/imgs/tech/laravel.png";
import wordpress from "../../assets/imgs/tech/wordpress.png";
import php from "../../assets/imgs/tech/php.png";
import mysql from "../../assets/imgs/tech/mysql.png";
import spring from "../../assets/imgs/tech/spring.png";
import java from "../../assets/imgs/tech/java.png";
import mongoDB from "../../assets/imgs/tech/mongoDB.png";
import Oracle from "../../assets/imgs/tech/Oracle.jpg";
import nodejs from "../../assets/imgs/tech/nodejs.png";

import git from "../../assets/imgs/tech/git.png";
import gitLab from "../../assets/imgs/tech/gitLab.jpg";
import figma from "../../assets/imgs/tech/figma.png";
import xd from "../../assets/imgs/tech/xd.png";
import ga from "../../assets/imgs/tech/g-a.png";
import linux from "../../assets/imgs/tech/linux.jpg";
import docker from "../../assets/imgs/tech/docker.png";
import gsap_img from "../../assets/imgs/tech/gsap.png";
import fastapi from "../../assets/imgs/tech/fastapi.webp";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBox from "./tech";
gsap.registerPlugin(ScrollTrigger);


const backends = [
  { name: "Node JS", path: nodejs },
  { name: "wordpress", path: wordpress },
  { name: "php", path: php },
  { name: "laravel", path: laravel },
  { name: "spring boot", path: spring },
  { name: "java", path: java },
  { path: Oracle },
  { name:"mysql" , path: mysql },
  { path: mongoDB },
]
const frontEnds = [
  { name: "jquery", path: jquery },
  { path: axios },
  { path: next },
  { path: angular },
  { name: "typescript", path: typescript },
  { name: "tailwind", path: tailwind },
  { name: "shadcn", path: shadcn },
  { name: "html 5", path: html },
  { name: "css 3", path: css },
  { name: "javascript", path: js },
]
const others = [
  {  path: fastapi},
  {path: gitLab },
  { name: "git/GitHub", path: git },
  { name: "linux", path: linux },
  {  path: docker },
  { name: "figma", path: figma },
  { name: "Adobe xd", path: xd },
  { name: "google analytics", path: ga },
  { name: "gsap", path: gsap_img },
  { name: "npm", path: npm },
  
  
]



export default function Technologies() {
  const title = useRef(null);


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
          {frontEnds.map((item, index) => (<TechBox key={index} imgPath={item.path} nameTech={item.name} index={index}></TechBox>))}
        </div>
        <div className="slider slider-2">
          {backends.map((item, index) => (<TechBox key={index} imgPath={item.path} nameTech={item.name} index={index}></TechBox>))}
        </div>
        <div className="slider  slider-1">
          {others.map((item, index) => (<TechBox key={index} imgPath={item.path} nameTech={item.name} index={index}></TechBox>))}
        </div>
      </div>
    </section>
  );
}
