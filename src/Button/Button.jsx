import React from "react";
import "./button.css"
const Button = ({text,color}) => {
  return (
    <div className={color?'black':'white lets-talk'}>
      <button >{text}</button>
    </div>
  );
};

export default Button;

// pass propes as text and color