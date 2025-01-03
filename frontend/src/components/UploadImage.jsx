import React from "react";
import { TbUpload } from "react-icons/tb";

const UploadImage = ({
  imgSrc,
  onChange,
  fileName,
  onClick,
  loadingState,
  inputKey,
  fileInputRef,
  index,
}) => {
  return (
    <li className="w-[15%] h-[100%] flex flex-col justify-between border-2 rounded p-2">
      <input
        key={inputKey}
        ref={fileInputRef}
        type="file"
        accept="image/*"
        id={`reportImage${index}`}
        onChange={(event) => onChange(event, index)}
        className="hidden"
      />
      {imgSrc ? (
        <div className="group relative">
          <p className="text-sm w-full truncate">
            {loadingState ? "Uploading file..." : fileName}{" "}
            <span className="whitespace-normal text-center absolute hidden group-hover:block bg-slate-600 text-text1 text-sm rounded p-1 shadow-lg z-10 -left-[6%] transform translate-y-0 translate-x-[2.5%]">
              {fileName}
            </span>
          </p>
        </div>
      ) : (
        <div className="h-[100%] flex flex-col justify-center items-center gap-2">
          <p className="w-full flex justify-center">Upload Picture</p>
          <label
            htmlFor={`reportImage${index}`}
            className="cursor-pointer text-text1 flex flex-row justify-center gap-2 w-[95%] p-1 px-2 rounded text-center hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
          >
            <p className="h-full flex flex-col justify-center">

            Choose File
            </p>
            <TbUpload className="h-full text-lg lg:text-sm flex flex-col justify-center"/>
          </label>
        </div>
      )}
      {imgSrc && (
        <div className="flex flex-col justify-between items-center h-[85%]">
          <img
            src={imgSrc}
            alt="Compressed Preview"
            className="w-fit h-fit max-h-[70%] rounded my-auto"
          />
          <button
            type="button"
            onClick={() => onClick(index)}
            className="w-full h-fit p-1 px-2 rounded text-text1 hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
          >
            Cancel
          </button>
        </div>
      )}
    </li>
  );
};

export default UploadImage;
