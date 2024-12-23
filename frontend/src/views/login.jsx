import React from "react";
import Logo from "../asset/image/Logo SPS no bg.png";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import LoginImage from "../asset/image/LoginImage3.png"
import IC1 from "../asset/image/IC1.png"
import IC2 from "../asset/image/IC2.png"
import IC3 from "../asset/image/IC3.png"

const login = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="bg-white h-screen w-[40%] flex justify-center">
        <div className="h-2/3 w-2/3 my-auto border-4 border-tertiary rounded-lg shadow-tertiary shadow-inner">
          <div className="w-full h-full p-8 flex flex-col justify-evenly">
            <img src={Logo} alt="" className="h-fit w-full mx-auto" />
            <img src={IC3} alt="" className="fixed left-[35%] h-full w-[30%] py-4" />
            <img src={IC2} alt="" className="fixed top-4 left-4 h-fit w-[15%]" />
            <img src={IC1} alt="" className="fixed bottom-4 left-4 h-fit w-1/6" />
            <div>
              <form action="" className="flex flex-col">
                <Label htmlFor="email" className="" text="Email"/>
                <Input type="email" className=" " placeholder={"Input Your Email Here"} />
                <Label htmlFor="password" className="" text="Password"/>
                <Input type="password" className=" " placeholder={"Input Your Password Here"}/>
                <Button type="button" text="Login"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-white to-secondary h-screen w-[20%]"></div>
      <div className="bg-secondary h-screen w-[40%] flex items-center">
        <img src={LoginImage} alt="loginimage" className="px-8 h-fit w-11/12 mx-auto my-auto"/>
      </div>
    </div>
  );
};

export default login;
