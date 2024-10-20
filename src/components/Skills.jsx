import React from "react";

const Skills = ({ data }) => {
  const skillPacks = [];
  for (let i = 0; i < data.length; i += 3) {
    skillPacks.push(data.slice(i, i + 3));
  }

  return (
    <section className="section key-skills">
      <h2>Key Skills</h2>
      <div className="skills">
        {skillPacks.map((pack, packIndex) => (
          <div className={`skill-pack skill-pack-${packIndex}`} key={packIndex}>
            {pack.map((skill, skillIndex) => (
              <span key={skillIndex}>{skill}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
