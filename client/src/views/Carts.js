import React, {Component} from 'react';
import CartListItem from "../components/CartListItem/CartListItem";

class Carts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carts: []
        }
    }

    async componentDidMount() {
        try {
            await fetch('http://localhost:9000/carts')
                .then(res => {
                    return res.json();
                })
                .then(carts => {
                    this.setState({
                        carts: carts
                    });
                })
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <div className="page">
                <h1>My Carts</h1>
                {this.state.carts && this.state.carts.map(cart => (
                    <CartListItem
                        key={cart.cartid}
                        cartId={cart.cartid}
                        name={cart.name}
                        numItems={0}
                        description={cart.description}
                    />
                ))}
            </div>
        );
    }
}

export default Carts;