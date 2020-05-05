import React, {Component} from 'react';
import CartListItem from "../components/CartListItem/CartListItem";

class Carts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <h1>My Carts</h1>
                <CartListItem productId={1}/>
                <CartListItem productId={2}/>
            </div>
        );
    }
}

export default Carts;