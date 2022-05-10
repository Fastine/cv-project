import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'startDate': '',
            'endDate': '',
            'jobTitle': '',
            'location': '',
            'jobDuties': ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <form>
                    <label>

                    </label>
                </form>
            </div>
        )
    }
}

export default Experience;