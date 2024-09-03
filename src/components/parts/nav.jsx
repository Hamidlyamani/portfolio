import React, { useState, useEffect, useRef } from "react";
import "./parts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGears,
  faList,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ scrollInstance }) => {
  const [isFixed, setIsFixed] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    if (!scrollInstance) return; // Ensure scrollInstance is available

    // Throttle the handleScroll function to limit how often it can be called
    const handleScroll = (event) => {
      const stickyElement = stickyRef.current;
      const viewportHeight = window.innerHeight;
      const scrollY = event.scroll.y;
      const stickyTopOffset = stickyElement.offsetTop;

      // Calculate if the element should be fixed
      const shouldBeFixed = scrollY + viewportHeight * 0.1 >= stickyTopOffset;

      // Only update the state if it needs to change
      if (shouldBeFixed !== isFixed) {
        setIsFixed(shouldBeFixed);
      }
    }; // Adjust the throttle delay as needed

    scrollInstance.on("scroll", handleScroll);

    return () => {
      scrollInstance.off("scroll", handleScroll); // Clean up to avoid multiple listeners
      // Cancel the throttle function on cleanup
    };
  }, [scrollInstance, isFixed]);

  return (
    <>
      <div ref={stickyRef} className="nav_bar">
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
