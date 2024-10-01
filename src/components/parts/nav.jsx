import React, {  useCallback } from "react";
import "./parts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGears,
  faList,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = ({ locoScroll }) => {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const targetScroll = e.currentTarget.getAttribute("data-scroll");
      if (locoScroll.current && targetScroll) {
       locoScroll.current.update();
        locoScroll.current.scrollTo(targetScroll);
        console.log(locoScroll.current);
      }
    },
    [locoScroll]
  );

  return (
    <>
      <div className="nav_bar">
        <div className="nav-b">
          <div data-scroll="#about" onClick={handleClick} className="item">
            <FontAwesomeIcon icon={faUser} /> <span>ABOUT</span>
          </div>
          <div data-scroll="#service" onClick={handleClick} className="item">
            <FontAwesomeIcon icon={faList} /> <span> Services</span>
          </div>
          <div data-scroll="#portfolio" onClick={handleClick} className="item">
            <FontAwesomeIcon icon={faBriefcase} /> <span> PORTFOLIO</span>
          </div>
          <div data-scroll="#skills" onClick={handleClick} className="item">
            {" "}
            <FontAwesomeIcon icon={faGears} />
            <span> SKILLS</span>
          </div>
          <div data-scroll="#contact" onClick={handleClick} className="item">
            <FontAwesomeIcon icon={faPhone} />
            <span> Contact </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
