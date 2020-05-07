import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <p>{this.props.productId}</p>
                <h1>Product Name</h1>
                <h3>Product image</h3>
                <p>5 left in stock</p>
                <p>$19.99</p>
                <h3>Details</h3>
                <p>Suspendisse hendrerit erat in dui congue ullamcorper. Ut accumsan urna nec gravida facilisis. Duis accumsan purus ut orci varius ultricies. In tempor commodo nibh ut consectetur. Vestibulum ultricies purus non nulla congue, et iaculis est laoreet. Donec ac lorem cursus, laoreet mi ac, finibus nisl. In consectetur, est non sagittis mollis, tortor mauris ultricies augue, in feugiat ipsum lectus ut metus. Praesent sed libero ultrices, pharetra lorem ac, blandit nisi. Maecenas ultricies, risus a porttitor tempus, nulla mi tempus erat, vitae consequat nisl turpis vitae tortor. Integer ligula turpis, venenatis ut volutpat accumsan, viverra quis est. Phasellus id augue a elit ullamcorper iaculis non nec purus. Sed et erat laoreet, faucibus dui eu, bibendum mi. Curabitur vel urna ut neque sagittis eleifend. Nullam faucibus nulla nec dolor scelerisque scelerisque. Curabitur quis ligula eros.</p>
                <p>Manufacturer: manufacturer</p>
                <p>Sold at: Walmart</p>
                <p>Location: NY</p>
            </div>
        );
    }
}

Product.propTypes = {
    productId: PropTypes.string.isRequired
}

export default Product;