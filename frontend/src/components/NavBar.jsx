import React from "react";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../asset/image/LogoNavBar.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // looping variable

  // sidebar
  const sidevar = [
    {
      id: 1,
      to: "/",
      page: "Dashboard",
    },
    {
      id: 2,
      to: "/monitoring",
      page: "Monitoring",
    },
    {
      id: 3,
      to: "/maintenance",
      page: "Maintenance",
    },
    {
      id: 4,
      to: "/corrective",
      page: "Corrective",
    },
    {
      id: 5,
      to: "/breakdown",
      page: "Breakdown",
    },
  ];

  return (
    <div>
      <div className="bg-slate-600 w-full h-[6%] fixed top-0 flex flex-row justify-between px-4 py-1">
        <div className="w-[15%] h-full flex justify-center">
          <img
            src={Logo}
            alt="logonavbar"
            className="h-full w-fit cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <p className="font-semibold text-slate-200">User</p>
          <TbLogout2
            className="text-3xl text-slate-100 cursor-pointer hover:text-5xl duration-200"
            onClick={handleLogOut}
          />
        </div>
      </div>
      <div className="bg-slate-600 w-[15%] h-[94%] fixed top-[6%]">
        <ul className="font-semibold text-slate-100">
          {sidevar.map(({ id, to, page }) => (
            <li
              key={id}
              className={`cursor-pointer pl-4 py-2 hover:bg-slate-200 hover:text-slate-600 hover:pl-6 ${
                location.pathname === to ? "border-r-4 border-slate-800 bg-slate-200 text-slate-600 pl-6" : ""
              } duration-200`}
              onClick={() => navigate(to)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
