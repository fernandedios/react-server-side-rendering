// startup point for client side
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// hydrate app on THE SAME div as it is on the server side
// server and client MUST have the same set of html 
// <div id="root" />
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, document.querySelector('#root')
);
