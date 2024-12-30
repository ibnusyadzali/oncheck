import React from "react";

const OptionButton = ({ name, buttonArray, onClick, flag }) => {
    // console.log(buttonArray)
  return (
    <div>   
        <button disabled className="w-[10%] py-2 px-4 font-semibold rounded-s-lg bg-slate-600 text-slate-100 border-s-2 border-y-2">
            {name}
        </button>
        {buttonArray.map(({id, content, className, disabled, status}) => (
            <button
            key={id}
            className={`px-4 py-2 font-semibold hover:bg-slate-200 duration-200 
                ${status === "complete" && flag == content ? "bg-green-400 text-slate-100 hover:text-green-400" : status === "complete" ? "text-green-400" : ""}
                ${status === "incomplete" && flag == content ? "bg-yellow-400 text-slate-100 hover:text-yellow-400" : status === "incomplete" ? "text-yellow-400" : ""}
                ${status === "empty" && flag == content ? "bg-primary text-slate-100 hover:text-primary" : status === "empty" ? "text-red-400" : ""}
                ${flag == content && "text-slate-100" }
             ${className}`}
            onClick={(event) => onClick(event,content)}
            disabled={disabled}
            >
            {content}
            </button>
        ))}
    </div>
  );
};

export default OptionButton;
             