import React, { useLayoutEffect, useRef } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import linkdin from "../../assets/imgs/social/linkedin.png";
import insta from "../../assets/imgs/social/instagram.png";
import behance from "../../assets/imgs/social/behance.png";
import github from "../../assets/imgs/social/github.png";
import twitter from "../../assets/imgs/social/twitter.png";
import whatsapp from "../../assets/imgs/social/whatsapp.png";
import threads from "../../assets/imgs/social/threads.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const title = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(title.current, {
        scale: 0.3,
        opacity: 0.3,
        duration: 1.5,
        scrollTrigger: {
          scroller: ".smooth-wrapper",
          trigger: title.current, // Use title.current as the trigger
          start: "center 100%",
          end: "center 60%",
          toggleActions: "play play pause reverse",
          scrub: false,
        },
      });
      gsap.from(left.current, {
        x: "-600px",
        duration: 1.5,
        scrollTrigger: {
          scroller: ".smooth-wrapper",
          trigger: left.current,
          start: "center 100%",
          end: "center 60%",
          toggleActions: "play play pause reverse",
          scrub: false,
        },
      });
      gsap.from(right.current, {
        scale: 0.4,
        opacity: 0.3,
        duration: 1.5,
        scrollTrigger: {
          scroller: ".smooth-wrapper",
          trigger: right.current,
          start: "center 100%",
          end: "center 60%",
          toggleActions: "play play pause reverse",
          scrub: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="title-part" ref={title}>
            <div className="soustitle">
              I am available for freelancing work. Got a question or proposal,
              or just want to say hello? Don't be shy and message me now.
            </div>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className="row row-cont">
            <div className="col-xl-4 info-contact" ref={left}>
              <h3>Contact Details</h3>
              <div className="info-item">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#f37500" }}
                />
                <a href="">alymnyhmyd763@gmail.com</a>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#f37500" }} />
                <a href="">+212 628142424</a>
              </div>
              <h3>Location</h3>
              <div className="info-item">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#f37500" }} />
                <a href="">Marrakech - Morocco </a>
              </div>
            </div>
            <div className="col-xl-8 form-contact" ref={right}>
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="What's your name?"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="What's your email?"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-12">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="What's your Phone Number"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-12">
                    <input
                      type="text"
                      name="sub"
                      placeholder="What service are you looking for?"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 submet-botton">
                    <input
                      type="submit"
                      name="submit"
                      value="SEND YOUR MESSAGE"
                      className="inptBtn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="social_media_copyright">
            <div className="social_media">
              <div className="social linkedIn hvr-sweep-to-top">
                <div className="image">
                  <img src={linkdin} alt="" />
                </div>
                <p className="name">linkedIn</p>
              </div>

              <div className="social GitHub">
                <div className="image">
                  <img src={github} alt="" />
                </div>
                <p className="name">GitHub</p>
              </div>
              <div className="social Behance">
                <div className="image">
                  <img src={behance} alt="" />
                </div>
                <p className="name">Behance</p>
              </div>
              <div className="social Instagram">
                <div className="image">
                  <img src={insta} alt="" />
                </div>
                <p className="name">Instagram</p>
              </div>
              <div className="social Whatsapp">
                <div className="image">
                  <img src={whatsapp} alt="" />
                </div>
                <p className="name">Whatsapp</p>
              </div>
            </div>
            <div className="copyright">
              <p>No copyrights here—grab what you want ;)</p>
              <p>
                made by love{" "}
                <FontAwesomeIcon icon={faHeart} style={{ color: "#FF0000" }} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
