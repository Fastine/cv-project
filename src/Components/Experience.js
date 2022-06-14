import React, { Component } from "react";
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: "",
            startDate: "",
            endDate: "",
            jobTitle: "",
            location: "",
            jobDuties: "",
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
        const { company, startDate, endDate, jobTitle, jobDuties, location, isEditable } = this.state;

        if (isEditable === true) {

            
            return (
                <div className="section">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Company/Project" id="company" name="company" value={company} onChange={this.handleChange} />
                    <input type="date" id="startDate" name="startDate" value={startDate} onChange={this.handleChange}/>
                    <input type="date" id="endDate" name="endDate" value={endDate} onChange={this.handleChange}/>
                    <input type="text" placeholder="Job Title" id="jobTitle" name="jobTitle" value={jobTitle} onChange={this.handleChange}/>
                    <input type="text" placeholder="Location e.g. Chicago, IL" id="location" name="location" value={location} onChange={this.handleChange}/>
                    <input type="text" id="jobDuties" name="jobDuties" value={jobDuties} placeholder="Responsibilities & Achievements" onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{company}</h3>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
                <p>{jobTitle}</p>
                <p>{jobDuties}</p>
                <button onClick={this.handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x"/></button> 
            </div>
        )
    }
    
    }
}

export default Experience;