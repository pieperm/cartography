import React, {Component} from 'react';
import OrderListItem from "../components/OrderListItem/OrderListItem";

class Orders extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <h1>My Orders</h1>
                <h4>In Progress</h4>
                <OrderListItem orderId={1}/>
                <h4>Completed</h4>
                <OrderListItem orderId={2}/>
            </div>
        );
    }
}

export default Orders;