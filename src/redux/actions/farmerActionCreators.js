
import { axiosWithAuth } from '../../utils/axiosAuth';
import {
  LOADING_UI,
  CREATE_FARM,
  DELETE_FARM,
  SEARCH_QUERY_CHANGE,
  SET_ERRORS,
} from '../types';


export const addFarm = (farm, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
  .post('/farms', {...farm, name: farm.farmName})
    .then(({data}) => {
      dispatch({type: CREATE_FARM, payload: data.data[0]})  
      window.location.reload(true);
    })
    .catch(err => {
      let error = err.response? err.response.data: err
      dispatch({type: SET_ERRORS, payload: error})
    })
}

export const getOwnFarms = (history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .get('/farms')
    .then(({ data }) => {
      dispatch({
        type: 'GET',
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
      let error = err.response? err.response.data: err
      dispatch({type: SET_ERRORS, payload: error})
    });
};


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
      let error = err.response? err.response.data: err
      dispatch({type: SET_ERRORS, payload: error})
    });
};

export const searchQueryChange = value => {
  return {
    type: SEARCH_QUERY_CHANGE,
    payload: value
  };
};

export const deleteFarm = id => dispatch => {
  dispatch({ type: LOADING_UI });
  axiosWithAuth()
    .delete(`/farms/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_FARM
      });
    });
};
