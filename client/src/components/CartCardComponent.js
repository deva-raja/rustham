function CartCardComponent({ cartProduct }) {
  // will get all product details from cardProduct

  return (
    <div className='card mb-12' style={{ maxWidth: 540 }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img style={{width:'200px',height:'200px',paddingRight:'20px'}} src={cartProduct.img} alt='...'></img>
        </div>  
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{cartProduct.name}</h5>
            <p className='card-text'>{cartProduct.details}</p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCardComponent;
