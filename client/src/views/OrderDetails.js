import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OrderDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderType: '',
            cost: 0
        }
    }

    async componentDidMount() {
        try {
            await fetch(`http://localhost:9000/orders/${this.props.orderId}`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    let [order] = res;
                    this.setState({
                        orderType: order.delivery_or_pickup,
                        cost: order.cost
                    })
                })
        } catch (e) {
            console.error(e.message);
        }
    }

    render() {
        return (
            <div className="page">
                <h1>Order #{this.props.orderId}</h1>
                <p>Cart(s):</p>
                <h3>Order Details</h3>
                <div className="order-details">
                    <p>Order Type: {this.state.orderType}</p>
                    <p>Delivery Address:</p>
                    <p>Expected Arrival:</p>
                    <p>You paid: {this.state.cost}</p>
                </div>
                <h3>Delivery Details</h3>
                <div>
                    <p>Status:</p>
                    <p>Employees:</p>
                </div>
            </div>
        );
    }

}

OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired
}

export default OrderDetails;