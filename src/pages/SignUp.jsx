import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";



function SignUp() {
  const { user, setUser, handleSubmit } = useContext(UserContext);
  return (
    <div className="bg-[#D9ACF1] min-h-[80vh] pt-[2rem]">
      <div className="entry-form-container ml-[25%] w-[50%]">
        <h1 className="entry-form-title m-[3rem] text-2xl text-center text-white">CREATE AN ACCOUNT</h1>
        <form
          onSubmit={handleSubmit}
          className="entry-form w-[100%] flex flex-col gap-4 "
        >
          <input
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            type="text"
            placeholder="User Name"
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <textarea
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            placeholder="E-mail"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></textarea>
          <input
            className="p-2 m-2 py-1 px-3 bg-[#D891D2] shadow-md rounded-lg text-[#471660] hover:bg-[#AD7EC5] tracking-wide"
            placeholder="Password"
            type="text"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            type="submit"
            className="submit-button w-[8rem] h-[2.5rem] rounded m-auto bg-[#D891D2] shadow-md rounded-lg tracking-wide text-[#471660] hover:bg-[#AD7EC5]-lg tracking-wide cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div></div>
  );
}

export default SignUp