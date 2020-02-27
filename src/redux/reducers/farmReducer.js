import {
  GET_ALL_FARMS,
  CREATE_FARM,
  SEARCH_QUERY_CHANGE,
  LOADING_UI,
  GET_FUNDED_FARMS,
  SET_ERRORS,
  CLEAR_ERRORS,
  FUND_FARM,
  SUCCESS,
  UPDATE_FARM,
  DELETE_FARM
} from '../types';

const initialState = {
  allFarms: [],
  fundedFarms: [],
  showModal: false,
  searchQuery: '',
  loading: false,
  errors: {},
  error: '',
  showNotification: false
};

export const farmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FARMS:
      return {
        ...state,
        loading: false,
        showNotification: false,
        allFarms: action.payload
      };

    case GET_FUNDED_FARMS:
      return {
        ...state,
        loading: false,
        showNotification: false,
        fundedFarms: action.payload
      };

    case CREATE_FARM:
      return {
        ...state,
        loading: false,
        showNotification: true,
        allFarms: [...state.allFarms, action.payload]
      };

    case UPDATE_FARM:
      return {
        ...state,
        loading: false,
        showNotification: false,
        allFarms: state.allFarms.map(farm =>
          farm.id === action.payload.id ? action.payload : farm
        )
      };

    case LOADING_UI:
      return {
        ...state,
        loading: true
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        error: action.payload,
        loading: false
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
        error: '',
        loading: false,
      };

    case FUND_FARM:
      return {
        ...state,
        loading: false,
        fundedFarms: [...state.fundedFarms, ...action.payload]
      }

    case SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: action.payload
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        showNotification: false
      };

    case DELETE_FARM:
      return {
        ...state,
        loading: false,
        allFarms: state.allFarms.filter(
          farm => farm.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
