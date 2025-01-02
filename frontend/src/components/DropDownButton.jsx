import React, { useRef, useEffect } from "react";

const DropDownButton = ({
  name,
  siteStatus,
  setSiteStatus,
  index,
  textOption,
  labelClassName,
}) => {
  const dropdownRef = useRef(null);

  const handleTogggleDropDown = (event, index) => {
    event.preventDefault();
    setSiteStatus((prevStatus) => {
      const updated = [...prevStatus];
      updated.forEach((data, i) => {
        updated[i] = {
          ...data,
          dropDownState: i === index ? !data.dropDownState : false,
        };
      });
      return updated;
    });
  };
  const handleOptionClick = (selectedStatus) => {
    setSiteStatus((prevState) => {
      const updated = [...prevState];
      updated[index] = {
        ...updated[index],
        status: selectedStatus,
        dropDownState: false,
      };
      return updated;
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Close the dropdown if the click is outside
      setSiteStatus((prevState) => {
        const updated = [...prevState];
        updated[index] = {
          ...updated[index],
          dropDownState: false,
        };
        return updated;
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-flex flex-col text-center gap-2 items-center w-full"
    >
      {/* Dropdown Button */}
      <label
        htmlFor={`switchButton${index}`}
        className={`cursor-pointer ${labelClassName}`}
      >
        {name}
      </label>
      <button
        id={`switchButton${index}`}
        onClick={(event) => {
          handleTogggleDropDown(event, index);
        }}
        className={`w-[80%] px-0 py-2 border rounded-lg shadow-md focus:outline-none hover:ring-2 hover:ring-tertiary ${siteStatus[index].status == "Normal" ? "bg-green-400" : siteStatus[index].status == "Potentially Broken" ? "bg-yellow-400" : siteStatus[index].status == "Broken" ? "bg-red-400" : "bg-white text-slate-400"}`}
      >
        {siteStatus[index].status}
      </button>

      {/* Dropdown Options */}
      <ul
        className={`absolute w-[80%] top-[190%] mx-auto overflow-hidden bg-white border rounded-lg shadow-md origin-top transform transition-transform duration-300 ease-in-out ${
          siteStatus[index].dropDownState
            ? "scale-y-100 opacity-100 max-h-40"
            : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        {textOption.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option.status)}
            className={`px-0 py-2 cursor-pointer ${option.status == "Normal" ? "hover:bg-green-400" : option.status == "Potentially Broken" ? "hover:bg-yellow-400" : "hover:bg-red-400"}`}
          >
            {option.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownButton;
