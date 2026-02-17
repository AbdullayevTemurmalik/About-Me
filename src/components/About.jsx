import React from "react";
import "./AboutMe.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";
const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Men haqimda</h2>

          <div className="about-card">
            <p className="description">
              Assalomu alaykum! Mening ismim{" "}
              <span className="name">Temurmalik</span>. Men 16 yoshdaman va 2
              yildan buyon dasturlash sohasida o‘zimni rivojlantirib
              kelmoqdaman. Web texnologiyalar orqali real muammolarga yechim
              topishni yaxshi ko‘raman.
            </p>

            <p className="description">
              Hozirda <span className="highlight">"Algoritm"</span> o‘quv
              markazida tahsil olyapman va frontend yo‘nalishiga alohida e’tibor
              qaratganman.
            </p>

            <h3 className="sub-title">Texnologiyalar</h3>

            <div className="tech-icons">
              <div className="tech-item react">
                <FaReact />
                <span>React</span>
              </div>

              <div className="tech-item next">
                <SiNextdotjs />
                <span>Next.js</span>
              </div>

              <div className="tech-item node">
                <FaNodeJs />
                <span>Node.js</span>
              </div>

              <div className="tech-item express">
                <SiExpress />
                <span>Express.js</span>
              </div>
            </div>

            <p className="description">
              Mening asosiy maqsadim — kuchli full-stack developer bo‘lish,
              zamonaviy web ilovalar yaratish va kelajakda yirik IT loyihalarda
              ishlash.
            </p>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default About;
