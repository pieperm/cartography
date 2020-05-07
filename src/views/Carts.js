import React, {Component} from 'react';
import CartListItem from "../components/CartListItem/CartListItem";
import ApiClient from "../ApiClient";

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
                    <CartListItem key={cart.id} productId={cart.id}/>
                ))}
            </div>
        );
    }
}

export default Carts;