import React from "react";

const Education = ({ data }) => {
  return (
    <section className="section education">
      <h2>Education</h2>
      <div>
        {data.map((item, index) => (
          <div className="education-item" key={index}>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <p>{item.years}</p>
            <p>GPA: {item.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
