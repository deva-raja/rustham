import React, { useEffect, useState } from 'react';
import { showSingleProduct } from '../api/ProductApi';

function SingleProductComponent({ productId }) {
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    async function getData() {
      const product = await showSingleProduct(productId);
      console.log(product.product[0]);
      setSelectedProduct(product.product[0]);
    }
    getData();
  }, [productId]);

  return (
    <div>
      {selectedProduct && (
        <section className='py-5'>
          <div className='container px-4 px-lg-5 my-5'>
            <div className='row gx-4 gx-lg-5 align-items-center'>
              <div className='col-md-6'>
                <img className='card-img-top mb-5 mb-md-0' src={selectedProduct.img} alt='...' />
              </div>
              <div className='col-md-6'>
                <div className='small mb-1'>SKU: BST-498</div>
                <h1 className='display-5 fw-bolder'>Shop item template</h1>
                <div className='fs-5 mb-5'>
                  <span className='text-decoration-line-through'>
                    ${selectedProduct.price * 1.8}
                  </span>
                  <span>${selectedProduct.price}</span>
                </div>
                <p className='lead'>{selectedProduct.details}</p>
                <div className='d-flex'>
                  <input
                    className='form-control text-center me-3'
                    id='inputQuantity'
                    type='num'
                    value='1'
                    style={{ maxWidth: 48 }}
                  />
                  <button className='btn btn-outline-dark flex-shrink-0' type='button'>
                    <i className='bi-cart-fill me-1'></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SingleProductComponent;
