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
