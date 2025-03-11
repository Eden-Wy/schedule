import React from "react";
import { UserContext } from "../context/UserContext";
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
    <div className="entry-form-container w-[50%]">
    <h1 className="entry-form-title m-[3rem] text-2xl text-center text-amber-500">LOG IN</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={user.email}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={user.password}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  );
}


//     return (
//         <div className="entry-form-container w-[50%]">
//         <h1 className="entry-form-title m-[3rem] text-2xl text-center text-amber-500">LOG IN</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="entry-form w-[100%] flex flex-col gap-4 "
//         >
//           <input
//             className="p-2 border border-xl border-amber-300"
//             type="text"
//             placeholder="User Name"
//             value={user.userName}
//             onChange={(e) => setUser({ ...user, userName: e.target.value })}
//           />
//           <textarea
//             className="p-2 border border-xl border-amber-300"
//             placeholder="E-mail"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           ></textarea>
//           <input
//             className="p-2 border border-xl border-amber-300"
//             placeholder="Password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setEvent({ ...user, password: e.target.value })}
//           />
//           <button
//             type="submit"
//             className="submit-button text-black w-[8rem] h-[2.5rem] rounded m-auto bg-amber-300 cursor-pointer"
//           >
//             Log me in!
//           </button>
//         </form>
//       </div>
//     );
//   }

// export default Login;
