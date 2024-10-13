import React, { useLayoutEffect, useRef } from "react";
import "./charte.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Charte() {
  const el = useRef(null);
  const charte = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      { y: "30px", opacity: 0, scale: 1.1 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: el.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      }
    );
    let container_animation = gsap.to(charte.current, {
      x: () => {
        return -(charte.current.offsetWidth - 1.5 * window.innerWidth);
      },
      ease: "none",
      scrollTrigger: {
        trigger: charte.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => charte.current.clientWidth,
        pinSpacing: true,
      },
    });
    ScrollTrigger.matchMedia({
      // Desktop animations
      "(min-width: 768px)": () => {
        gsap.utils.toArray(".event").forEach((box) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: box, // Trigger each element individually
              containerAnimation: container_animation, // Use the same container animation
              start: "center right",
              toggleActions: "play play pause reverse",
            },
          });
          tl.from(box.querySelector(".right-line"), {
            height: 0,
            duration: 0.2,
          });

          // Animate the second element inside the box
          tl.from(box.querySelector(".sircle"), {
            opacity: 0, // Example animation, move it horizontally
            duration: 0.2,
          });

          // Animate the third element inside the box
          tl.from(box.querySelector(".box-event"), {
            opacity: 0, // Example animation, fade in
            duration: 0.4,
          });
        });
      },
    });
  });
  return (
    <div className="charte">
      <div className="title-part" ref={el}>
        <div className="soustitle">
          Let me take you through the milestones of my journey.
        </div>
        <h2>My Educational and Professional Story</h2>
      </div>
      <div className="charte_horisantel section2">
        <div className="line-prancipal" id="sectionPin" ref={charte}>
          <div className="time-line-container pin-wrap">
            <div className="years-line">
              <div className="month year">
                <div className="year-number">2020</div>
              </div>
              <div className="month"></div>
              <div className="month">
                <div className="event top">
                  <div className="box-event">
                    <p className="date-event">03/2020</p>
                    <h6>First Code Encounte.</h6>
                    <p className="description">
                      I began my coding journey by learning HTML and CSS on my
                      phone, marking my initial encounter with the field of
                      programming.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event bottom">
                  <div className="box-event">
                    <p className="date-event">07/2020</p>
                    <h6>First Baccalaureate in Economics.</h6>
                    <p className="description">
                      I proudly earned my first bachelor's degree in Economics
                      and Management Sciences, marking a significant milestone
                      in my academic journey.
                    </p>
                  </div>
                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month year">
                <div className="year-number">2021</div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event top">
                  <div className="box-event">
                    <p className="date-event">07/2021</p>
                    <h6>Second Baccalaureate in Life Sciences.</h6>
                    <p className="description">
                      Achieved second baccalaureate in Life Sciences, overcoming
                      barriers to follow the dream of software development.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event bottom">
                  <div className="box-event">
                    <p className="date-event">10/2021</p>
                    <h6>Embarking on Web Design Studies.</h6>
                    <p className="description">
                      Enrolled in the Higher Technician Certificate program in
                      Multimedia and Web Design, embarking on a journey to
                      deepen expertise in digital media and web development.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month year">
                <div className="year-number">2022</div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event top">
                  <div className="box-event">
                    <p className="date-event">06/2022</p>
                    <h6>HTML/CSS/JS Practical Internship Initiation</h6>
                    <p className="description">
                      Embarked on an internship at a web design agency,
                      dedicating a month to hands-on practice and refinement of
                      HTML, CSS, and JavaScript skills.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month  year">
                <div className="year-number">2023</div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event bottom">
                  <div className="box-event">
                    <p className="date-event">05/2023</p>
                    <h6>Greencom Internship: Wordpress and PHP</h6>
                    <p className="description">
                      Engaged in an internship at Greencom agency, deepening
                      understanding of Wordpress development while mastering PHP
                      and advancing expertise in HTML, CSS, and JavaScript.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month">
                <div className="event top">
                  <div className="box-event">
                    <p className="date-event">07/2023</p>
                    <h6>Completion of Multimedia Web Design Program</h6>
                    <p className="description">
                      Successfully completed the Higher Technician Certificate
                      program, marking the culmination of educational endeavors
                      in multimedia and web design.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month">
                <div className="event bottom">
                  <div className="box-event">
                    <p className="date-event">10/2023</p>
                    <h6>Joining ONCLICK Agency: Web Integration Role</h6>
                    <p className="description">
                      Joined ONCLICK Agency as a web integrator, participating
                      in projects encompassing HTML, PHP, SEO, and Wordpress,
                      enriching the agency's diverse portfolio.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month  year">
                <div className="year-number">2024</div>
              </div>
              <div className="month"></div>
              <div className="month">
                <div className="event top">
                  <div className="box-event">
                    <p className="date-event">02/2024</p>
                    <h6>Frontend Developer Role at Hay2 Agency</h6>
                    <p className="description">
                      Began working at Hay 2 Agency as a frontend developer,
                      embracing fresh challenges and responsibilities within the
                      dynamic web development landscape.
                    </p>
                  </div>

                  <div className="right-line">
                    <div className="sircle"></div>
                  </div>
                </div>
              </div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month"></div>
              <div className="month  year">
                <div className="year-number">2025</div>
              </div>

              <div className="month nosircle lastmonth "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
