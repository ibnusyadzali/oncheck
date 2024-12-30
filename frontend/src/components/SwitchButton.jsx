import React from "react";

const SwitchButton = ({ deviceState, onClick }) => {
  const deviceArray = Object.entries(deviceState).map(
    ([key, value], index) => ({
      id: index,
      deviceName: key,
      state: value,
    })
  );
  return (
    <ul className="w-full h-1/4 my-1 flex flex-row justify-between ">
      {deviceArray.map(({ id, deviceName, state }) => (
        <li
          key={id}
          className="w-[15%] h-[100%] flex flex-col gap-1 items-center"
        >
          <label
            htmlFor={`switchButton${id}`}
            className="cursor-pointer uppercase"
          >
            {deviceName}
          </label>
          <button
            id={`switchButton${id}`}
            onClick={(event) => onClick(event, id)}
            className={`relative duration-300 w-[45%] h-[40%] p-1 px-2 ${
              state ? "bg-green-400" : "bg-red-400"
            } rounded-full flex flex-row hover:ring-2 hover:ring-tertiary`}
          >
            <div
              className={`absolute flex flex-col justify-center inset-0 w-[50%] h-[100%] transform transition-transform duration-300
                ${state ? "translate-x-[20%]" : "translate-x-[80%]"}`}
            >
              {state ? "Normal" : "Down"}
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
      ))}
    </ul>
  );
};

export default SwitchButton;
