import React, { Component } from "react";

class Education extends Component {
    constructor (props) {
        super(props)
        this.state = {
            year: "",
            level: "",
            major: "",
            institution: "",
            location: ""
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
                    <label htmlFor="year">
                        Year Completed:
                        <input type="text" value={this.state.year} id="year" name="year" onChange={this.handleChange} placeholder="YYYY" pattern="[1-2][0-9]{3}" />
                    </label>
                    <label htmlFor="level">
                        Level Completed:
                        <select value={this.state.level} id="level" name="level" onChange={this.handleChange}>
                            <option value="Associate">Associate</option>
                            <option value="Bachelor's">Bachelor's</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Master's">Master's</option>
                            <option value="Doctoral">Doctoral</option>
                        </select>
                    </label>
                    <label htmlFor="major">
                        Major:
                        <input type="text" value={this.state.major} id="major" name="major" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="institution">
                        Institution:
                        <input type="text" value={this.state.institution} id="institution" name="institution" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="location">
                        Location:
                        <input type="text" value={this.state.location} id="location" name="location" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Education;