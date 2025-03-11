import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LogOut from "./components/LogOut";
import EventInfo from "./pages/EventInfo";
import EventForm from "./pages/CreateEvent";
import SecureLayout from "./layout/SecureLayout";
import { AuthProvider } from "./context/AuthContext";
import { EventContextProvider } from "./context/EventContext";

  function App() {
    return (
      <Router>
        <AuthProvider>
          <EventContextProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/event/:id" element={<EventInfo />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                <Route path="secure/*" element={<SecureLayout />}>
                    <Route path="/new" element={<EventForm />} />
                    <Route path="/logout" element={<LogOut />} />
                  </Route>
                </Route>
              </Routes>
          </EventContextProvider>
        </AuthProvider>
      </Router>
    );
  }

  export default App;

