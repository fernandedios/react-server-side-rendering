import React from 'react';

// receive the context (renamed internally as staticContext)
// - does NOT exist on client render
// - default as empty object if it does not exists
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true; // mark context with notFound property to true
  return <h1>Oopps, route not found</h1>;
};

export default { component: NotFoundPage };
