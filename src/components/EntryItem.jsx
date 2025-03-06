import React from "react";
import { EntryContext } from "../context/EntryContext";
import { useContext } from "react";

function EntryItem({ entry }) {
  const { handleModal, handleDelete } = useContext(EntryContext);

  return (
    <div className="flex justify-between">
      <div className="entry-item w-[100%] min-h-[30rem] text-white p-4 border border-xl border-amber-300 flex flex-col justify-between items-start gap-4">
        <div className="flex flex-col justify-between">
        <h2>{entry.title}</h2>
        <p>{entry.content}</p>
        <p>{entry.date}</p>
        </div>
        <img
          src={entry.image}
          alt={entry.title}
          className="w-[15rem] min-h-[10rem]"
        />
        <div className="entry-item-footer flex items-center gap-4">
          <button
            className="text-white border border-xl border-amber-300 rounded px-5 py-[.5rem]"
            onClick={() => handleModal(entry.id)}
          >
            Open Details
          </button>
          <button
            className="text-white border border-xl border-amber-300 rounded px-5 py-[.5rem]"
            onClick={() => handleDelete(entry.id)}
          >
            Delete File
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntryItem;