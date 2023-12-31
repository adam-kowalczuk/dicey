import React, { useState } from "react";
import d20Icon from "../images/d20-icon-grey.png";

export default function D20() {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="twenty">
      <img
        alt="20-sided die"
        src={d20Icon}
        className="twenty-img"
        onClick={roll}
      />
      <p className="twenty-roll">{rolledValue}</p>
    </div>
  );
}
