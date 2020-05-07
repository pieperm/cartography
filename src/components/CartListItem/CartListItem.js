import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import "./CartListItem.scss"

class CartListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-item">
                <h2>{"name"}</h2>
                <p>${"10"} items</p>
                <p>Qty: {"5"}</p>
                <Button>View</Button>
            </div>
        );
    }
}

CartListItem.propTypes = {
    productId: PropTypes.number.isRequired
}


export default CartListItem;