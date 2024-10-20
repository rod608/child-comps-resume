import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import PersonalProfile from "./components/PersonalProfile.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";

class App extends Component {
  state = {
    header: {
      name: "Zh Rimel",
      title: "Data Scientist",
      contactInfo: {
        email: "abc@gmail.com",
        web: "https://abc.github.io/abc",
        mobile: "01234567890",
      },
    },
    personalProfile: {
      profileDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    skills: [
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
      "A Key skill",
    ],
    education: [
      {
        institution: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        years: "2018 - 2022",
        gpa: "3.9",
      },
      {
        institution: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        years: "2022 - 2023",
        gpa: "4.0",
      },
    ],
    workExperience: [
      {
        company: "Company",
        position: "Job Title",
        years: "August 2022 – December 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company: "Company 2",
        position: "Job Title 2",
        years: "August 2020 – December 2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  };

  render() {
    const { header, personalProfile, skills, education, workExperience } =
      this.state;

    return (
      <div className="container">
        <Header data={header} />
        <PersonalProfile description={personalProfile.profileDescription} />
        <hr />
        <WorkExperience data={workExperience} />
        <hr />
        <Skills data={skills} />
        <hr />
        <Education data={education} />
      </div>
    );
  }
}

export default App;
