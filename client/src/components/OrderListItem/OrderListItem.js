import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

class OrderListItem extends Component {

    render() {
        return (
            <div className="list-item">
                <h2>#{this.props.orderId}</h2>
                <p>{this.props.deliveryOrPickup}</p>
                <p>Ready {this.props.readyDate}</p>
                <Button link={`/orders/${this.props.orderId}`}>Details</Button>
            </div>
        );
    }
}

OrderListItem.propTypes = {
    orderId: PropTypes.number.isRequired,
    deliveryOrPickup: PropTypes.string.isRequired,
    readyDate: PropTypes.string.isRequired
}

export default OrderListItem;