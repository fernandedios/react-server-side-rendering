// startup point for client side
import 'babel-polyfill'; // necessary for methods like async-await
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import Routes from './Routes';
import reducers from './reducers';

// setup a custom axios instance for client use
// baseURL prepends to request urls
const axiosInstance = axios.create({
  baseURL: '/api'
});

// use window.INITIAL_STATE as store's initial state
// to remove error due to mismatch in client rehydration
// pass custom axios instance to all our action creators
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

// hydrate app on THE SAME div as it is on the server side
// server and client MUST have the same set of html
// <div id="root" />
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>, document.querySelector('#root')
);
