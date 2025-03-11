import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext); // optional

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("error");
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
``
  const checkAuth = (token) => {
    if (token) {
      setIsAuth(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        isAuth,
        setIsAuth,
        token,
        setToken,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };