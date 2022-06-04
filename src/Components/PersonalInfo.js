import React, { Component } from "react"
import "../Styles/forms.css"

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
            isEditable: false
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

    handleSubmit () {

    }

    render() {
        const { data } = this.state;

        return (
            <div className="section">
                <h2>Personal Information</h2>
                <form>
                        <input type="text" value={data.firstName} placeholder="First Name" id="firstName" name="firstName" onChange={this.handleChange} />
                        <input type="text" value={data.lastName} placeholder="Last Name" id="lastName" name="lastName" onChange={this.handleChange} />
                        <input type="text" value={data.address}  placeholder ="City, State" id="address" name="address" onChange={this.handleChange}/>
                        <input type="tel" value={data.phoneNumber} placeholder="555-555-5555" id="phoneNumber" name="phoneNumber" onChange={this.handleChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                        <input type="email" value={data.email} placeholder="Email" id="email" name="email" onChange={this.handleChange} />
                        <input type="url" value={data.website} placeholder="URL" id="website" name="website" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}        

export default PersonalInfo;