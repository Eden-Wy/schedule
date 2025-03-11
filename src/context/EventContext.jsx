import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    title: "",
    content: "",
    date: "",
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(events.sort((a, b) => b.id - a.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!event.title || !event.content || !event.date) return alert("Please fill the form");
    setEvents([{ ...event, id: Date.now() }, ...events]);
    setEvent({ title: "", content: "", date: "", image: "" });
    localStorage.setItem(
      "events",
      JSON.stringify([...events, { ...event, id: Date.now() }])
    );
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    localStorage.setItem(
      "events",
      JSON.stringify(events.filter((e) => e.id !== id))
    );
  };

  const handleModal = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <EventContext.Provider
      value={{
        events: events,
        event: event,
        setEvent: setEvent,
        handleSubmit,
        handleDelete,
        handleModal,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
