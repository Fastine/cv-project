import React, { Component } from "react";
import "../Styles/forms.css"

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: "",
            endDate: "",
            jobTitle: "",
            location: "",
            jobDuties: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="section">
                <h2>Experience</h2>
                <form>
                    <input type="date" id="startDate" name="startDate" value={this.state.startDate} />
                    <input type="date" id="endDate" name="endDate" value={this.state.endDate} />
                    <input type="text" placeholder="Job Title" id="jobTitle" name="jobTitle" value={this.state.jobTitle} />
                    <input type="text" placeholder="Location e.g. Chicago, IL" id="location" name="location" value={this.state.location} />
                    <input type="text" id="jobDuties" name="jobDuties" value={this.state.jobDuties} placeholder="Responsibilities & Achievements" />
                </form>
            </div>
        )
    }
}

export default Experience;