import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
<<<<<<< HEAD
import { EventFactory } from './events.js';
=======
import { EventFactory } from './event.js';
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
import { RSVPFactory } from './rsvp.js';

const User = UserFactory(sequelize);
const Event = EventFactory(sequelize);
const RSVP = RSVPFactory(sequelize);

// adding associations

// a user can create many events
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
// an event is created by a user
Event.belongsTo(User, { foreignKey: 'createdBy' });

// a user can RSVP to many events
User.belongsToMany(Event, { through: RSVP, foreignKey: 'userId' });
// an event can have many RSVPs
Event.belongsToMany(User, { through: RSVP, foreignKey: 'eventId' });

//many to many relationship between users and events through rsvps
RSVP.belongsTo(User, { foreignKey: 'userId' });
RSVP.belongsTo(Event, { foreignKey: 'eventId' });


export const syncDatabase = async () => {
    await sequelize.sync({ alter: true }); // `alter: true` prevents data loss
    console.log('Database synced successfully');
}

<<<<<<< HEAD
export default { User, Event, RSVP };
=======
export { User, Event, RSVP };
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
