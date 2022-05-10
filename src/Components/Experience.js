import React, { Component } from "react";

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
            <div>
                <form>
                    <label htmlFor="startDate">
                        <input type="date" id="startDate" name="startDate" value={this.state.startDate} placeholder="YYYY-MM" />
                    </label>
                    <label htmlFor="endDate">
                        <input type="date" id="endDate" name="endDate" value={this.state.endDate} placeholder="YYYY-MM" />
                    </label>
                    <label htmlFor="jobTitle">
                        <input type="text" id="jobTitle" name="jobTitle" value={this.state.jobTitle} />
                    </label>
                    <label htmlFor="location">
                        <input type="text" id="location" name="location" value={this.state.location} placeholder="e.g. Chicago, IL" />
                    </label>
                    <label htmlFor="jobDuties">
                        <textarea id="jobDuties" name="jobDuties" value={this.state.jobDuties} placeholder="Responsibilities & Achievements" rows="5" cols="40" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Experience;