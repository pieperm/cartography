import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductListItem from "../components/ProductListItem/ProductListItem";

class CartDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
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
    }

    render() {
        return (
            <div className="page">
                <h1>{this.state.name}</h1>
                <p>{this.state.description || ''}</p>
                <ProductListItem
                    id={1000}
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