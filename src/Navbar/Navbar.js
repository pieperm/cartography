import React, {Component} from "react";
import './Navbar.scss';

class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="nav">
            <h1>Cartography</h1>
            <a>Home</a>
            <a>Browse</a>
            <a>Carts</a>
        </div>
        );
    }

}

export default Navbar;