import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
  // pass REQUIRED property - context to StaticRouter to avoid error
  // StaticRouter needs to know path via req object
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // include client public/bundle.js on rendered html
  return `
    <html>
      <head></head>
      <bdoy>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
