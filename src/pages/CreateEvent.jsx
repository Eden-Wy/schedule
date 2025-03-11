import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function EventForm() {
  const { event, setEvent, handleSubmit } = useContext(EventContext);
  return (
    <div className="event-form-container w-[50%] ml-[25%] mt-[2rem] mb-[2rem] bg-linear-65 from-purple-500 to-pink-500 rounded-lg">
      <h1 className="event-form-title mt-[2rem] pt-[1rem] text-2xl text-center text-[#471660]">Create a new Event!</h1>
      <form
        onSubmit={handleSubmit}
        className="event-form w-[100%] p-[3rem] flex flex-col gap-4 "
      >
        <input
          className="p-2 m-2 py-1 px-3 text-[#471660] bg-[#D891D2] shadow-lg rounded-lg tracking-wide"
          type="text"
          placeholder="Event Name"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <textarea
          className="p-2 m-2 py-1 px-3 text-[#471660] bg-[#D891D2] shadow-lg rounded-lg tracking-wide"
          placeholder="Event Description"
          value={event.content}
          onChange={(e) => setEvent({ ...event, content: e.target.value })}
        ></textarea>
        <input
          className="p-2 m-2 py-1 px-3 text-[#471660] bg-[#D891D2] shadow-lg rounded-lg tracking-wide"
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          className="p-2 m-2 py-1 px-3 text-[#471660] bg-[#D891D2] shadow-lg rounded-lg tracking-wide"
          type="file"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setEvent({
                ...event,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }
          }}
        />
        <button
          type="submit"
          className="submit-button w-[8rem] h-[2.5rem] rounded m-auto text-[#471660] bg-[#D891D2] shadow-lg rounded-lg tracking-wide cursor-pointer"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;

//localStorage.setItem("Name", JSON.stringify(andererName)) - gehört nach EventContext.jsx