import React from "react";

const PersonalProfile = ({ description }) => {
  return (
    <section className="section personal-profile">
      <h2>Personal Profile</h2>
      <p>{description}</p>
    </section>
  );
};

export default PersonalProfile;
