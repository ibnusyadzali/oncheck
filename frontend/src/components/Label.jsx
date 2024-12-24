import React from "react";

const Label = ({ text, htmlFor, className}) => {
  return (
    <div>
      <label
      htmlFor={htmlFor}
      className={`text-tertiary font-semibold ${className}`}
      >
        {text}
      </label>
    </div>
  );
};

export default Label;
