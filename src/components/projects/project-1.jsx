import React from "react";
import Row from "react-bootstrap/Row";
import html from "../../assets/imgs/tech/html.png";
import css from "../../assets/imgs/tech/css3.png";
import js from "../../assets/imgs/tech/js.png";
import react from "../../assets/imgs/tech/react.png";
import php from "../../assets/imgs/tech/php.png";
import mysql from "../../assets/imgs/tech/mysql.png";
import axios from "../../assets/imgs/tech/axios.png";

export default function Project({ content }) {
  if (!content) return null;

  return (
    <div className=" project project_1">
      <Row>
        <div className="col-lg-7 text">
          <div className="Overview">
            <h3>Project Overview:</h3>
            <p> {content.Overview}</p>
          </div>
          <div className="Features">
            <h3>Features and Functionality:</h3>
            <ul>
              {content.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="Technologies_used">
            <h3>Technologies Used:</h3>
            <div className="imgs">
              {content.imageName
                ? content.imageName.map((image, index) => (
                  <img key={index} src={image} alt={`tech-${index}`} />
                ))
                : ""}
            </div>
          </div>
        </div>
        <div className="col-lg-5 image">
          <div className="img_p">
            <img src={content.project_details} alt="" />
          </div>
          <div className="buttons">
            {content.code_source && (<a href="" className="btn btn-go">
              VIEW SOURCE CODE
            </a>)}
            {content.link && (
              <a href={content.link} className="btn btn-go">
                VISIT SITE
              </a>
            )}
          </div>
        </div>
      </Row>
    </div>
  );
}
