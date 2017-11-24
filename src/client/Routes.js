import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

// use object for path declarations instead of typical react-router-dom jsx
// necessary for ssr
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList
  }
];
