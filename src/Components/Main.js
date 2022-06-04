import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

class Main extends React.Component {


    render() {
        return (
            <div className="main">

            <PersonalInfo />
            <Education />
            <Experience />
            </div>
        )
    }
}

export default Main;