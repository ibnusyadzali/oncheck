import React from "react";

const DeviceCheckBox = ({ deviceArray, onChange, state }) => {
  return (
    <ul className="w-full my-2 flex flex-row justify-around">
      {deviceArray.map(
        ({ id, deviceId, deviceName, className }) => (
          <li key={id} className="flex flex-row gap-2">
            <input
              type="checkbox"
              id={deviceId}
              name={deviceName}
              checked={state[deviceId]}
              onChange={(event) => onChange(event,deviceId)}
              className={`accent-green-400 cursor-pointer ${className}`}
            />
            <label htmlFor={deviceId} className="cursor-pointer">
              {deviceName} 
            </label>
          </li>
        )
      )}
    </ul>
  );
};

export default DeviceCheckBox;
