import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

function Login() {
  const { user, setUser, setToken, setIsAuth, isAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "123456789");
    setToken("123456789");
    setIsAuth(true);
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  if (isAuth) navigate("/secure/dashboard");
  return (
    <div className="bg-[#D9ACF1] min-h-[80vh] pt-[2rem]">
      <div className="entry-form-container ml-[25%] w-[50%]">
        <h1 className="entry-form-title m-[3rem] text-2xl text-center text-white">LOG IN</h1>
        <form onSubmit={handleSubmit}
          className="entry-form w-[100%] flex flex-col gap-4 "
        >
          <div className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
          >
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={user.email}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
          >
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              value={user.password}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="submit-button submit-button w-[8rem] h-[2.5rem] rounded m-auto bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5]-lg tracking-wide cursor-pointer"
            type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
