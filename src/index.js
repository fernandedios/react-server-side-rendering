import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // make public folder accessible

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  // include client public/bundle.js on rendered html
  const html = `
    <html>
      <head></head>
      <bdoy>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
