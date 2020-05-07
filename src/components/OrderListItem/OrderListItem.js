import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

class OrderListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-item">
                <h2>#{this.props.orderId}</h2>
                <p>Delivery</p>
                <p>Placed 3/1/2020</p>
                <p>Ready 5/1/2020</p>
                <Button>Details</Button>
            </div>
        );
    }
}

OrderListItem.propTypes = {
    orderId: PropTypes.number.isRequired
}

export default OrderListItem;