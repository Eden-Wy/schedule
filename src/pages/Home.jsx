import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import Event from "../components/Card";
import EventForm from "./CreateEvent";

function Home() {
  const { events, event } = useContext(EventContext);

  return (
    <div>
      <div className="event-list flex flex-wrap justify-center gap-4">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
      <div>
      <EventForm />
      </div>
    </div>
  );
}

export default Home;
