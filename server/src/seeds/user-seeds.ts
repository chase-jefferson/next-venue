<<<<<<< HEAD
import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { username: 'ChaseJefferson', 
        email: 'chasejefferson@email.com',
        password: 'password' },
      {
        username: 'WarrenWest',
        email: 'warrenwest@email.com',
        password: 'password',
      },
      {
        username: 'NickWashington',
        email: 'nickwashington@email.com',
        password: 'password',
      },
      {
        username: 'AhmirRobinson',
        email: 'ahmirrobinson@email.com',
        password: 'password',
      },
      {
        username: 'Ash',
        email: 'ash@email.com',
        password: 'password',
      },
      {
        username: 'GirmaTegnene',
        email: 'ahmirrobinson@email.com',
        password: 'password',
      },
      {
        username: 'TanyaPunater',
        email: 'tanyapunater@email.com',
        password: 'password',
      },

    ],
    { individualHooks: true }
  );
};
=======
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
// Function to seed users into the database
export const seedUsers = async () => {
  try {
    // Array of user data to be inserted into the users table
    const users = [
      {
        username: 'JollyGuru',
        email: 'jolly@guru.com',
        password: await bcrypt.hash('password', 10)
      },
      {
        username: 'SunnyScribe',
        email: 'sunny@scribe.com',
        password: await bcrypt.hash('password', 10)
      },
      {
        username: 'RadiantComet',
        email: 'radiant@comet.com',
        password: await bcrypt.hash('password', 10)
      },
      {
        username: 'MoonlitExplorer',
        email: 'moonlit@explorer.com',
        password: await bcrypt.hash('password', 10)
      },
      {
        username: 'DawnPatroller',
        email: 'dawn@patroller.com',
        password: await bcrypt.hash('password', 10)
      }
    ];
    // Use bulkCreate to insert the data into the database
    await User.bulkCreate(
      users.map(user => ({
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
    console.log('Users have been seeded!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};






>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
