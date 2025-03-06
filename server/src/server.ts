import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import { seedUsers } from './seeds/user-seeds.js';
import { seedEvents } from './seeds/event-seeds.js';
import { seedRsvps } from './seeds/rsvp-seeds.js';

dotenv.config(); // Load environment variables

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json()); 
app.use(express.static('../client/dist'));
app.use(routes); // ✅ Ensure routes are registered before initializing the app.

const PORT = process.env.PORT || 3000;
const forceDatabaseRefresh = false;

const initializeApp = async () => {
  try {
    await sequelize.sync({ force: forceDatabaseRefresh });

    // ✅ Seeding data AFTER database sync (safer)
    await seedUsers();
    await seedEvents();
    await seedRsvps();

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Error during app initialization:", error);
  }
};

initializeApp();
