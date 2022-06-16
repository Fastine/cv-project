import React, { useState } from "react";
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

const Experience = () => {

    // 
    // State
    // 
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobDuties, setJobDuties] = useState("");
    const [isEditable, setIsEditable] = useState(true);

    // 
    // Helpers
    // 
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditable(false);
    }

    const handleEdit = () => {
        setIsEditable(true);
    }

    // 
    // Render Logic
    // 
    if (isEditable === true) {
        return (
            <div className="editForm">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Company/Project" id="company" name="company" value={company} onChange={e => setCompany(e.target.value)} />
                    <input type="date" id="startDate" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                    <input type="date" id="endDate" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)}/>
                    <input type="text" placeholder="Job Title" id="jobTitle" name="jobTitle" value={jobTitle} onChange={e => setJobTitle(e.target.value)}/>
                    <input type="text" placeholder="Location e.g. Chicago, IL" id="location" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
                    <input type="text" id="jobDuties" name="jobDuties" value={jobDuties} placeholder="Responsibilities & Achievements" onChange={e => setJobDuties(e.target.value)}/>
                    <button onSubmit={handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="displayForm">
                <h3>{company}</h3>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
                <p>{jobTitle}</p>
                <p>{jobDuties}</p>
                <button onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x"/></button> 
            </div>
        )
    }
}

export default Experience;