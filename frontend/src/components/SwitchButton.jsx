import React from "react";

const SwitchButton = ({ name, state, onClick, textOk, textNotOk, labelClassName,index }) => {
  return (
    <li className="w-[15%] h-[100%] flex flex-col gap-1 items-center">
      <label
        htmlFor={`switchButton${index}`}
        className={`cursor-pointer ${labelClassName}`}
      >
        {name}
      </label>
      <button
        id={`switchButton${index}`}
        onClick={(event) => onClick(event, index)}
        className={`relative duration-300 w-[45%] h-[40%] lg:h-[28%] p-1 px-2 ${
          state ? "bg-green-400" : "bg-red-400"
        } rounded-full flex flex-row hover:ring-2 hover:ring-tertiary`}
      >
        <div
          className={`absolute flex flex-col justify-center inset-0 w-[50%] h-[100%] transform transition-transform duration-300
                ${state ? "translate-x-[20%]" : textNotOk == "Down" ? "translate-x-[80%] lg:translate-x-[75%]": "translate-x-[75%] lg:translate-x-[65%]"}`}
        >
          {state ? textOk : textNotOk}
        </div>
        <div
          className={`absolute w-[30%] h-[100%] inset-0 rounded-full transform transition-transform duration-300 border-4
                ${
                  state
                    ? "bg-green-600 border-green-400 translate-x-[230%]"
                    : "bg-primary border-red-400 translate-x-0"
                }`}
        ></div>
      </button>
    </li>
  );
};

export default SwitchButton;
