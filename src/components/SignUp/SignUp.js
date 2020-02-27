import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../redux/actions/userActionCreators';

import './style.scss';

const SignUP = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'CLEAR_ERRORS'});
  },[dispatch])

  const history = useHistory();
  const errors = useSelector(state => state.user.errors);

  const formik = useFormik({
    initialValues: {
        email: '',
        password:'',
        password2:'',
        role:'0',
        errors: ''
      },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please provide an email'),
      password: Yup.string()
        .required('Please provide a password')
        .min(8, 'Password too short'),
      password2: Yup.string()
        .required("Passwords don't match")
        .oneOf([Yup.ref('password'), null], "Passwords must match")
    }),
    onSubmit: (values, { setSubmitting }) => {
      dispatch(userSignUp(values, history, setSubmitting));
    },
  });

  return (
    <div className="auth-page">
      <div className="logo">
        <Link to="/" title="OneAcre">One Acre</Link>
      </div>

      <div className="auth-container">
        <form className="auth-form" onSubmit={formik.handleSubmit}>
          <h1 className="auth-title">Create an account</h1>
          
          <p className="help is-danger center">{errors.error}</p>

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

          <div className="field">
            <div className="control">
              <input 
                type="password" 
                name="password2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.password2}
                className="input is-primary"
                placeholder="Confirm password"/>
            </div>
          { formik.touched.password2 && formik.errors.password2? (
            <p className="help is-danger">{formik.errors.password2}</p>
          ): null }
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input 
                  type="radio" 
                  onChange={formik.handleChange}
                  name="role" 
                  value={0}
                  checked
                />
                {' '}I am a Funder
              </label>
              <label className="radio">
                <input 
                  type="radio" 
                  name="role"
                  value={1}
                  onChange={formik.handleChange} />
                {' '}I am a Farmer
              </label>
            </div>
          { formik.errors.role? (
            <p className="help is-danger">{formik.errors.role}</p>
          ): null }
            
          </div>

          <button 
            type="submit" 
            className={`button is-fullwidth is-success ${formik.isSubmitting? 'is-loading': ''}`}
            style={{ marginTop: '0.9rem' }}>
            Create my account
          </button>
        </form>

        <div className="auth-footer">
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
