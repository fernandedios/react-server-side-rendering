import React from 'react';
import { renderRoutes } from 'react-router-config';

// get all routes produced by the matchRoutes process as prop
const App = ({ route }) => {
  // render child components using renderRoutes
  return (
    <div>
      <h1>Header</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default { component: App };
