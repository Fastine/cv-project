import React, { Component } from "react"

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
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit () {

    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="firstName">
                        First Name:
                        <input type="text" value={this.state.firstName} id="firstName" name="firstName" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="lastName">
                        Last Name:
                        <input type="text" value={this.state.lastName} id="lastName" name="lastName" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="address">
                        Address:
                        <input type="text" value={this.state.address} id="address" name="address" onChange={this.handleChange} placeholder ="City, State"/>
                    </label>
                    <label htmlFor="phoneNumber">
                        Phone Number:
                        <input type="tel" value={this.state.phoneNumber} id="phoneNumber" name="phoneNumber" onChange={this.handleChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="555-555-5555"/>
                    </label>
                    <label htmlFor="email">
                        E-mail:
                        <input type="email" value={this.state.email} id="email" name="email" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="website">
                        URL:
                        <input type="url" value={this.state.website} id="website" name="website" onChange={this.handleChange}
                            placeholder="Github, LinkedIN, Portfolio"
                        />
                    </label>
                </form>
            </div>
        )
    }
}        

export default PersonalInfo;