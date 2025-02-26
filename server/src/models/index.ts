import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { EventFactory } from './event.js';
import { RSVPFactory } from './rsvp.js';

const User = UserFactory(sequelize);
const Event = EventFactory(sequelize);
const RSVP = RSVPFactory(sequelize);  // Ensure this is defined

User.hasMany(RSVP, { foreignKey: 'userId', onDelete: 'CASCADE' });
Event.hasMany(RSVP, { foreignKey: 'eventId', onDelete: 'CASCADE' });
RSVP.belongsTo(User, { foreignKey: 'userId' });
RSVP.belongsTo(Event, { foreignKey: 'eventId' });

sequelize.sync({ force: false })
  .then(() => {
    console.log("Database & tables are ready!");
  })
  .catch(err => {
    console.error("Error syncing database:", err);
  });

export { User, Event, RSVP, sequelize };
