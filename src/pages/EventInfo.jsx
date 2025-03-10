import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EventInfo() {
  const { events } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  if (!Event) return <p>Event not found</p>;

  return (
    <div
      className="event-modal w-full h-full fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center"
      onClick={() => navigate("/")}
    >
      <img src="" alt="" />
      <div
        className="event-modal-content absolute w-[50%] min-h-[30%] bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => navigate("/")}
        >
          Close
        </button>
        <h2>{event.title}</h2>
        <p>{event.content}</p>
        <p>{event.date}</p>
        <img src={event.image} alt={event.title} className="w-[80%]" />
      </div>
    </div>
  );
}

export default EventInfo;
