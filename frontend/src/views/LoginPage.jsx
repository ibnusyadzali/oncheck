
// component
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";

// image
import Logo from "../asset/image/Logo SPS no bg.png";
import LoginImage from "../asset/image/LoginImage3.png"
import IC1 from "../asset/image/IC1.png"
import IC2 from "../asset/image/IC2.png"
import IC3 from "../asset/image/IC3.png"

// hooks
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    };

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
              <form onSubmit={handleSubmit} className="flex flex-col">
                <Label htmlFor="email" className="w-full flex justify-center" text="Email"/>
                <Input type="email" className="text-tertiary font-semibold" placeholder={"Input Your Email Here"} />
                <Label htmlFor="password" className="w-full flex justify-center" text="Password"/>
                <Input type="password" className="text-tertiary font-semibold" placeholder={"Input Your Password Here"}/>
                <Button type="submit" text="Login" className="text-white hover:text-tertiary bg-primary hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-tertiary hover:ring-tertiary disabled:bg-gray-400 disabled:cursor-not-allowed duration-200"/>
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

export default LoginPage;
