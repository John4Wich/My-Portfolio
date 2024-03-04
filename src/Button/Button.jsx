import React from "react";
import "./button.css";
const Button = ({ text, color }) => {
  return (
    <div className={color ? "black text-center" : "white lets-talk text-center"}>
      <button>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;

// pass propes as text and color
