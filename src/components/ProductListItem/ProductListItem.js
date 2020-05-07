import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import "./ProductListItem.scss";

class ProductListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-item">
                <h2>{this.props.name}</h2>
                <p>${this.props.price}</p>
                <p>Qty: {this.props.quantity}</p>
                <p>{this.props.store}</p>
                <div>
                    <Button>Remove</Button>
                    <Button>View</Button>
                </div>
            </div>
        );
    }
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    store: PropTypes.string.isRequired
}

export default ProductListItem;