import 'babel-polyfill'; // necessary for methods like async-await
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

// send requests with /api to proxy server, proxy to access ssr api server
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    // prevent google oauth issue
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'; // oauth address redirection
      return opts;
    }
  })
);

app.use(express.static('public')); // make public folder accessible

app.get('*', (req, res) => {
  const store = createStore(req); // pass req object

  const promises = matchRoutes(Routes, req.path) // matchRoutes returns an array of components that need to be rendered
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null; // execute loadData if it exists, pass redux store
    }).map(promise => {
      if(promise) { // if not null
        // wrap in new promise, wait for requests to either resolve or reject
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve); // manually resolve
        });
      }
    });

  // wait for all promises to resolve before rendering content
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context); // pass along context

    // console.log(context);

    // if context.url exists, a redirect should happen
    // context.url is populated by the Redirect component of the react-router-dom
    if (context.url) {
      return res.redirect(301, context.url);
    }

    // check context if property notFound exists
    if(context.notFound) {
      res.status(404); // set status to 404
    }

    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
