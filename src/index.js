import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // make public folder accessible

app.get('*', (req, res) => {
  const store = createStore();

  // init and load data into the store


  res.send(renderer(req, store));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
