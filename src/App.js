import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Browse from "./pages/Browse";
import Carts from "./pages/Carts";

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
        </BrowserRouter>
    </div>
  );
}

export default App;
