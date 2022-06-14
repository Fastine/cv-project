import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

class Education extends Component {
    constructor (props) {
        super(props)
        this.state = {
            year: "",
            level: "",
            major: "",
            institution: "",
            location: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="section">
                <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.year} id="year" name="year" onChange={this.handleChange} placeholder="Year Graduated" />
                        <select value={this.state.level} id="level" name="level" onChange={this.handleChange}>
                            <option value="" disabled selected>Degree: </option>
                            <option value="Associate">Associate</option>
                            <option value="Bachelor's">Bachelor's</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Master's">Master's</option>
                            <option value="Doctoral">Doctoral</option>
                        </select>
                        <input type="text" value={this.state.major} placeholder="Major" id="major" name="major" onChange={this.handleChange} />
                        <input type="text" value={this.state.institution} placeholder="Institution" id="institution" name="institution" onChange={this.handleChange} />
                        <input type="text" value={this.state.location} placeholder="City, State" id="location" name="location" onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="xl" /></button>
                </form>
            </div>
        )
    }
}

export default Education;