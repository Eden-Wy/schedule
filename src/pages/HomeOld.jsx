import React from "react";
import EventForm from "./CreateEvent";
import EventList from "../components/Home";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import EventInfo from "./EventInfo";
import Home from "./Home";

function HomeOld() {
  const { isModalOpen } = useContext(EventContext);
  return (
    <div className="home w-full min-h-[100vh] flex flex-col items-center gap-[10rem]">
      <CreateEvent />
      <Home />
      {isModalOpen && <EventInfo />}
    </div>
  );
}

export default HomeOld;
