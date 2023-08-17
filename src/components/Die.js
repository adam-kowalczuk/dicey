import { useState } from "react";
import D6 from "./D6/D6";
import D20 from "./D20";
import D6Small from "./Small/D6-Small";
import D20Small from "./Small/D20-Small";

export default function Die() {
  const [die, setDie] = useState("twenty");

  const toggleDie = (dieValue) => {
    setDie(dieValue);
  };

  return (
    <>
      {die === "six" && <D6 />}
      {die === "twenty" && <D20 />}
      <div className="icons">
        <D6Small onClick={() => toggleDie("six")} />
        <D20Small onClick={() => toggleDie("twenty")} />
      </div>
    </>
  );
}
