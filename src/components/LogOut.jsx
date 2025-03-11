import { useAuth } from "../context/AuthContext";

function Logout() {
  const { setIsAuth, setToken } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    setToken(null);
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;