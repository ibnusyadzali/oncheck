import React from "react";

const UploadImage = ({
  imgSrc,
  onChange,
  fileName,
  onClick,
  loadingState,
  inputKey,
  fileInputRef,
  index
}) => {
  return (
      <li className="w-[10%] flex flex-col gap-2">
        <input
          key={inputKey}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          id={`reportImage${index}`}
          onChange={(event) => onChange(event,index)}
          className="hidden"
        />
        {imgSrc ? (
          <div className="group relative">
            <p className="text-sm w-full truncate">
              {loadingState ? "Uploading file..." : fileName}{" "}
              <span className="absolute hidden group-hover:block bg-slate-600 text-white text-sm rounded p-2 shadow-lg z-10 w-max -left-1/2 transform translate-y-2">
                {fileName}
              </span>
            </p>
          </div>
        ) : (
          <label
            htmlFor={`reportImage${index}`}
            className="w-full p-1 px-2 rounded text-center text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
          >
            Choose File
          </label>
        )}
        {imgSrc && (
          <div className="flex flex-col gap-2">
            <img
              src={imgSrc}
              alt="Compressed Preview"
              className="w-full max-w-sm rounded shadow-md"
            />
            <button
              type="button"
              onClick={() => onClick(index)}
              className="w-full p-1 px-2 rounded text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
            >
              Cancel
            </button>
          </div>
        )}
      </li>
  );
};

export default UploadImage;
