import React, { Component } from "react"
import "../Styles/forms.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                email: "",
                website: "",
            },
            isEditable: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            data: {
                [e.target.id]: e.target.value
            }
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(e);
    }

    render() {
        const { data, isEditable } = this.state;

        {if (isEditable === true) {
            return (
                <div className="section">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={data.firstName} placeholder="First Name" id="firstName" name="firstName" onChange={this.handleChange} />
                    <input type="text" value={data.lastName} placeholder="Last Name" id="lastName" name="lastName" onChange={this.handleChange} />
                    <input type="text" value={data.address}  placeholder ="City, State" id="address" name="address" onChange={this.handleChange}/>
                    <input type="tel" value={data.phoneNumber} placeholder="555-555-5555" id="phoneNumber" name="phoneNumber" onChange={this.handleChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                    <input type="email" value={data.email} placeholder="Email" id="email" name="email" onChange={this.handleChange} />
                    <input type="url" value={data.website} placeholder="URL" id="website" name="website" onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit} ><FontAwesomeIcon icon={faFloppyDisk} size="xl" /></button>
                </form>
            </div>
        )
    }
    else {
    return (
        <div>
            <h3>{data.firstName} {data.lastName}</h3>
            <span>{data.address}</span>
            <span>{data.phoneNumber}</span>
            <span>{data.email}</span>
            <span>{data.url}</span>
            <button><FontAwesomeIcon icon={faPenToSquare} /></button> 
        </div>
        )
}
    }
    }
}        

export default PersonalInfo;