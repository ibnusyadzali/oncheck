import React from "react";
import {
  TbDeviceDesktopAnalytics,
  TbAdjustmentsCog,
  TbLayout2,
  TbLogout2,
} from "react-icons/tb";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineReportProblem } from "react-icons/md";
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
      icon: <TbDeviceDesktopAnalytics />,
    },
    {
      id: 2,
      to: "/monitoring",
      page: "Monitoring",
      icon: <TbLayout2 />,
    },
    {
      id: 3,
      to: "/maintenance",
      page: "Maintenance",
      icon: <TbAdjustmentsCog />,
    },
    {
      id: 4,
      to: "/corrective",
      page: "Corrective",
      icon: <GiAutoRepair />,
    },
    {
      id: 5,
      to: "/breakdown",
      page: "Breakdown",
      icon: <MdOutlineReportProblem />,
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
          <p className="font-semibold text-text1">User</p>
          <TbLogout2
            className="text-3xl text-text1 cursor-pointer hover:text-5xl duration-200"
            onClick={handleLogOut}
          />
        </div>
      </div>
      <div className="bg-slate-500 w-[15%] h-[94%] fixed top-[6%]">
        <ul className="font-semibold text-text1">
          {sidevar.map(({ id, to, page, icon }) => (
            <li
              key={id}
              className={`cursor-pointer border-b-[1px] border-slate-200 pl-4 py-2 flex flex-row justify-between hover:bg-slate-100 hover:text-slate-600 hover:pl-6 ${
                location.pathname === to
                  ? "bg-white text-slate-600"
                  : ""
              } duration-200`}
              onClick={() => navigate(to)}
            >
              {page}
              <p className={`my-auto text-md mx-[5%] ${location.pathname === to && ""}`}>{icon}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
