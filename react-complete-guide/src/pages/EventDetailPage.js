import EventItem from "../components/EventItem";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EventDetailPage = () => {
  const id = useParams("id");
  const [event, setEvent] = useState(null);
  useEffect(() => {
    console.log(id);
    fetch("http://localhost:5000/events/" + id.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEvent(data.event);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;
