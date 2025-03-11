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
    <div className="bg-[#D9ACF1] min-h-[80vh]">
      <div className="bg-[#D9BCF1] text-[#471660] mx-[20%] py-5 shadow-lg">
        <div className="event-content w-full">
          <div className="bg-[#AD7EC5] h-15 flex-grow">
            <div>
              <h2 className="text-xl text-white text-center pt-1 text-wrap">{event.title}</h2>
            </div>
            <div>
              <p className="text-end pr-2 text-sm">{event.date}</p>
            </div>
          </div>
          <div className="p-5 px-10">
            <p className="text-justify text-wrap indent-5">{event.content}</p>
          </div>
          <div className="flex flex-row justify-center">
            <img src={event.image} alt={event.title} className="max-w-[80%] max-h-[80%]" />
          </div>
          <div className="flex flex-row justify-center">
            <button
              className="py-1 px-3 mt-5 bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5]"
              onClick={() => navigate("/")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default EventInfo;

    //   className="event-modal w-full h-full fixed top-0 left-0 bg-[#D9ACF1] bg-opacity-[70%] flex justify-center items-center shadow-lg"
    //   onClick={() => navigate("/")}
    // >