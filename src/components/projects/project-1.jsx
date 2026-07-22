import React from "react";
import Row from "react-bootstrap/Row";
import { useLang, t } from "../../i18n.jsx";

const labels = {
  problem: { fr: "Problème", en: "Problem" },
  solution: { fr: "Solution", en: "Solution" },
  result: { fr: "Résultat", en: "Result" },
  features: { fr: "Fonctionnalités clés", en: "Key features" },
  tech: { fr: "Technologies utilisées", en: "Technologies used" },
  source: { fr: "CODE SOURCE", en: "VIEW SOURCE CODE" },
  visit: { fr: "VOIR LE SITE", en: "VISIT SITE" },
};

export default function Project({ content }) {
  const { lang } = useLang();
  if (!content) return null;

  return (
    <div className=" project project_1">
      <Row>
        <div className="col-lg-7 text">
          <div className="Overview">
            <h3>
              <span className="case-label">{t(labels.problem, lang)} :</span>
            </h3>
            <p>{t(content.problem, lang)}</p>
            <h3>
              <span className="case-label">{t(labels.solution, lang)} :</span>
            </h3>
            <p>{t(content.solution, lang)}</p>
            <h3>
              <span className="case-label">{t(labels.result, lang)} :</span>
            </h3>
            <p>{t(content.result, lang)}</p>
          </div>
          <div className="Features">
            <h3>{t(labels.features, lang)} :</h3>
            <ul>
              {content.items?.map((item, index) => (
                <li key={index}>{t(item, lang)}</li>
              ))}
            </ul>
          </div>
          <div className="Technologies_used">
            <h3>{t(labels.tech, lang)} :</h3>
            <div className="imgs">
              {content.imageName
                ? content.imageName.map((image, index) => (
                    <img key={index} src={image} alt={`technology ${index + 1}`} />
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className="col-lg-5 image">
          <div className="img_p">
            <img src={content.project_details} alt={t(content.title, lang)} />
          </div>
          <div className="buttons">
            {content.code_source && (
              <a
                href={content.code_source}
                target="_blank"
                rel="noreferrer"
                className="btn btn-go"
              >
                {t(labels.source, lang)}
              </a>
            )}
            {content.link && (
              <a
                href={content.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-go"
              >
                {t(labels.visit, lang)}
              </a>
            )}
          </div>
        </div>
      </Row>
    </div>
  );
}
