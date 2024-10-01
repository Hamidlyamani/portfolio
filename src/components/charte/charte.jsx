import React, { useLayoutEffect, useRef } from "react";
import "./charte.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineLite } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);

export default function Charte() {
  const el = useRef(null);
  const charte_container = useRef(null);
  const charte = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animation for chartRef.current
      gsap.fromTo(
        el.current,
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            scroller: ".smooth-wrapper",
            trigger: el.current,
            start: "center 100%",
            end: "center 60%",
            scrub: false,
            toggleActions: "play play pause reverse",
          },
        }
      );

      // Timeline for right-line, circle, and box-event
      const tl = new TimelineLite({
        scrollTrigger: {
          scroller: ".smooth-wrapper",
          trigger: ".right-line",
          start: "center 100%",
          end: "center 60%",
          markers: false, // Remove markers in production
        },
      });

      tl.from(".right-line", { height: 0, duration: 1 })
        .from(".sircle", { opacity: 0, duration: 0.5 })
        .from(".box-event", { opacity: 0, duration: 0.5 });
      gsap.to(charte.current, {
        x: () => {
          return -(charte.current.offsetWidth - 1.5 * window.innerWidth);
        },
        scrollTrigger: {
          trigger: charte.current,
          pin: true,
          scrub: true,
          start: "top top",
          ease: "none",
          scroller: ".smooth-wrapper",
          end: () => charte.current.clientWidth,
          pinSpacing: true,
        },
      });
    });
    return () => ctx.revert();
  }, [el, charte, charte_container]);

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
              <div className="month nosircle"></div>
              <div className="month nosircle"></div>
              <div className="month nosircle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
