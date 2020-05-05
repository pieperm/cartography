import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../components/Button/Button";
import CartListItem from "../components/CartListItem/CartListItem";
import ProductListItem from "../components/ProductListItem/ProductListItem";

class CartDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <h1>My First Cart</h1>
                <p>{this.props.cartId}</p>
                <ProductListItem
                    name={"Milk"}
                    price={1.99}
                    quantity={2}
                    store={"Walmart"}/>
            </div>
        );
    }
}

CartDetails.propTypes = {
    cartId: PropTypes.number.isRequired
}

export default CartDetails;