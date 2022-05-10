import React, { Component } from 'react'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: '',
            website: '',
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
                    <label>
                        First Name:
                        <input type="text" value={this.state.firstName} id='firstName' onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" value={this.state.lastName} id='lastName' onChange={this.handleChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.state.address} id='address' onChange={this.handleChange} placeholder ='City, State'/>
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" value={this.state.phoneNumber} id='phoneNumber' onChange={this.handleChange}
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}' placeholder='555-555-5555'/>
                    </label>
                </form>
            </div>
        )
    }
}        

export default PersonalInfo;