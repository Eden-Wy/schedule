import React from "react";
import { useContext } from "react";



function SignUp() {
    const { user, setUser, handleSubmit } = useContext(UserContext);
    return (
        <div className="entry-form-container w-[50%]">
        <h1 className="entry-form-title m-[3rem] text-2xl text-center text-amber-500">CREATE AN ACCOUNT</h1>
        <form
          onSubmit={handleSubmit}
          className="entry-form w-[100%] flex flex-col gap-4 "
        >
          <input
            className="p-2 border border-xl border-amber-300"
            type="text"
            placeholder="User Name"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <textarea
            className="p-2 border border-xl border-amber-300"
            placeholder="E-mail"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></textarea>
          <input
            className="p-2 border border-xl border-amber-300"
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={(e) => setEvent({ ...user, password: e.target.value })}
          />
          <button
            type="submit"
            className="submit-button text-black w-[8rem] h-[2.5rem] rounded m-auto bg-amber-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

export default SignUp