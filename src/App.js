import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Browse from "./routes/Browse";
import Carts from "./routes/Carts";
import Product from "./routes/Product";
import CartDetails from "./routes/CartDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/browse">Browse</Link>
                <Link to="/carts">Carts</Link>
            </Navbar>
            <Route exact={true} path="/browse" component={Browse}/>
            <Route exact={true} path="/" render={() => (
                <h1>Homepage</h1>
            )}/>
            <Route exact={true} path="/carts" component={Carts}/>
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

export default App;
