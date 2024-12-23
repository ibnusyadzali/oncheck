import React from "react";
import Gif from "../asset/gif/loadingGIF.gif";

const LoadingScreen = () => {
  return (
    <div>
      <div className="fixed h-screen w-full bg-tertiary bg-opacity-70 flex justify-center items-center">
        <img src={Gif} alt="loading" className="w-fit h-[15%]"/>
      </div>
    </div>
  );
};

export default LoadingScreen;
