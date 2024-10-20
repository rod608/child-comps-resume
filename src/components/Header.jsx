import React from "react";

const Header = ({ data }) => {
  const { name, title, contactInfo } = data;
  return (
    <header>
      <div className="profile">
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
      <div className="contact-info">
        <p>
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
        <p>
          Web:{" "}
          <a href={contactInfo.web} target="_blank" rel="noopener noreferrer">
            {contactInfo.web}
          </a>
        </p>
        <p>Mobile: {contactInfo.mobile}</p>
      </div>
    </header>
  );
};

export default Header;
