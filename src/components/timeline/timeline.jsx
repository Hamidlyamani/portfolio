import React, { useRef } from "react";
import "./timeline.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLang, t } from "../../i18n.jsx";


gsap.registerPlugin(ScrollTrigger);

const charteCopy = {
    soustitle: {
        fr: "Cinq ans de progression constante, de l'autodidacte au développeur full-stack.",
        en: "Five years of steady progression, from self-taught to full-stack developer.",
    },
    title: { fr: "Mon Parcours", en: "My Journey" },
};

const events = [
    {
        title: { fr: "Premiers pas dans le code", en: "First steps in code" },
        desc: {
            fr: "J'apprends HTML et CSS en autodidacte, avec les moyens du bord — le début d'une discipline d'apprentissage qui ne m'a plus quitté.",
            en: "Self-taught HTML and CSS with whatever tools I had — the start of a learning discipline that never left me.",
        },
    },
    {
        title: { fr: "Bac Sciences Économiques & Gestion", en: "Baccalaureate in Economics & Management" },
        desc: {
            fr: "Obtention du baccalauréat en Sciences Économiques et Gestion — une base précieuse pour comprendre les enjeux business de mes clients.",
            en: "Earned my baccalaureate in Economics and Management — a valuable foundation for understanding my clients' business needs.",
        },
    },
    {
        title: { fr: "Deuxième Bac — Sciences de la Vie", en: "Second Baccalaureate — Life Sciences" },
        desc: {
            fr: "Deuxième baccalauréat, en Sciences de la Vie, préparé en un an : rigueur et capacité d'apprentissage rapide, prouvées tôt.",
            en: "A second baccalaureate, in Life Sciences, completed in one year: rigor and fast learning, proven early.",
        },
    },
    {
        title: { fr: "Formation Multimédia & Web Design", en: "Multimedia & Web Design Program" },
        desc: {
            fr: "Entrée en formation de Technicien Supérieur en Multimédia et Web Design : transformer des acquis d'autodidacte en compétences professionnelles.",
            en: "Enrolled in the Higher Technician program in Multimedia & Web Design: turning self-taught skills into professional ones.",
        },
    },
    {
        title: { fr: "Premier stage en agence web", en: "First web agency internship" },
        desc: {
            fr: "Un mois de production réelle en HTML, CSS et JavaScript, au rythme des projets clients d'une agence web.",
            en: "A month of real production work in HTML, CSS and JavaScript, at the client-project pace of a web agency.",
        },
    },
    {
        title: { fr: "Stage Greencom — WordPress & PHP", en: "Greencom internship — WordPress & PHP" },
        desc: {
            fr: "Développement WordPress et PHP sur des projets clients : thèmes sur mesure et intégrations avancées.",
            en: "WordPress and PHP development on client projects: custom themes and advanced integrations.",
        },
    },
    {
        title: { fr: "Diplôme de Technicien Supérieur obtenu", en: "Higher Technician Diploma earned" },
        desc: {
            fr: "Diplôme en Multimédia et Web Design en poche, avec deux stages en agence déjà derrière moi. Prêt pour le terrain.",
            en: "Multimedia & Web Design diploma earned, with two agency internships already behind me. Ready for the field.",
        },
    },
    {
        title: { fr: "Intégrateur web — Agence ONCLICK", en: "Web integrator — ONCLICK Agency" },
        desc: {
            fr: "Sites clients en HTML, PHP et WordPress avec optimisation SEO : mes premières livraisons en production pour de vrais clients.",
            en: "Client sites in HTML, PHP and WordPress with SEO optimization: my first production deliveries for real clients.",
        },
    },
    {
        title: { fr: "Développeur front-end — Agence Hay2", en: "Frontend developer — Hay2 Agency" },
        desc: {
            fr: "Interfaces modernes et responsives livrées en équipe, sur des projets clients variés et exigeants.",
            en: "Modern, responsive interfaces delivered in a team, across varied and demanding client projects.",
        },
    },
    {
        title: { fr: "Fin de mission — Hay2", en: "Role concluded — Hay2" },
        desc: {
            fr: "Fin de mission après de nombreux projets web livrés : une expérience solide du développement front-end en agence.",
            en: "Concluded after shipping numerous web projects: solid agency experience in frontend development.",
        },
    },
    {
        title: { fr: "Début de la Licence ISITW", en: "Started the ISITW Bachelor" },
        desc: {
            fr: "Entrée en Licence en Ingénierie des Systèmes d'Information et Technologies Web : architectures modernes, systèmes backend, applications scalables.",
            en: "Enrolled in the Bachelor in Information Systems Engineering & Web Technologies: modern architectures, backend systems, scalable applications.",
        },
    },
    {
    title: { fr: "Début chez 2MAG Agency", en: "Joined 2MAG Agency" },
    desc: {
      fr: "Prise de poste en tant que Full-Stack Developer pour concevoir et développer des applications web performantes.",
      en: "Started as a Full-Stack Developer, designing and building high-performance web applications.",
    },
  },
  {
    title: { fr: "Obtention de la Licence ISITW", en: "ISITW Bachelor Earned" },
    desc: {
      fr: "Diplôme en Ingénierie des Systèmes d'Information et Technologies Web, spécialisé dans le développement d'applications web modernes et les architectures logicielles.",
      en: "Degree in Information Systems Engineering & Web Technologies, specialized in modern web application development and software architecture.",
    },
  },
];


export default function CharteTimeline() {
     const { lang } = useLang();
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
                    <div className="soustitle">{t(charteCopy.soustitle, lang)}</div>
                    <h2>{t(charteCopy.title, lang)}</h2>
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
                                        <h6>{t(events[0].title, lang)}</h6>
                                        <p className="description">{t(events[0].desc, lang)}</p>
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
                                                    <h6>{t(events[1].title, lang)}</h6>
                                                    <p className="description">{t(events[1].desc, lang)}</p>
                                                  </div>
                                                  <div className="right-line">
                                                    <div className="sircle"></div>
                                                  </div>
                                                </div>
                            </div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month"></div>
                            
                            <div className="month year">
                                <div className="year-number">2021</div>
                            </div>
                           
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month">
                                <div className="event top">
                                                  <div className="box-event">
                                                    <p className="date-event">07/2021</p>
                                                    <h6>{t(events[2].title, lang)}</h6>
                                                    <p className="description">{t(events[2].desc, lang)}</p>
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
                                                    <h6>{t(events[3].title, lang)}</h6>
                                                    <p className="description">{t(events[3].desc, lang)}</p>
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
                                                    <h6>{t(events[4].title, lang)}</h6>
                                                    <p className="description">{t(events[4].desc, lang)}</p>
                                                  </div>
                                
                                                  <div className="right-line">
                                                    <div className="sircle"></div>
                                                  </div>
                                                </div>
                            </div>
                            <div className="month"></div>
                            <div className="month"></div>
                           
                            <div className="month"></div>
                            <div className="month  year">
                                <div className="year-number">2023</div>
                            </div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month">
                                <div className="event bottom">
                                                  <div className="box-event">
                                                    <p className="date-event">05/2023</p>
                                                    <h6>{t(events[5].title, lang)}</h6>
                                                    <p className="description">{t(events[5].desc, lang)}</p>
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
                                                    <h6>{t(events[6].title, lang)}</h6>
                                                    <p className="description">{t(events[6].desc, lang)}</p>
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
                                                    <h6>{t(events[7].title, lang)}</h6>
                                                    <p className="description">{t(events[7].desc, lang)}</p>
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
                                                    <h6>{t(events[8].title, lang)}</h6>
                                                    <p className="description">{t(events[8].desc, lang)}</p>
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
                            <div className="month  year">
                                <div className="year-number">2025</div>
                            </div>
                          
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month">
                                <div className="event bottom">
                                                  <div className="box-event">
                                                    <p className="date-event">09/2025</p>
                                                    <h6>{t(events[9].title, lang)}</h6>
                                                    <p className="description">{t(events[9].desc, lang)}</p>
                                                  </div>
                                
                                                  <div className="right-line">
                                                    <div className="sircle"></div>
                                                  </div>
                                                </div>
                            </div>
                            <div className="month">
                                <div className="event top">
                                                  <div className="box-event">
                                                    <p className="date-event">10/2025</p>
                                                    <h6>{t(events[10].title, lang)}</h6>
                                                    <p className="description">{t(events[10].desc, lang)}</p>
                                                  </div>
                                
                                                  <div className="right-line">
                                                    <div className="sircle"></div>
                                                  </div>
                                                </div>
                            </div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month  year">
                                <div className="year-number">2026</div>
                            </div>
                            <div className="month"></div>
                            <div className="month"></div>
                            <div className="month"></div>
                            
                            <div className="month">
                                <div className="event top">
                                              <div className="box-event">
                                                <p className="date-event">04/2026</p>
                                                <h6>{t(events[11].title, lang)}</h6>
                                                <p className="description">{t(events[11].desc, lang)}</p>
                                              </div>
                            
                                              <div className="right-line">
                                                <div className="sircle"></div>
                                              </div>
                                            </div>
                                            </div>
                            <div className="month"></div>
                            <div className="month">
                                <div className="event bottom">
                  <div className="box-event">
                    <p className="date-event">06/2025</p>
                    <h6>{t(events[12].title, lang)}</h6>
                    <p className="description">{t(events[12].desc, lang)}</p>
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

                            <div className="month nosircle lastmonth "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}