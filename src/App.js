import React, { useState } from "react";
import "./App.css";
import Dots from "./components/Dots";
import d20Icon from "./images/d20-icon-grey.png";

export default function App() {
  const [rolledValue, setRolledValue] = useState(1);
  const [rolledValue20, setRolledValue20] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 6) + 1);
  };

  const rollTwenty = () => {
    setRolledValue20(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="main">
      <h1 className="title">DICEY</h1>
      <button className="die" onClick={roll}>
        <Dots roll={rolledValue} />
      </button>
      <div className="twenty">
        <img
          alt="20-sided die"
          src={d20Icon}
          className="twenty-img"
          onClick={rollTwenty}
        />
        <p className="twenty-roll">{rolledValue20}</p>
      </div>
    </div>
  );
}
