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
            <div className="cart-list-item">
                <h2>{this.props.name}</h2>
                <p>${this.props.price}</p>
                <p>Qty: {this.props.quantity}</p>
                <p>{this.props.store}</p>
                <div>
                    <Button>REMOVE</Button>
                    <Button>VIEW</Button>
                </div>
            </div>
        );
    }
}

CartListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    store: PropTypes.string.isRequired
}


export default CartListItem;