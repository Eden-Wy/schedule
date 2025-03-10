import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function Event({ event }) {
  const { handleModal, handleDelete } = useContext(EventContext);

  return (
    <div className="flex justify-between">
      <div className="event-item w-[100%] min-h-[30rem] text-white p-4 border border-xl border-amber-300 flex flex-col justify-between items-start gap-4">
        <div className="flex flex-col justify-between">
        <h2>{event.title}</h2>
        <p>{event.content}</p>
        <p>{event.date}</p>
        </div>
        <img
          src={event.image}
          alt={event.title}
          className="w-[15rem] min-h-[10rem]"
        />
        <div className="event-item-footer flex items-center gap-4">
          <button
            className="text-white border border-xl border-amber-300 rounded px-5 py-[.5rem]"
            onClick={() => handleModal(event.id)}
          >
            Open Details
          </button>
          <button
            className="text-white border border-xl border-amber-300 rounded px-5 py-[.5rem]"
            onClick={() => handleDelete(event.id)}
          >
            Delete File
          </button>
        </div>
      </div>
    </div>
  );
}

export default Event;