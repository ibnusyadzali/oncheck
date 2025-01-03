import React from "react";
import IMG1 from "../asset/image/notFound.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleHome = async (event) => {
    event.preventDefault();
    try {
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-full gap-16 flex items-center justify-center bg-secondary">
      <div className="h-[50%] flex flex-col justify-center items-start">
        <p className="text-[#71C4C3] text-2xl font-semibold drop-shadow-md">
          Looks like you've found the doorway to the great nothing
        </p>
        <p className="text-white drop-shadow-md text-md">
          Sorry about that! Please visit our homepage to get where you need to
          go.
        </p>
        <Button
          type="button"
          onClick={handleHome}
          text="Back to Homepage"
          className="text-white mt-8 hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
        />
      </div>
      <img src={IMG1} alt="notFoundImage" className="h-[50%]" />
    </div>
  );
};

export default NotFound;
