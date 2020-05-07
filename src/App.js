import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Browse from "./views/Browse";
import Carts from "./views/Carts";
import Product from "./views/Product";
import CartDetails from "./views/CartDetails";
import Orders from "./views/Orders";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI = async () => {
        await fetch('http://localhost:9000/testAPI')
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar>
                        <Link to="/">Home</Link>
                        <Link to="/browse">Browse</Link>
                        <Link to="/carts">Carts</Link>
                        <Link to="/orders">Orders</Link>
                    </Navbar>
                    <Route exact={true} path="/" render={() => (
                        <h1>Homepage</h1>
                    )}/>
                    <Route exact={true} path="/browse" component={Browse}/>
                    <Route exact={true} path="/carts" component={Carts}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/product/:productId" render={({ match }) => (
                        <Product productId={match.params.productId}/>
                    )}/>
                    <Route path="/cart/:cartId" render={({ match }) => (
                        <CartDetails cartId={match.params.cartId}/>
                    )}/>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;
