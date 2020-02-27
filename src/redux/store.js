import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { farmReducer } from './reducers/farmReducer';

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};


const rootReducer = combineReducers({
  user: userReducer,
  farm: farmReducer
});


const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

// store redux state to localStorage everytime a state update occurs
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
