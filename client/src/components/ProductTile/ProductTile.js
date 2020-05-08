import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductTile.scss';
import {Link} from "react-router-dom";

class ProductTile extends Component {

    render() {
        return (
            <Link to={`/products/${this.props.productId}`}>
            <div className="tile">
                <h3>{this.props.productName}</h3>
                <div className="inline">
                    <p>$19.99</p>
                    <p>5 left</p>
                </div>
                <p>Walmart</p>
            </div>
            </Link>
        );
    }

}

ProductTile.propTypes = {
    productId: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
}

export default ProductTile;