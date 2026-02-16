import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">Men haqimda</h2>

        <div className="about-wrapper">
          <p className="description">
            Assalomu alaykum! Mening ismim{" "}
            <strong className="name">Temurmalik Abdullayev</strong>. Hozirda 16
            yoshdaman va 2 yildan buyon dasturlash olamida o'z yo'limni
            qurmoqdaman.
          </p>

          <p className="description">
            Men <span className="highlight-blue">"Algoritm"</span> o'quv markazi
            talabasiman. Hozirda asosiy e'tiborimni{" "}
            <span className="tech-stack">React va Next.js</span>{" "}
            texnologiyalariga qaratganman.
          </p>

          <div className="learning-box">
            <p className="description">
              Shuningdek, backend yo'nalishida{" "}
              <span className="tech-learning">Node.js va Express.js</span>{" "}
              kutubxonalarini o'rganmoqdaman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
