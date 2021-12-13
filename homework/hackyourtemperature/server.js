import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather', (req, res) => {
  const city = req.body.cityName;
  res.json(city);
});

app.listen(3000, () => console.log('servery running...'));
