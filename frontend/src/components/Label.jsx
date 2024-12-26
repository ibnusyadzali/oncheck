import React from "react";

const Label = ({ text, htmlFor, className}) => {
  return (
    <div>
      <label
      htmlFor={htmlFor}
      className={` ${className}`}
      >
        {text}
      </label>
    </div>
  );
};

export default Label;
