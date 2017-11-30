import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// use object for path declarations instead of typical react-router-dom jsx
// necessary for ssr
export default [
  {
    ...App, // get component using object spread, no path so it is ALWAYS visible
    routes: [
      {
        path: '/',
        ...HomePage, // get component using object spread
        exact: true
      },
      {
        path: '/users',
        ...UsersListPage // get component and loadData using object spread
      }
    ]
  }
];
