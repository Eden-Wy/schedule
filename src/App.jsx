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
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import { EventContextProvider } from "./context/EventContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <UserContextProvider>
          <EventContextProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/event/:id" element={<EventInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/secure" element={<SecureLayout />}>
                  <Route path="/secure/new" element={<EventForm />} />
                  <Route path="/secure/logout" element={<LogOut />} />
                </Route>
              </Route>
            </Routes>
          </EventContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

