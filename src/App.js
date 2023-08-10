import React, { useState } from "react";
import "./App.css";
import Dots from "./components/Dots";

export default function App() {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="main">
      <button className="die" onClick={roll}>
        <Dots roll={rolledValue} />
      </button>
    </div>
  );
}
