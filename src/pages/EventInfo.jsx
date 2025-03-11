import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EventInfo() {
  const { events } = useContext(EventContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  if (!event) return <p>Event not found!</p>;

  return (
    <div>
      <div className="bg-[#D9ACF1] flex justify-center text-[#471660] w-full h-[100%]">
        <div className="event-modal-content p-4 w-full h-full">
          <h2>{event.title}</h2>
          <p>{event.content}</p>
          <p>{event.date}</p>
          <img src={event.image} alt={event.title} className="w-[80%]" />
          <button
            className="top-5 right-5 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide text-[#471660]"
            onClick={() => navigate("/")}
          >
            Close
          </button>
        </div>
      </div>
  </div>
  );
}

export default EventInfo;

    //   className="event-modal w-full h-full fixed top-0 left-0 bg-[#D9ACF1] bg-opacity-[70%] flex justify-center items-center shadow-lg"
    //   onClick={() => navigate("/")}
    // >