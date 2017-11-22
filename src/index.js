import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // make public folder accessible

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
