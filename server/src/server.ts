import express from 'express';
import weatherRoutes from './routes/api/weather-routes.js';

const app = express();
const PORT = 3001;

app.use('/api', weatherRoutes); // All routes under /api

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
