import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>{this.props.label}
                <input
                    type={this.props.type}
                    value={this.props.value || ''}/>
            </label>
        );
    }
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
}

Input.defaultProps = {
    type: 'text'
}

export default Input;