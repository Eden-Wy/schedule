import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Outlet} from 'react-router-dom';

function MainLayout() {
  const { checkAuth, token, isAuth } = useAuth();
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