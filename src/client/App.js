import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

// get all routes produced by the matchRoutes process as prop
const App = ({ route }) => {
  // render child components using renderRoutes
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // destructure dispatch from store, then return result from dispatch method
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()) 
};
