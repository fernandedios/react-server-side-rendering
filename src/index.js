import 'babel-polyfill'; // necessary for methods like async-await
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

// send requests with /api to proxy server, send to ssr api server
app.use('/api', proxy('http://react-ssr-api.heroku.com', {
  // prevent google oauth issue
  proxyReqOptDecorator(opts) {
    opts.header['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));
app.use(express.static('public')); // make public folder accessible

app.get('*', (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path) // matchRoutes returns an array of components that need to be rendered
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null // execute loadData if it exists, pass redux store
    });

  // wait for all promises to resolve before rendering content
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
