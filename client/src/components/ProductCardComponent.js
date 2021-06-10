import React from 'react';
import { Link } from 'react-router-dom';

function ProductCardComponent({ product, setProductId }) {
  const handleClick = () => {
    setProductId(product._id);
  };
  
  return (
    <div>
      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            <div className='col mb-5'>
              <div className='card h-100'>
                <img className='card-img-top' src={product.img} alt='...' />

                <div className='card-body p-4'>
                  <div class='text-center'>
                    <h5 className='fw-bolder'>{product.name}</h5>
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <div class='bi-star-fill'></div>
                      <div class='bi-star-fill'></div>
                      <div class='bi-star-fill'></div>
                      <div class='bi-star-fill'></div>
                      <div class='bi-star-fill'></div>
                    </div>
                    ${product.price}
                  </div>
                  <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div className='text-center'>
                      <Link
                        onClick={handleClick}
                        className='btn btn-outline-dark mt-auto'
                        to='productItem'
                      >
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCardComponent;
