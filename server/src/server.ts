import express from 'express';
import router from './routes/index.js';
import sequelize from './config/connection.js'; // Import Sequelize connection

const app = express();

app.use(express.json()); // to parse JSON body
app.use('/api', router); // Register the routes

// Sync the Sequelize models with the database
sequelize.sync({ force: false }) // 'force: false' ensures it doesn't drop the tables on each restart
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
