import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Browse from "./views/Browse";
import Carts from "./views/Carts";
import Product from "./views/Product";
import CartDetails from "./views/CartDetails";
import Orders from "./views/Orders";
import OrderDetails from "./views/OrderDetails";

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

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Navbar>
              <Link to="/browse">Browse</Link>
              <Link to="/carts">Carts</Link>
              <Link to="/orders">Orders</Link>
            </Navbar>
            <Switch>
              <Route exact={true} path="/" component={Browse}/>
              <Route exact={true} path="/browse" component={Browse}/>
              <Route exact={true} path="/carts" component={Carts}/>
              <Route exact={true} path="/orders" component={Orders}/>
              <Route path="/products/:productId" render={({ match }) => {
                const productId = parseInt(match.params.productId)
                return <Product productId={productId}/>
              }}/>
              <Route path="/carts/:cartId" render={({ match }) => {
                const cartId = parseInt(match.params.cartId);
                return <CartDetails cartId={cartId}/>
              }}/>
              <Route path="/orders/:orderId" render={({ match }) => {
                const orderId = parseInt(match.params.orderId);
                return <OrderDetails orderId={orderId}/>
              }}/>
            </Switch>

          </BrowserRouter>
        </div>
    );
  }
}

export default App;
