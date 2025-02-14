import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { EventFactory } from './events.js';
import { RSVPFactory } from './rsvp.js';

const User = UserFactory(sequelize);
const Event = EventFactory(sequelize);
const RSVP = RSVPFactory(sequelize);

// adding associations
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' });
Event.belongsTo(User, { foreignKey: 'createdBy' });

User.belongsToMany(Event, { through: RSVP, foreignKey: 'userId' });
Event.belongsToMany(User, { through: RSVP, foreignKey: 'eventId' });

export const syncDatabase = async () => {
    await sequelize.sync({ alter: true }); // `alter: true` prevents data loss
    console.log('Database synced successfully');
}

export default { User, Event, RSVP };