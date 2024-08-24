import React, { useState, useEffect } from "react";
import "./parts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGears,
  faList,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isFixed) {
        setIsFixed(true);
      } else if (window.scrollY <= 300 && isFixed) {
        setIsFixed(false);
      }
    };
    //  compare the window.scrollY with  the position of nav_bar
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      <div className={`nav_bar ${isFixed ? " fixed " : ""}`}>
        <div className="nav-b">
          <a href="#" className="item">
            <FontAwesomeIcon icon={faUser} /> <span>ABOUT</span>
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faList} /> <span> Services</span>
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faBriefcase} /> <span> PORTFOLIO</span>
          </a>
          <a href="#" className="item">
            {" "}
            <FontAwesomeIcon icon={faGears} />
            <span> SKILLS</span>
          </a>
          <a href="#" className="item">
            <FontAwesomeIcon icon={faPhone} />
            <span> Contact </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
