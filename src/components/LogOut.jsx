import { useAuth } from "../context/AuthContext";

function Logout() {
  const { setIsAuth, setToken } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    setToken(null);
  };

  return <div className="bg-[#D9ACF1] min-h-[80vh] pt-[2rem]">
    <h1 className="logout m-[3rem] text-5xl text-center text-white">YOU ARE ABOUT TO MAKE A MOST REGRETTABLE DECISION</h1>
  <div className="flex">
  <button 
  className="submit-button justify-center w-[25rem] h-[15rem] text-5xl rounded-[50%] m-auto bg-[#D891D2] shadow-md tracking-wide text-[#471660] hover:bg-[#AD7EC5]-lg tracking-wide cursor-pointer"
  onClick={handleLogout}>Logout</button>
  </div>
  </div>;
}

export default Logout;