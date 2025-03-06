import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
router.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  console.log(lat, lon);
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  console.log(API_KEY);
  if (!lat || !lon || !API_KEY) {
    return res.status(400).send('Missing query parameters.');
  }
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return res.json(response.data);
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return res.status(500).send('Error fetching weather data.');
  }
});
export default router;