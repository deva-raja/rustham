import React, { useEffect, useState } from 'react';
import { showSellerProducts } from '../api/ProductApi';
import ProductCardComponent from './ProductCardComponent';

function ProductBodyComponent({ sellerId, setProductId }) {
  const [productArray, setProductArray] = useState();

  useEffect(() => {
    async function getData() {
      const product = await showSellerProducts(sellerId);
      setProductArray(product.product);
    }
    getData();
  }, [sellerId]);

  return (
    <div>
      {productArray &&
        productArray.map((product, index) => (
          <ProductCardComponent key={index} product={product} setProductId={setProductId} />
        ))}
    </div>
  );
}

export default ProductBodyComponent;
