import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';

function SellerCardComponent({ seller, setSellerId }) {
  const history = useHistory();

  const handleClick = async () => {
    setSellerId(seller._id);
    const user = localStorage.getItem('user') || null;
    const response = await jwtAuthCheck({ user });
    console.log(response);
    if (response === 'user') {
      return history.push('/product');
    }
    return history.push('/login');
  };

  return (
    <div>
      <div>
        <section className='py-5'>
          <div className='container px-4 px-lg-5 mt-5'>
            <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              <div className='col mb-5'>
                <div className='card' style={{ width: 180 }}>
                  <img
                    className='rounded-circle card-img-top'
                    alt='100x100'
                    src={seller.img}
                    data-holder-rendered='true'
                  ></img>
                  <div className='card-body'>
                    <h5 className='card-title'>{seller.name}</h5>
                    <p className='card-text'>{seller.info}</p>
                      <div
                        onClick={handleClick}
                        className='btn btn-primary'
                      >
                        Go to Products
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SellerCardComponent;
