import "./index.css";
import EventInfo from "./pages/EventInfo";
{/*import SplashScreen from "./components/SplashScreen";*/}
import EventContextProvider from "./context/EventContext";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <EventContextProvider>
      <div className="App bg-[url(/assets/browser-image/old-oak-wood.jpg)]">
        {/*<SplashScreen />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventInfo />} />
        </Routes>
      </div>
    </EventContextProvider>
  );
}

export default App;
