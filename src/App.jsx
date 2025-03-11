import "./index.css";
import EventInfo from "./pages/EventInfo";
import EventContextProvider from "./context/EventContext";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EventForm from "./pages/CreateEvent";


  function App() {
    return (
      <div className="">
      <Navigation />
          <EventContextProvider>
            <div className="">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventInfo />} />
                <Route path="/new" element={<EventForm />} />
              </Routes>
            </div>
          </EventContextProvider>
      </div>
    );
  }

export default App;
