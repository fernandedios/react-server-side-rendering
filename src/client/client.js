// startup point for client side
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// hydrate app on THE SAME div as it is on the server side
// <div id="root" />
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
