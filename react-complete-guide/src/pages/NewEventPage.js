import EventForm from "../components/EventForm";

function NewEventPage() {
  const onAddEvent = (event) => {
    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <EventForm method={onAddEvent} event={null} />
    </>
  );
}

export default NewEventPage;
