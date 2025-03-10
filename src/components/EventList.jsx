import React from "react";
import { EventContext } from "../context/EventContext.jsx";
import { useContext } from "react";
import Card from "./Card.jsx";

function EventList() {
  const { events, event } = useContext(EventContext);

  return (
      <div className="event-list flex flex-wrap justify-center gap-4">
        {events.map((event) => (
          <Card key={event.id} event={event} />
            
        ))}
      </div>

  );
}

export default EventList;