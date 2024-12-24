import React from "react";

const Button = ({ 
  text, 
  onClick, 
  type, 
  className, 
  disabled 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;