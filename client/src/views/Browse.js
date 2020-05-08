import React, {Component} from "react";
import ProductTile from "../components/ProductTile/ProductTile";

class Browse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try {
            await fetch('http://localhost:9000/products')
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
                <h1>Browse</h1>
                {this.state.products.map(product => (
                    <ProductTile
                        key={product.id}
                        productId={product.id}
                        productName={product.name}/>
                ))}
            </div>
        );
    }

}

export default Browse;