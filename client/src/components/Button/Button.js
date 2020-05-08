import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './Button.scss';

class Button extends Component {

    render() {
        return (
            <Link to={this.props.link}>
                <button className="button">{this.props.children}</button>
            </Link>
        );
    }

}

Button.propTypes = {
    link: PropTypes.string.isRequired
}

export default Button;