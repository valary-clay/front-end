import axios from 'axios';
import { 
  LOADING,
  LOGIN,
  SET_ERRORS,
  UPDATE_USER_DETAILS,
  EDITTING_USER,
  LOGOUT
}
from '../types';
import { axiosWithAuth } from '../../utils/axiosAuth';

import { baseUrl } from '../../config/index';

export const userLogin = (userData, history, setSubmitting) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/login`, {
      email: userData.email,
      password: userData.password
    })
    .then(({ data }) => {
      const user = data.data[0].user;
      dispatch({
        type: LOGIN, payload: user
      });
      const token = data.data[0].access_token;
      localStorage.setItem('token', `${token}`);
      history.push('/dashboard/profile');
      setSubmitting(false);
    })
    .catch(err => {
      let error = err.response? err.response.data.error: err.message
      dispatch({
        type: SET_ERRORS,
        payload: { error },
      });
      setSubmitting(false);
    });
};

export const userSignUp = (userData, history, setSubmitting) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${baseUrl}/auth/register`, userData)
    .then(({ data }) => {
      const user = data.data[0].user;
      dispatch({
        type: LOGIN, payload: user
      });
      const token = data.data[0].access_token;
      localStorage.setItem('token', `${token}`);
      history.push('/dashboard/profile');
      setSubmitting(false);
    })
    .catch(err => {
      let error = err.response? err.response.data.error: err.message
      dispatch({
        type: SET_ERRORS,
        payload: { error },
      });
      setSubmitting(false);
    });
};

export const updateUser = (user, field, newData) => dispatch => {
  dispatch({ type: EDITTING_USER })
  axiosWithAuth()
    .patch(`/users/${user.id}/${field}`, newData)
    .then(({ data }) => {
      const user = data.data[0];
      dispatch({
        type: UPDATE_USER_DETAILS, payload: user
      });
      localStorage.setItem('profile', JSON.stringify(user));

    })
    .catch(err => {
      let error = err.response? err.response.data.error: err.message
      dispatch({
        type: SET_ERRORS,
        payload: {error},
      });
    });
};

export const logout = history => dispatch => {
  localStorage.removeItem('token');
  localStorage.setItem('reduxState', null);
  dispatch({ type: LOGOUT });
  history.push('/login');
  window.location.reload(true);
};
