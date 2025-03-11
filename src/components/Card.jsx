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
      <div className="bg-[#AD7EC5] h-15 flex-grow mt-[2rem]">
        <h2 className="text-2xl m-[0.3rem] text-white text-center pt-1 text-wrap">{event.title}</h2>
        <div className="event-item bg-[#D9BCF1] w-[100%] min-h-[30rem] max-h-[30rem] p-4 flex flex-col justify-between items-start gap-4">
          <div className="flex flex-col justify-between">
            {/*<p>{event.content}</p>*/}
            <p>{event.date}</p>
          </div>
          <div></div>
          <img
            src={event.image}
            alt={event.content}
            className="line-clamp-12 w-[15rem] rounded"
          />
          <div className="event-item-footer flex flex-col items-center gap-4">
            <button
              className="bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] px-5 py-[.5rem]"
              onClick={() => redirectToEventPage(event.id)}
            >
              View Event Details
            </button>
            {/*<button
              className="bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] px-5 py-[.5rem]"
              onClick={() => handleDelete(event.id)}
            >
              Remove Event
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;