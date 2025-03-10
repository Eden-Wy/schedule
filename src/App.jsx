// import EventInfo from "./pages/EventInfo";
// // import SplashScreen from "./components/SplashScreen";
// import EntryContextProvider from "./context/EntryContext";
// import HomeOld from "./pages/HomeOld";
// import { Routes, Route } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <div>
            <Login />
            <SignUp />
        </div>
    );
}

export default App;



// function App() {
//   return (
//     <EntryContextProvider>
//       <div className="App bg-[url(/assets/browser-image/old-oak-wood.jpg)]">
//       <SplashScreen />
//         <Routes>
//           <Route path="/" element={<HomeOld />} />
//           <Route path="/entry/:id" element={<EventInfo />} />
//         </Routes>
//       </div>
//     </EntryContextProvider>
//   );
// }

// export default App;

