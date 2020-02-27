import { 
  LOGIN,
  LOADING,
  SET_ERRORS,
  UPDATE_USER_DETAILS,
  CLEAR_ERRORS,
  STOP_LOADING,
  EDITTING_USER,
  LOGOUT
} from '../types';

const initialState = {
  loading: false,
  credentials: {},
  errors: {},
  authenticated: false,
  editting: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload
      };

    case UPDATE_USER_DETAILS:
      return {
        ...state,
        credentials: action.payload,
        loading: false,
        editting: false
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        errors: {}
      };

    case EDITTING_USER:
      return {
        ...state,
        editting: true,
        errors: {}
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        editting: false
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
