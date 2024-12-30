import React from "react";

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`mb-2 py-1 px-2 border-2 rounded-md border-slate-200  ${className}`}
    />
  );
};

export default Input;
