import React, {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";
import './Navbar.scss';

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="nav">
            <h1>Cartography</h1>
            {this.props.children}
        </div>
        );
    }

}

export default Navbar;