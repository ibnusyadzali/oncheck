import React from "react";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../asset/image/LogoNavBar.png";

const NavBar = () => {
  return (
    <div>
      <div className="bg-slate-300 w-full h-14 fixed top-0 flex flex-row justify-between px-4 py-1">
        <div className="w-56 h-12 pr-4 flex justify-center">
          <img src={Logo} alt="logonavbar" className="h-12 w-fit"/>
        </div>
        <p>
          User <TbLogout2 />
        </p>
      </div>
      <div className="bg-slate-300 w-60 h-screen fixed top-14 pt-4 pl-4">
        Sidebar
      </div>
    </div>
  );
};

export default NavBar;
