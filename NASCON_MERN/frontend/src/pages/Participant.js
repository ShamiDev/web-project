import React, { useState, useEffect } from "react";
import "./eventdetail.css"; 
import Navbar from "../components/Navbar";

const EventListParticipant = () => {
  // State variable to store the list of events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // Function to handle applying to an event
  const handleApplyToEvent = (eventName) => {
    // Implement your logic to apply to the event here
    console.log(`Applied to event: ${eventName}`);
  };

  return (
    <div className="event-list">
      <h2>Events:</h2>
      <ul>
        {events.map((event) => (
          <div className="event-details workout-details" key={event._id}>
            <h4>{event.eventName}</h4>
            <p>
              <strong>Date: </strong>
              {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Time: </strong>
              {event.eventTime}
            </p>
            <p>
              <strong>Venue: </strong>
              {event.venue}
            </p>
            <p>
              <strong>Faculty Mentor: </strong>
              {event.facultyMentorUsername}
            </p>
            <button onClick={() => handleApplyToEvent(event.eventName)}>Apply</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Participant = () => {
  return (
    <div className="Participant">
      <Navbar />
      <br/>
      <h1>Hello, Participant</h1>
      <EventListParticipant />
    </div>
  );
};

export default Participant;
