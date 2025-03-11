import React from "react";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";

function EventForm() {
  const { event, setEvent, handleSubmit } = useContext(EventContext);
  return (
    <div className="event-form-container w-[50%] bg-red-500">
      <h1 className="event-form-title m-[3rem] text-2xl text-center text-amber-500">ACCESS CATALOGUE</h1>
      <form
        onSubmit={handleSubmit}
        className="event-form w-[100%] flex flex-col gap-4 "
      >
        <input
          className="p-2 border border-xl border-amber-300"
          type="text"
          placeholder="Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
        <textarea
          className="p-2 border border-xl border-amber-300"
          placeholder="Content"
          value={event.content}
          onChange={(e) => setEvent({ ...event, content: e.target.value })}
        ></textarea>
        <input
          className="p-2 border border-xl border-amber-300"
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
        />
        <input
          className="p-2 text-white border border-xl border-amber-300"
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
          className="submit-button text-black w-[8rem] h-[2.5rem] rounded m-auto bg-amber-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventForm;

//localStorage.setItem("Name", JSON.stringify(andererName)) - gehört nach EventContext.jsx