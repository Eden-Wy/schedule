import React from "react";
import { EntryContext } from "../context/EntryContext";
import { useContext } from "react";
import Card from "./Card";

function Home() {
  const { entries, entry } = useContext(EntryContext);

  return (
    <div>
      <div className="entry-list flex flex-wrap justify-center gap-4">
        {entries.map((entry) => (
          <Card key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default Home;
