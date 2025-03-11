import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Event({ event }) {
  const { handleModal, handleDelete } = useContext(EventContext);
  const navigate = useNavigate();
  const redirectToEventPage = (id) => {
    navigate(`event/${id}`)
  };


  return (
    <div className="flex justify-between">
      <div className="event-item bg-linear-65 from-purple-500 to-pink-500 mt-[2rem] w-[100%] min-h-[30rem] p-4 rounded flex flex-col justify-between items-start gap-4">
        <div className="flex flex-col justify-between">
        <h2 className="text-2xl">{event.title}</h2>
        {/*<p>{event.content}</p>*/}
        <p>{event.date}</p>
        </div>
        <img
          src={event.image}
          alt={event.title} /*Don't like this, might want to put a random image in there.*/
          className="w-[15rem] min-h-[10rem] rounded"
        />
        <div className="event-item-footer flex items-center gap-4">
          <button
            className="text-[#471660] bg-[#D891D2] shadow-lg rounded-lg px-5 py-[.5rem]"
            onClick={() => redirectToEventPage(event.id)}
          >
            View Event Details
          </button>
          <button
            className="text-[#471660] bg-[#D891D2] shadow-lg rounded-lg px-5 py-[.5rem]"
            onClick={() => handleDelete(event.id)}
          >
            Remove Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default Event;