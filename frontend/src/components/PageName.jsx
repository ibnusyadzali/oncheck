import React from "react";

const PageName = ({ text, className}) => {
  return (
    <div>
      <h1
      className={`text-tertiary font-bold text-3xl ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default PageName;
