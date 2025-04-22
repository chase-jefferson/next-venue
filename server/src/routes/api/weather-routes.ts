import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
<<<<<<< HEAD

const router = express.Router();

=======
const router = express.Router();
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
router.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  console.log(lat, lon);
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  console.log(API_KEY);
<<<<<<< HEAD
  
  if (!lat || !lon || !API_KEY) {
    return res.status(400).send('Missing query parameters.');
  } 
=======
  if (!lat || !lon || !API_KEY) {
    return res.status(400).send('Missing query parameters.');
  }
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return res.json(response.data);
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return res.status(500).send('Error fetching weather data.');
<<<<<<< HEAD

  }
});

=======
  }
});
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
export default router;