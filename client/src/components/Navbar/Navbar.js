import React, {Component} from "react";
import './Navbar.scss';

class Navbar extends Component {

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