import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function EventForm() {
  const { event, setEvent, handleSubmit } = useContext(EventContext);
  return (
    <div className="bg-[#D9ACF1] min-h-[80vh] pt-[2rem]">
      <div className="event-form-container w-[50%] ml-[25%] mb-[2rem] bg-[#D9BCF1] ">
        <div className="bg-[#AD7EC5] h-15 flex-grow">
          <h1 className="text-2xl text-white text-center pt-1 text-wrap">Create a new Event!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="event-form w-[100%] p-[3rem] flex flex-col gap-4 "
        >
          <input
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            type="text"
            placeholder="Event Name"
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
          <textarea
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            placeholder="Event Description"
            value={event.content}
            onChange={(e) => setEvent({ ...event, content: e.target.value })}
          ></textarea>
          <input
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            type="date"
            value={event.date}
            onChange={(e) => setEvent({ ...event, date: e.target.value })}
          />
          <input
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
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
            className="submit-button w-[8rem] h-[2.5rem] rounded m-auto bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5]-lg tracking-wide cursor-pointer"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;

//localStorage.setItem("Name", JSON.stringify(andererName)) - gehört nach EventContext.jsx