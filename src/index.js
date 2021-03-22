import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Container/Home/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const createStore = redux.createStore;

const globalState = {
  totalOrder: 5
}

// Reducer
const rootReducer = (state = globalState, action) => {
  return state;
}

// store
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <Home />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
