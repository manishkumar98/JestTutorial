import React from "react";
import { useState } from "react";
import "./button.css";

function Button({ label, toggler }) {
  const [buttonOn, setButtonOn] = useState(false);
  const handleClick = () => {
    setButtonOn(!buttonOn);
    toggler(buttonOn);
  };
  return (
    <>
      <div data-testid="button" className="button-style" onClick={handleClick}>
        {label}
      </div>
    </>
  );
}

export default Button;
