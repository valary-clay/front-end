import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActionCreators';


import './style.scss';


const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'CLEAR_ERRORS'});
  },[dispatch])

  const history = useHistory();
  const errors = useSelector(state => state.user.errors, shallowEqual);
  const formik = useFormik({

    initialValues: {
        email: '',
        password:'',
        errors: ''
      },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please provide an email'),
      password: Yup.string()
        .required('Please provide a password')
        .min(8, 'Password too short'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      dispatch(userLogin(values, history, setSubmitting));
    },
  });


  return (
    <div className="auth-page">
      <div className="logo">
        <Link to="/" title="OneAcre">One Acre</Link>
      </div>

      <div className="auth-container">
        <form className="auth-form" onSubmit={formik.handleSubmit}>
          <h1 className="auth-title">Login</h1>

          <p className="help is-danger center">{errors && errors.error}</p>
          
          <div className="error"></div>

          <div className="field">
            <div className="control">
              <input 
                id="email"
                type="text" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className="input is-primary" 
                placeholder="Email"
              />
            </div>
          { formik.touched.email && formik.errors.email? (
            <p className="help is-danger">{formik.errors.email}</p>
          ): null }
          </div>

          <div className="field">
            <div className="control">
              <input 
                type="password" 
                name="password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="input is-primary"
                placeholder="Password"/>
            </div>
          { formik.touched.password && formik.errors.password? (
            <p className="help is-danger">{formik.errors.password}</p>
          ): null }
          </div>

          <button 
            type="submit" 
            className={`button is-fullwidth is-success ${formik.isSubmitting? 'is-loading': ''}`}
            style={{ marginTop: '0.9rem' }}>
            Login
          </button>
        </form>

        <div className="auth-footer">
          <div>
            New to One Acre? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
