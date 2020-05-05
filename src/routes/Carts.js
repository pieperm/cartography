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
                <CartListItem name={"Cart1"} price={2.00} quantity={5} store={"Walmart"}/>
            </div>
        );
    }
}

export default Carts;