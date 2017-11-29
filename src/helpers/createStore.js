// server side redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
  // create custom axios instace for server side requests
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com', // full api domain
    headers: { cookie: req.get('cookie') || '' } // extract cookie from req if it exists
  });
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance))); // pass axiosInstance as extra argument

  return store;
};
