import React from "react";
import { EntryContext } from "../context/EntryContext";
import { useContext } from "react";

function LogIn() {
  const { entry, setEntry, handleSubmit } = useContext(EntryContext);
  return (
    <div className="p-3 my-5 d-flex flex-column w-50">
      <h1 className="m-[3rem] text-2xl text-center text-amber-500">WELCOME TO YOUR PERSONAL SCHEDULER. Please log in to continue.</h1>
      <form
        onSubmit={handleSubmit}
        className="entry-form w-[100%] flex flex-col gap-4 "
      >
        <input
          className="p-2 border border-xl border-amber-300"
          type="text"
          placeholder="Enter your e-mail"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />
        <textarea
          className="p-2 border border-xl border-amber-300"
          placeholder="Enter your password"
          value={entry.content}
          onChange={(e) => setEntry({ ...entry, content: e.target.value })}
        ></textarea>
        <input
          className="p-2 text-white border border-xl border-amber-300"
          type="file"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setEntry({
                ...entry,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }
          }}
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

export default LogIn;

<fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Login</legend>
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>