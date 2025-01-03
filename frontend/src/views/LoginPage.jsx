// component
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";

// image
import Logo from "../asset/image/Logo SPS no bg.png";
import LoginImage from "../asset/image/LoginImage3.png";
import IC1 from "../asset/image/IC1.png";
import IC2 from "../asset/image/IC2.png";
import IC3 from "../asset/image/IC3.png";

// icon
import { TbEye, TbEyeOff } from "react-icons/tb";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  // login
  const input = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(input);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      navigate("/");
      // console.log(values)
    } catch (error) {
      console.log(error);
    }
  };

  // toggle password visible
  const [isVisible, setIsVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-between">
      <div className="bg-white h-screen w-[40%] flex justify-center">
        <div className="h-2/3 w-2/3 my-auto border-4 border-tertiary rounded-lg shadow-tertiary shadow-inner">
          <div className="w-full h-full p-8 flex flex-col justify-evenly">
            {/* <h1 className="text-lg text-center font-semibold">
              Reporting System
            </h1> */}
            <img src={Logo} alt="" className="h-fit w-full mx-auto" />
            <img
              src={IC3}
              alt=""
              className="fixed left-[35%] h-full w-[30%] py-4"
            />
            <img
              src={IC2}
              alt=""
              className="fixed top-4 left-4 h-fit w-[15%]"
            />
            <img
              src={IC1}
              alt=""
              className="fixed bottom-4 left-4 h-fit w-1/6"
            />
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="w-full flex justify-center font-semibold"
                  text="Email"
                />
                <Input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className="text-tertiary text-center placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
                  placeholder={"Input Your Email Here"}
                />
                <Label
                  htmlFor="password"
                  className="w-full flex justify-center font-semibold"
                  text="Password"
                />
                <div className="relative w-full inline-flex">
                  <Input
                    type={isVisible ? "text" : "password"}
                    name="password"
                    onChange={handleInputChange}
                    className="w-full text-tertiary text-center placeholder:text-sm lg:placeholder:text-[10px] placeholder:text-center"
                    placeholder={"Input Your Password Here"}
                  />

                  {/* Icon */}
                  <button
                    type="button"
                    className="absolute h-full right-[3%] text-lg lg:text-sm flex items-center text-slate-300 hover:text-slate-400 duration-200"
                    onClick={handleToggleVisibility}
                  >
                    {isVisible ? <TbEyeOff /> : <TbEye />}
                  </button>
                </div>
                <Button
                  type="submit"
                  text="Login"
                  className="text-white mt-2 hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-white to-secondary h-screen w-[20%]"></div>
      <div className="bg-secondary h-screen w-[40%] flex items-center flex-col justify-center gap-8">
        <img
          src={LoginImage}
          alt="loginimage"
          className="px-8 h-fit w-11/12 mx-auto"
        />
      </div>
    </div>
  );
};

export default LoginPage;
