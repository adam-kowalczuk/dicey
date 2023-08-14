import React, { useState } from "react";
import Dots from "./Dots";

export default function D6() {
  const [rolledValue, setRolledValue] = useState(1);

  const roll = () => {
    setRolledValue(Math.floor(Math.random() * 6) + 1);
  };
  return (
    <button className="six" onClick={roll}>
      <Dots roll={rolledValue} />
    </button>
  );
}
