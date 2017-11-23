import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
  // pass REQUIRED property - context to StaticRouter to avoid error
  // StaticRouter needs to know path via req object
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
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
