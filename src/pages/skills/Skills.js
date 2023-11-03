import React from "react";
import "./Skills.css";
const skills = [
  { id: 1, title_skills: "HTML", pir: 80 },
  { id: 2, title_skills: "CSS", pir: 80 },
  { id: 3, title_skills: "JS", pir: 75 },
  { id: 4, title_skills: "Bootstrap", pir: 95 },
  { id: 5, title_skills: "REACT", pir: 80 },
  { id: 6, title_skills: "JSON", pir: 100 },
  { id: 7, title_skills: "EJS", pir: 90 },
  { id: 8, title_skills: "GULP", pir: 90 },
  { id: 9, title_skills: "SASS", pir: 90 },
  { id: 10, title_skills: "jquery", pir: 50 },
];
function Skills() {
  return (
    <>
      {/* section skills */}
      <div className="container">
        <h3 className="set_title">Skills</h3>
        <div className="skills ">
          {skills.map((skill, index) => {
            return (
              <div className="skills_box" key={index}>
                <div key={skill.id} className="skill_title">
                  {skill.title_skills}
                </div>
                <div key={skill.id} className="skill_progress">
                  <span
                    className={`progress active`}
                    style={{ width: skill.pir + "%" }}
                  >
                    {skill.pir}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
