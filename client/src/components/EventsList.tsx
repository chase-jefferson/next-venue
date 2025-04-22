// src/components/EventsList.tsx

import { useState, useEffect } from "react";
import { getAllEvents } from "../components/eventDetails"; // Adjust the import path as necessary
import { Link } from "react-router-dom"; // For navigation to event details page

const EventsList = () => {
    interface Event {
        id: string;
        title: string;
        description: string;
        location: string;
        date: string;
        time: string;
    }

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        // Fetch all events from your backend or API
        const fetchEvents = async () => {
            try {
                const data = await getAllEvents(); // Replace with your actual fetch call
                setEvents(data);
            } catch (err) {
                console.error("Failed to fetch events:", err);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">All Events</h1>
            <ul className="space-y-4">
                {events.map((event) => (
                    <li key={event.id} className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-gray-700">
                            <strong>Location:</strong> {event.location}
                        </p>
                        <p className="text-gray-700">
                            <strong>Date:</strong> {event.date}
                        </p>
                        <p className="text-gray-700">
                            <strong>Time:</strong> {event.time}
                        </p>
                        <Link
                            to={`/events/${event.id}`} // Link to the event details page
                            className="text-blue-500 hover:text-blue-600"
                        >
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
