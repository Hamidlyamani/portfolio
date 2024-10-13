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
      // e.preventDefault();
      // const targetScroll = e.currentTarget.getAttribute("data-scroll");
      // if (locoScroll.current && targetScroll) {
      //  locoScroll.current.update();
      //   locoScroll.current.scrollTo(targetScroll);
      //   console.log(locoScroll.current);
      // }
    },
    [locoScroll]
  );

  return (
    <>
      <div className="nav_bar">
        <div className="nav-b">
          <a data-scroll="#about" href="#about" className="item">
            <FontAwesomeIcon icon={faUser} /> <span>ABOUT</span>
          </a>
          <a data-scroll="#service" href="#service" className="item">
            <FontAwesomeIcon icon={faList} /> <span> Services</span>
          </a>
          <a data-scroll="#portfolio" href="#portfolio" className="item">
            <FontAwesomeIcon icon={faBriefcase} /> <span> PORTFOLIO</span>
          </a>
          <a data-scroll="#skills" href="#skills" className="item">
            {" "}
            <FontAwesomeIcon icon={faGears} />
            <span> SKILLS</span>
          </a>
          <a data-scroll="#contact" href="#contact" className="item">
            <FontAwesomeIcon icon={faPhone} />
            <span> Contact </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
