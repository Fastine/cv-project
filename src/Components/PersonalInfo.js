import React, { useState, useEffect } from "react"
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"
import { isEditable } from "@testing-library/user-event/dist/utils"

const PersonalInfo = () => {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [address, setAddress] = useState("");
        const [email, setEmail] = useState("");
        const [website, setWebsite] = useState("");
        const [isEditable, setIsEditable] = useState(true);
    

    const handleSubmit = (e) => { 
        e.preventDefault();
        setIsEditable(false);
    }

    const handleEdit = () => {
        setIsEditable(true);
    }


        if (isEditable === true) {
            return (
                <div className="editForm">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" id="firstName" name="firstName"/>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" id="lastName" name="lastName"/>
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder ="City, State" id="address" name="address"/>
                    <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="555-555-5555" id="phoneNumber" name="phoneNumber"/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" id="email" name="email"/>
                    <input type="text" value={website} onChange={e => setWebsite(e.target.value)} placeholder="URL" id="website" name="website" />
                    <button onSubmit={handleSubmit}><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    }
        else {
            return (
            <div className="displayForm">
                <h3>{firstName} {lastName}</h3>
                <p>{address}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
                <p>{website}</p>
                <button onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x" /></button> 
            </div>
        )
}
    
    
}        

export default PersonalInfo;