import React, {Component} from 'react';
import OrderListItem from "../components/OrderListItem/OrderListItem";

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    async componentDidMount() {
        try {
            await fetch('http://localhost:9000/orders')
                .then(res => {
                    return res.json();
                })
                .then(orders => {
                    this.setState({
                        orders: orders
                    })
                });
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <div className="page">
                <h1>My Orders</h1>
                <h4>In Progress</h4>
                {this.state.orders.map(order => {
                    if(!order.fulfilled) {
                        return <OrderListItem
                            key={order.id}
                            orderId={order.id}
                            readyDate={order.ready_date}
                            deliveryOrPickup={order.delivery_or_pickup}/>
                    } else {
                        return null;
                    }
                })}
                <h4>Completed</h4>
                {this.state.orders.map(order => {
                    if(!!order.fulfilled) {
                        return <OrderListItem
                            key={order.id}
                            orderId={order.id}
                            readyDate={order.ready_date}
                            deliveryOrPickup={order.delivery_or_pickup}/>
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }
}

export default Orders;