import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtAuthCheck } from '../api/jwtApi';

function SellerCardComponent({ seller, setSellerId }) {
  const [page, setPage] = useState('login');

  const handleClick = async () => {
    setSellerId(seller._id);
    const user = localStorage.getItem('user') || null;
    const response = await jwtAuthCheck({ user });
    localStorage.setItem('sellerId', seller._id);
    console.log(seller, 'logedin');
    setPage(response);
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
                    {page && (
                      <Link
                        onClick={handleClick}
                        to={page === 'user' ? '/product' : '/login'}
                        className='btn btn-primary'
                      >
                        Go to Products
                      </Link>
                    )}
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
