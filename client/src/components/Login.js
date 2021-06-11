import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../api/UserApi';

function Login({ sellerId }) {
  const [serverError, setServerError] = useState();
  const history = useHistory();

  const userSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(120, 'Too Long!').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = await loginUser(values);
    
    if (data.data) {
      setSubmitting(false);
      resetForm();
      return history.push('/product');
    }

    if (data.error) {
      setServerError(data);
      return setSubmitting(false);
    }
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={userSchema}>
        {({ errors, touched, isSubmitting, values }) => (
          <Form className='form' id='a-form'>
            <h2 className='form_title title'>Login Form</h2>

            <Field className='form__input' name='email' placeholder='Email' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.email}</div>
            )}
            {touched.email && errors.email && <div className='form-error'>{errors.email}</div>}

            <Field className='form__input' name='password' placeholder='Password' />
            {serverError && serverError.error && (
              <div className='form-error'>{serverError.error.password}</div>
            )}
            {touched.password && errors.password && (
              <div className='form-error'>{errors.password}</div>
            )}

            <button
              disabled={isSubmitting}
              type='submit'
              className='form__button button submit message-button'
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p>
        new User -<Link to='/signup'>signup</Link>
      </p>
    </div>
  );
}

export default Login;
