import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductListItem from "../components/ProductListItem/ProductListItem";

class CartDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            products: []
        }
    }

    async componentDidMount() {
        try {
            await fetch(`http://localhost:9000/carts/${this.props.cartId}`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    let [cart] = res;
                    this.setState({
                        name: cart.name,
                        description: cart.description
                    })
                })
        } catch (e) {
            console.error(e.message);
        }

        try {
            await fetch(`http://localhost:9000/carts/${this.props.cartId}/products`)
                .then(res => {
                    return res.json();
                })
                .then(products => {
                    this.setState({
                        products: products
                    })
                })
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <div className="page">
                <h1>{this.state.name}</h1>
                <p>{this.state.description || ''}</p>
                {this.state.products.map(product => (
                    <ProductListItem
                        id={product.id}
                        name={"Product"}
                        price={1.99}
                        quantity={product.quantity}
                        store={"Walmart"}/>
                ))}
            </div>
        );
    }
}

CartDetails.propTypes = {
    cartId: PropTypes.number.isRequired
}

export default CartDetails;