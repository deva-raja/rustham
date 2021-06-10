import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {};
  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <div className='card login-card' style={{ backgroundColor: 'silver' }}>
          <div className='card-body'>
            <h3 className='text-center text-white font-weight-light mb-4'>
              {this.props.client}LOG IN
            </h3>
            <form action='/product'>
              <div className='form-group'>
                <input type='text' placeholder='First name' className='form-control'></input>
              </div>
              <div className='form-group'>
                <input type='text' placeholder='Password' className='form-control'></input>
              </div>
              <input type='submit' value='Login' className='btn btn-danger btn-block mb-3'></input>
            </form>
            <div className='d-flex justify-content-between mt-4'>
              <p className='text-white text-center font-weight-light'>Login with</p>
              <p className='text-center mb-0'>
                <a href='#' className='social-login-btn icon-fb'>
                  <i className='mdi mdi-facebook-box'></i>
                </a>
                <a href='#' className='social-login-btn icon-twitter'>
                  <i className='mdi mdi-twitter'></i>
                </a>
                <a href='#' className='social-login-btn icon-gmail'>
                  <i className='mdi mdi-gmail'></i>
                </a>
              </p>
              <p>
                New User -<Link to='/signup'>sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
