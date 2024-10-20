import React from "react";

const WorkExperience = ({ data }) => {
  return (
    <section className="section work-experience">
      <h2>Work Experience</h2>
      <div className="jobs">
        {data.map((job, index) => (
          <div className="job" key={index}>
            <h3>
              {job.position} at {job.company} ({job.years})
            </h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
