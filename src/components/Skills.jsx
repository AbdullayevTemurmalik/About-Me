import React from "react";
import "./Skills.css";

const Skills = () => {
  const getIcon = (name) => `https://skillicons.dev/icons?i=${name}`;

  const skills = [
    { id: 1, name: "HTML", level: "90%", icon: getIcon("html") },
    { id: 2, name: "JavaScript", level: "90%", icon: getIcon("js") },
    { id: 3, name: "React", level: "100%", icon: getIcon("react") },
    { id: 4, name: "Tailwind CSS", level: "80%", icon: getIcon("tailwind") },
    { id: 5, name: "CSS", level: "90%", icon: getIcon("css") },
    { id: 6, name: "Node JS", level: "85%", icon: getIcon("nodejs") },
    { id: 7, name: "Express", level: "85%", icon: getIcon("express") },
    { id: 8, name: "Next JS", level: "65%", icon: getIcon("nextjs") },
    { id: 9, name: "Vue JS", level: "60%", icon: getIcon("vue") },
    { id: 10, name: "TypeScript", level: "65%", icon: getIcon("ts") },
    { id: 11, name: "MongoDB", level: "70%", icon: getIcon("mongodb") },

    { id: 13, name: "Vite", level: "90%", icon: getIcon("vite") },
    { id: 14, name: "Redux", level: "90%", icon: getIcon("redux") },
    { id: 15, name: "Postman", level: "80%", icon: getIcon("postman") },
    { id: 16, name: "Notion", level: "60%", icon: getIcon("notion") },
    { id: 17, name: "LinkedIn", level: "70%", icon: getIcon("linkedin") },
    { id: 18, name: "Git", level: "95%", icon: getIcon("git") },
    { id: 19, name: "GitHub", level: "100%", icon: getIcon("github") },
    { id: 20, name: "VS Code", level: "100%", icon: getIcon("vscode") },
    { id: 21, name: "Figma", level: "80%", icon: getIcon("figma") },
    { id: 22, name: "Windows", level: "85%", icon: getIcon("windows") },
  ];

  return (
    <section id="skills" className="skills-sec">
      <div className="container">
        <h2 className="title">Ko'nikmalar</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.id} className="skill-card">
              <div className="skill-head">
                <img src={s.icon} alt={s.name} className="skill-logo" />
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
