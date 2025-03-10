import React from "react";
import EventForm from "./CreateEvent";
import { EventContext } from "../context/EventContext";
import { useContext } from "react";
import EventInfo from "./EventInfo";
import EventList from "../components/EventList";


function Home() {
  const { isModalOpen } = useContext(EventContext);
  return (
    <div>
      <div className="home w-full min-h-[100vh] flex flex-col items-center gap-[10rem] bg-[#D9ACF1]">
        <EventList />
        {isModalOpen && <EventInfo />}
      </div>
    </div>
  );
}

export default Home;
