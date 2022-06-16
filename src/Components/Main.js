import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

const Main = () => {


        return (
            <div className="main">
            <h2>Personal Information</h2>
            <PersonalInfo />
            <h2>Education</h2>
            <Education />
            <h2>Experience</h2>
            <Experience />
            </div>
        )
}

export default Main;