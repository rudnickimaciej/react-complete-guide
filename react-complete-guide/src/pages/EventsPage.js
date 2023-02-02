import EventsList from "../components/EventsList";
import { useState, useEffect } from "react";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedEvents = data.events.map((event) => {
          return {
            id: event.id,
            title: event.title,
            date: event.date,
            image: event.image,
            description: event.description,
          };
        });
        setEvents(transformedEvents);
      });
  }, []);

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
