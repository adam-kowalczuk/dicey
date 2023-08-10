import "./App.css";
import React, { useState } from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";

export default function App() {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.ceil(Math.random() * 5 + 1));
  };

  return (
    <div className="main">
      <p className="value">{rolledValue}</p>
      <button className="die" onClick={roll}>
        <div className="dots top-left"></div>
        <div className="dots center"></div>
        <div className="dots bottom-right"></div>
      </button>
      <button className="die" onClick={roll}>
        <Six />
      </button>
    </div>
  );
}
