import { Event } from '../models/events.js';

export const seedEvents = async () => {
  await Event.bulkCreate(
    [
      { 
        eventName: 'Birthday Party',
        description: 'This is a birthday party event',
        location: '1234 Elm',
        date: new Date('2025-03-01'),
        time: '12:00',
        createdBy: '1'
      },
      {
        eventName: 'Wedding',
        description: 'This is a wedding event',
        location: '1234 Elm',
        date: new Date('2025-03-01'),
        time: '3:00',
        createdBy: '2'
      },
      {   
        eventName: 'Graduation',
        description: 'This is a graduation event',
        location: '1234 Elm',
            
        date: new Date('2025-03-03'),
        time: '6:00',
        createdBy: '3'
      },
      
    ],
    { individualHooks: true }
  );
};
        
    