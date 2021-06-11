import React, { useEffect, useState } from 'react';
import { showCartProduct } from '../api/ProductApi';
import CartCardComponent from './CartCardComponent';

function Cart({ cartProducts }) {
  const [cartProductsArray, setCartProductsArray] = useState([]);

  useEffect(() => {
    async function getData() {
      const product = await showCartProduct(cartProducts);
      console.log(product);
      setCartProductsArray(product.product);
    }
    getData();
  }, [cartProducts]);

  return (
    <div>
      {cartProductsArray.length !== 0 &&
        cartProductsArray.map((cartProduct, index) => (
          <CartCardComponent key={index} cartProduct={cartProduct} />
        ))}
    </div>
  );
}

export default Cart;
