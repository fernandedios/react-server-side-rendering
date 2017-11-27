import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// use object for path declarations instead of typical react-router-dom jsx
// necessary for ssr
export default [
  {
    path: '/',
    ...HomePage, // get component using object spread
    exact: true
  },
  {
    path: '/users',
    ...UsersListPage // get component and loadData using onject spread
  }
];
