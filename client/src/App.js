import React, { useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import ProductBodyComponent from './components/ProductBodyComponent';
import Login from './components/Login';
import About from './components/About';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import SellerBodyComponent from './components/SellerBodyComponent';
import SingleProductComponent from './components/SingleProductComponent';

function App() {
  const [sellerId, setSellerId] = useState();
  const [productId, setProductId] = useState();

  return (
    <Router>
      <div className='App'>
        <NavbarComponent />
        <Switch>
          <Route exact path='/'>
            <SellerBodyComponent setSellerId={setSellerId} />
          </Route>
          <Route exact path='/product'>
            <ProductBodyComponent sellerId={sellerId} setProductId={setProductId} />
          </Route>
          <Route exact path='/productItem'>
            <SingleProductComponent productId={productId} />
          </Route>
          <Route exact path='/login'>
            <Login client='USER ' /> <Login client='SELLER ' />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
