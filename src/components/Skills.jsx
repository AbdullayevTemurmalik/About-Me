import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", level: "99%", icon: <FaHtml5 color="#e34c26" /> },
    {
      id: 2,
      name: "JavaScript",
      level: "95%",
      icon: <FaJsSquare color="#f7df1e" />,
    },
    { id: 3, name: "React", level: "99%", icon: <FaReact color="#61dbfb" /> },
    {
      id: 4,
      name: "Tailwind CSS",
      level: "95%",
      icon: <SiTailwindcss color="#38bdf8" />,
    },
    { id: 5, name: "CSS", level: "90%", icon: <FaCss3Alt color="#264de4" /> },
    {
      id: 6,
      name: "Node JS",
      level: "90%",
      icon: <FaNodeJs color="#3c873a" />,
    },
    { id: 7, name: "Express", level: "90%", icon: <SiExpress color="#000" /> },
    {
      id: 8,
      name: "Next JS",
      level: "70%",
      icon: <SiNextdotjs color="#000" />,
    },
    { id: 9, name: "Vue JS", level: "60%", icon: <FaVuejs color="#41b883" /> },
  ];

  return (
    <section id="skills" className="skills-sec">
      <div className="container">
        <h2 className="title">Ko'nikmalar</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.id} className="skill-card">
              <div className="skill-head">
                <span className="icon">{s.icon}</span>
                <span className="name">{s.name}</span>
                <span className="percent">{s.level}</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: s.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
