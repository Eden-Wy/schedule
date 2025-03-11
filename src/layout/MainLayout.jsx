import Navigation from "../components/Navigation";
import { Outlet, useNavigate } from "react-router-dom";
import { useEvent } from "../context/EventContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function MainLayout() {
  const { checkAuth, token, isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth(token);
  }, [token]);

  console.log(isAuth);
  return (
    <>
      <Navigation />
        <Outlet />
    </>
  );
};

export default MainLayout;