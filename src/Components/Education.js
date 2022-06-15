import React, { Component } from "react";
import "../Styles/forms.css"
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
            location: "",
            isEditable: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({isEditable: false})
    }

    handleEdit() {
        this.setState({isEditable: true})
    }

    render() {
        const { year, level, major, institution, location, isEditable } = this.state;

        if (isEditable === true) {

            return (
                <div className="editForm">
                <form onSubmit={this.handleSubmit}>
                        <input type="text" value={year} id="year" name="year" onChange={this.handleChange} placeholder="Year Graduated" />
                        <select value={level} id="level" name="level" onChange={this.handleChange}>
                            <option value="" disabled selected>Degree: </option>
                            <option value="Associate">Associate</option>
                            <option value="Bachelor's">Bachelor's</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Master's">Master's</option>
                            <option value="Doctoral">Doctoral</option>
                        </select>
                        <input type="text" value={major} placeholder="Major" id="major" name="major" onChange={this.handleChange} />
                        <input type="text" value={institution} placeholder="Institution" id="institution" name="institution" onChange={this.handleChange} />
                        <input type="text" value={location} placeholder="City, State" id="location" name="location" onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="displayForm">
                <h3>{institution}</h3>
                <p>{location}  --  {year}</p>
                <p>{level} of {major}</p>
                <button onClick={this.handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x" /></button> 
            </div>
        )
    }
    }
}

export default Education;