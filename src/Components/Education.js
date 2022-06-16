import React, { useState } from "react";
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

const Education = () => {
    // 
    // State
    // 
    const [year, setYear] = useState("");
    const [level, setLevel] = useState("");
    const [major, setMajor] = useState("");
    const [institution, setInstitution] = useState("");
    const [location, setLocation] = useState("");
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
                    <input type="text" value={year} id="year" name="year" onChange={e => setYear(e.target.value)} placeholder="Year Graduated" />
                    <select value={level} id="level" name="level" onChange={e => setLevel(e.target.value)}>
                        <option value="" disabled selected>Degree: </option>
                        <option value="Associate">Associate</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Master's">Master's</option>
                        <option value="Doctoral">Doctoral</option>
                    </select>
                    <input type="text" value={major} placeholder="Major" id="major" name="major" onChange={e => setMajor(e.target.value)} />
                    <input type="text" value={institution} placeholder="Institution" id="institution" name="institution" onChange={e => setInstitution(e.target.value)} />
                    <input type="text" value={location} placeholder="City, State" id="location" name="location" onChange={e => setLocation(e.target.value)} />
                    <button onSubmit={handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="displayForm">
                <h3>{institution}</h3>
                <p>{location}  --  {year}</p>
                <p>{level} of {major}</p>
                <button onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x" /></button> 
            </div>
        )
    }
}


export default Education;