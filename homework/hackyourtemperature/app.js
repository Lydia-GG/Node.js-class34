import express from 'express';
import fetch from 'node-fetch';
import keys from './sources/keys.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys}`
    );
    const weatherData = await response.json();
    if (response.ok) {
      res.json(
        `The temperature in ${weatherData.name} is ${weatherData.main.temp} °F`
      );
    } else {
      res.status(400).json({ weatherText: 'City is not found!' });
    }
  } catch (err) {
    console.log(err.message);
  }
});

export default app;
