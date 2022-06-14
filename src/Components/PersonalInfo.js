import React, { Component } from "react"
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"
import { isEditable } from "@testing-library/user-event/dist/utils"

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            email: "",
            website: "",
            isEditable: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange (e) {
        this.setState({
                [e.target.id]: e.target.value
            
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({isEditable: false})
    }

    handleEdit() {
        this.setState({isEditable: true})
    }

    render() {
        const { firstName, lastName, address, phoneNumber, email, website, isEditable } = this.state;

        if (isEditable === true) {
            return (
                <div className="section">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={firstName} placeholder="First Name" id="firstName" name="firstName" onChange={this.handleChange} />
                    <input type="text" value={lastName} placeholder="Last Name" id="lastName" name="lastName" onChange={this.handleChange} />
                    <input type="text" value={address}  placeholder ="City, State" id="address" name="address" onChange={this.handleChange}/>
                    <input type="tel" value={phoneNumber} placeholder="555-555-5555" id="phoneNumber" name="phoneNumber" onChange={this.handleChange} />
                    <input type="email" value={email} placeholder="Email" id="email" name="email" onChange={this.handleChange} />
                    <input type="text" value={website} placeholder="URL" id="website" name="website" onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="2x" /></button>
                </form>
            </div>
        )
    }
    else {
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{website}</p>
            <button onClick={this.handleEdit}><FontAwesomeIcon icon={faPenToSquare} size="2x" /></button> 
        </div>
        )
}
    
    }
}        

export default PersonalInfo;