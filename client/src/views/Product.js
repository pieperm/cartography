import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            stock: 0,
            price: 0,
            description: null,
            manufacturer: '',
            store: '',
            location: ''
        }
    }

    async componentDidMount() {
        try {
            await fetch(`http://localhost:9000/products/${this.props.productId}`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    let [product] = res;
                    this.setState({
                        name: product.name,
                        manufacturer: product.manufacturer,
                        description: product.description
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
                <p>5 left in stock</p>
                <p>$19.99</p>
                <h3>Details</h3>
                <p>Description: {this.state.description || "No description available"}</p>
                <p>Manufacturer: {this.state.manufacturer}</p>
                <p>Sold at: Walmart</p>
                <p>Location: NY</p>
            </div>
        );
    }
}

Product.propTypes = {
    productId: PropTypes.number.isRequired
}

export default Product;