import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers/index';
import rootReducer from './reducers/index';

// const logger = function({ dispatch, getState }){
//   return function(next){
//     return function(action){
//       //middle ware code
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }
// }

//Modified middleware syntax
const logger = ({ dispatch, getState }) => (next) => (action) => {
  //middle ware code goes here
  if(typeof action !== 'function'){
    console.log('ACTION_TYPE = ',action.type);
  }
  
  next(action);
}
// const Thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if(typeof action == 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }
/* , applyMiddleware(logger) */
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log(store);
// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'new movie'}]
// });

// console.log("AFTER STATE", store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
