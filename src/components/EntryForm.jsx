import React from "react";
import { EntryContext } from "../context/EntryContext";
import { useContext } from "react";

function EntryForm() {
  const { entry, setEntry, handleSubmit } = useContext(EntryContext);
  return (
    <div className="entry-form-container w-[50%]">
      <h1 className="entry-form-title m-[3rem] text-2xl text-center text-amber-500">ACCESS CATALOGUE</h1>
      <form
        onSubmit={handleSubmit}
        className="entry-form w-[100%] flex flex-col gap-4 "
      >
        <input
          className="p-2 border border-xl border-amber-300"
          type="text"
          placeholder="Title"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />
        <textarea
          className="p-2 border border-xl border-amber-300"
          placeholder="Content"
          value={entry.content}
          onChange={(e) => setEntry({ ...entry, content: e.target.value })}
        ></textarea>
        <input
          className="p-2 border border-xl border-amber-300"
          type="date"
          value={entry.date}
          onChange={(e) => setEntry({ ...entry, date: e.target.value })}
        />
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

export default EntryForm;
