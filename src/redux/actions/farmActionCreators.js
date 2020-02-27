import { axiosWithAuth } from '../../utils/axiosAuth';
import {
  LOADING_UI,
  GET_ALL_FARMS,
  CREATE_FARM,
  DELETE_FARM,
  SET_ERRORS,
  GET_FUNDED_FARMS,
  FUND_FARM,
  UPDATE_FARM
} from '../types';


export const getFundedFarms = (history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .get('/funded_farms')
    .then(({ data }) => {
      dispatch({
        type: GET_FUNDED_FARMS,
        payload: data.data
      });
    })
    .catch(err => {
      // redirect to login if unauthorized or token expires

      if (err.response && err.response.status === 401){
        history.push('/login');
      }
      if (err.response && err.response.status === 422){
        history.push('/login');
      }
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    });
};


export const getAllFarms = (history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .get('/farms')
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_FARMS,
        payload: data.data
      });
    })
    .catch(err => {
      // redirect to login if unauthorized or token expires
      if (err.response && err.response.status === 401){
        history.push('/login');
        return;
      }
      if (err.response && err.response.status === 422){
        history.push('/login');
        return;
      }
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    });
};

export const fundFarm = (history, farm) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
  .post('/funded_farms', farm)
    .then(({data}) => {
      dispatch({type: FUND_FARM, payload: data.data})  
      window.location.reload(true);
    })
    .catch(err => {
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    })
}


export const createFarm = farmDetails => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .post('/farms', farmDetails)
    .then(({ data }) => {
      dispatch({
        type: CREATE_FARM,
        payload: data
      });
    })
    .catch(err => {
      dispatch(getAllFarms());
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    });
};


export const deleteFarm = id => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .delete(`/farms/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_FARM
      });
    })
    .catch(err => {
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    })
};

export const updateFarm = (farm, field, values) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
  .patch(`/farms/${farm.id}/${field}`, values)
    .then(({data}) => {
      dispatch({type: UPDATE_FARM, payload: data.data[0]})  
    })
    .catch(err => {
      debugger
      let error = err.response? err.response.data.error: err.message
      dispatch({type: SET_ERRORS, payload: { error }})
    })
}
