import React, { Component } from "react";
import "../Styles/app.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="header">
            <h1>CV Builder</h1>
        </div>
            )
    }
}

export default Header;