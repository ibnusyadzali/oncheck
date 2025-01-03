import React from "react";

const Input = ({ min,onKeyDown, index, name, type, placeholder, value, onChange, className }) => {
  return (
    <input
      name={name}
      type={type}
      min={min}
      placeholder={placeholder}
      value={value !== 0? value : ''}
      onChange={(event) => onChange(event,index)}
      className={`py-1 px-2 border-2 rounded-md border-slate-200 ${className}`}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
