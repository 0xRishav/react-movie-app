import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
import movies from './reducers/index';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

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
// export const StoreContext = createContext();
// console.log('store context', StoreContext);




// export function connect(callback){
//   return function(Component){
//       class ConnectedComponent extends React.Component{
//         constructor(props){
//           super(props);
//           this.unsubscribe = this.props.store.subscribe(()=>this.forceUpdate());
//         }
//         componentDidMount(){
//           console.log('ConnectedComponent mounted');
//         }
//         componentWillUnmount(){
//           this.unsubscribe();
//         }
//         render(){
//           const {store} = this.props;            
//           const state = store.getState();
//           const stateToBePassedAsProps = callback(state);
          
//           return(
//             <Component {...stateToBePassedAsProps} dispatch = {store.dispatch} getState = {store.getState}/>
//           );

//         }
//       }
//       class ConnectedComponentWrapper extends React.Component{
//         componentDidMount(){
//           console.log('ConnectedComponentWrapper mounted');
//         }
//         render(){
//           return(
//             <StoreContext.Consumer>
//               {(store)=>{return <ConnectedComponent store = {store}/>}}
//             </StoreContext.Consumer>
//           );
//         }
//       }
//       return ConnectedComponentWrapper;
//   };
// }

store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{name: 'new movie'}]
});

// console.log("AFTER STATE", store.getState())
// class Provider extends React.Component{
//   componentDidMount(){
//     console.log('provider mounted');
//   }
//   render(){
//     const {store} = this.props;
//     console.log('this is store', store)
//     return(
//       <StoreContext.Provider value = {store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
