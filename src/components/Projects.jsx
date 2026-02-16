import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Workify (Real Project)",
      tech: "React, CSS3, Context API",
      desc: "Ish qidirish va vakansiyalarni boshqarish uchun mo'ljallangan platforma.",
      github: "https://github.com/AbdullayevTemurmalik",
      live: "https://workify-steel.vercel.app/",
      type: "frontend",
    },
    {
      id: 2,
      title: "Uzum Market Clone",
      tech: "React, Redux, Tailwind",
      desc: "Uzum marketning to'liq interfeysi va savat funksionalligi yaratilgan loyiha.",
      github: "https://github.com/AbdullayevTemurmalik",
      live: "https://uzum-market-main.vercel.app/",
      type: "frontend",
    },
    {
      id: 3,
      title: "CRUD Operations",
      tech: "React, API, Validation",
      desc: "Ma'lumotlarni boshqarish, o'chirish va tahrirlash tizimi.",
      github: "https://github.com/AbdullayevTemurmalik",
      live: "https://crud-operations-ui.netlify.app/",
      type: "frontend",
    },
    {
      id: 4,
      title: "JWT & Cookie Auth",
      tech: "Express.js, JWT, Cookie",
      desc: "JWT va Cookie yordamida xavfsiz autentifikatsiya tizimi (8-dars).",
      github:
        "https://github.com/AbdullayevTemurmalik/Express.JS-8dars-JWT-Cookie",
      type: "backend",
    },
    {
      id: 5,
      title: "User Registration System",
      tech: "Express.js, Validation",
      desc: "Backend qismida foydalanuvchilarni ro'yxatdan o'tkazish logikasi (7-dars).",
      github:
        "https://github.com/AbdullayevTemurmalik/Express.JS-7dars-Register",
      type: "backend",
    },
    {
      id: 6,
      title: "Middleware Architecture",
      tech: "Express.js, Middleware",
      desc: "Express.js-da so'rovlarni nazorat qilish va Middleware bilan ishlash (6-dars).",
      github:
        "https://github.com/AbdullayevTemurmalik/Express.JS-6dars-Middleware",
      type: "backend",
    },
  ];

  return (
    <section id="projects" className="projects-sec">
      <div className="container">
        <h2 className="title">Loyihalarim</h2>

        <div className="stats-container">
          <div className="stat-card">
            <h3>70+</h3>
            <p>Umumiy Loyihalar</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Real Loyihalar</p>
          </div>
        </div>

        <div className="projects-grid">
          {myProjects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="card-header">
                <h3>{p.title}</h3>
                <span className={`badge ${p.type}`}>
                  {p.type === "frontend" ? "React" : "Backend"}
                </span>
              </div>
              <p className="tech-info">
                <strong>Stack:</strong> {p.tech}
              </p>
              <p className="description">{p.desc}</p>

              <div className="links">
                {p.type === "frontend" ? (
                  <>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="code-btn"
                    >
                      <FaCode /> Live Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="demo-btn"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </>
                ) : (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="see-code-btn"
                  >
                    <FaGithub /> See Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
