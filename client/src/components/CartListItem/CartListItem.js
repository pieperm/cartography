import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import "./CartListItem.scss"

class CartListItem extends Component {

    render() {
        return (
            <div className="list-item">
                <h2>{this.props.name}</h2>
                <p>{this.props.numItems} items</p>
                <p>{this.props.description || ''}</p>
                <Button link={`/carts/${this.props.cartId}`}>View</Button>
            </div>
        );
    }
}

CartListItem.propTypes = {
    cartId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    numItems: PropTypes.number.isRequired,
    description: PropTypes.string
}


export default CartListItem;