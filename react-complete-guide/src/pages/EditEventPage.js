import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const id = useParams("id");
  const [event, setEvent] = useState(null);

  const onEditHandler = (event) => {
    fetch("http://localhost:5000/events/" + id.id, {
      method: "PATCH",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((response) => {
        if (response.ok) {
          alert("Event edited!");
        }
        alert("Error: " + response.statusText);
      })
      .catch((error) => {
        alert(error);
      });
  };

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
      <EventForm method={onEditHandler} event={event} />
    </>
  );
}

export default EditEventPage;
