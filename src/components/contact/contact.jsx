import React, { useLayoutEffect, useRef, useState } from "react";
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
import whatsapp from "../../assets/imgs/social/whatsapp.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const title = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  useGSAP(
    () => {
      gsap.from(title.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.7,
        scrollTrigger: {
          trigger: title.current, // Use title.current as the trigger
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      });
      gsap.from(left.current, {
        x: "-40vw",
        duration: 0.9,
        scrollTrigger: {
          trigger: left.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      });

      gsap.from(right.current, {
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: right.current,
          start: "0% 100%",
          toggleActions: "play play pause reverse",
        },
      });

    });











  const [formData, setFormData] = useState({ name: '', email: '', sub: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const domain = window.location.origin;

      const response = await fetch(`${domain}/contact.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          sub: formData.sub,
          message: formData.message,
        }),
      });

      const result = await response.json(); // Parse JSON response
      console.log(result)
      setResponseMessage(result.message);
      Swal.fire({
        title: "Message Received",
        text: "We will respond in approximately 24 Heures",
        icon: 'success'
      });
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      Swal.fire({
        title: "An error occurred.",
        text: "Please try again.",
        icon: 'warning'
      });
    }
  };








  return (
    <>
      <section className="contact" id="contact">
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
                <a href="mailto:alymnyhmyd763@gmail.com">
                  alymnyhmyd763@gmail.com
                </a>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#f37500" }} />
                <a href="tel:+212628142424">+212 628142424</a>
              </div>
              <h3>Location</h3>
              <div className="info-item">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#f37500" }} />
                <span>Marrakech - Morocco</span>
              </div>
            </div>
            <div className="col-xl-8 form-contact" ref={right}>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name" value={formData.name} onChange={handleChange}
                      placeholder="What's your name ?*"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email" value={formData.email} onChange={handleChange}
                      placeholder="What's your email ?*"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-12">
                    <input
                      type="text"
                      name="sub" value={formData.sub} onChange={handleChange}
                      placeholder="What service are you looking for ?"
                      className="inptFld"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols="" value={formData.message} onChange={handleChange}
                      name="message"
                      placeholder="Your Message...*"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 submet-botton ">
                    <button
                      type="submit"
                      name="submit"
                      className="inptBtn btn-border">
                      SEND YOUR MESSAGE
</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          <div className="social_media_copyright">
            <div className="social_media">
              <a
                href="https://www.linkedin.com/in/hamid-elyamani-765177229/"
                className="social linkedIn hvr-sweep-to-top"
                target="_blank"
              >
                <div className="image">
                  <img src={linkdin} alt="linkdIn" />
                </div>
                <p className="name">linkedIn</p>
              </a>

              <a
                href="https://github.com/Hamidlyamani"
                className="social GitHub"
                target="_blank"
              >
                <div className="image">
                  <img src={github} alt="github" />
                </div>
                <p className="name">GitHub</p>
              </a>
              <a
                href="https://www.behance.net/mnhxhx"
                className="social Behance"
                target="_blank"
              >
                <div className="image">
                  <img src={behance} alt="Behance" />
                </div>
                <p className="name">Behance</p>
              </a>
              <a
                href="https://www.instagram.com/alyamani__hd/"
                className="social Instagram"
                target="_blank"
              >
                <div className="image">
                  <img src={insta} alt="Instagram" />
                </div>
                <p className="name">Instagram</p>
              </a>
              <a
                href="https://wa.me/+212628142424?text=Hey Hamid!!"
                className="social Whatsapp"
                target="_blank"
              >
                <div className="image">
                  <img src={whatsapp} alt="Whatsapp" />
                </div>
                <p className="name">Whatsapp</p>
              </a>
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
        <div className="blob4"></div>
      </section>
    </>
  );
}
