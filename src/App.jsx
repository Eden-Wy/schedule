import "./App.css";
import EventInfo from "./pages/EventInfo";
import SplashScreen from "./components/SplashScreen";
import EntryContextProvider from "./context/EntryContext";
import HomeOld from "./pages/HomeOld";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <EntryContextProvider>
      <div className="App bg-[url(/assets/browser-image/old-oak-wood.jpg)]">
      <SplashScreen />
        <Routes>
          <Route path="/" element={<HomeOld />} />
          <Route path="/entry/:id" element={<EventInfo />} />
        </Routes>
      </div>
    </EntryContextProvider>
  );
}

export default App;
