import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiThreeLeaves } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { adminLinks, supervisorLinks, employeeLinks } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const admin =
    localStorage.getItem("type") === "Admin" ||
    localStorage.getItem("type") === "Manager"
      ? true
      : false;

  const supervisor =
    localStorage.getItem("type") === "Supervisor" ? true : false;
  const teaPlucker =
    localStorage.getItem("type") === "Tea Plucker" ? true : false;

  const adminSidebar = () => {
    return adminLinks.map((item) => (
      <div key={item.title} className="text-xl">
        <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
          {/* {item.title} */}
        </p>
        {item.links.map((link) => (
          <NavLink
            to={`/${link.name.toLowerCase()}`}
            key={link.name}
            onClick={handleCloseSideBar}
            style={({ isActive }) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {link.icon}
            <span className="capitalize">{link.name}</span>
          </NavLink>
        ))}
      </div>
    ));
  };

  const supervisorSidebar = () => {
    return supervisorLinks.map((item) => (
      <div key={item.title} className="text-xl">
        <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
          {/* {item.title} */}
        </p>
        {item.links.map((link) => (
          <NavLink
            to={`/${link.name.toLowerCase()}`}
            key={link.name}
            onClick={handleCloseSideBar}
            style={({ isActive }) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {link.icon}
            <span className="capitalize">{link.name}</span>
          </NavLink>
        ))}
      </div>
    ));
  };

  const teaPluckerSidebar = () => {
    return employeeLinks.map((item) => (
      <div key={item.title} className="text-xl">
        <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
          {/* {item.title} */}
        </p>
        {item.links.map((link) => (
          <NavLink
            to={`/${link.name.toLowerCase()}`}
            key={link.name}
            onClick={handleCloseSideBar}
            style={({ isActive }) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {link.icon}
            <span className="capitalize">{link.name}</span>
          </NavLink>
        ))}
      </div>
    ));
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/home"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <GiThreeLeaves className="fill-green-500" />{" "}
              <span className="green_gradient">Green Lanka</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {/* Admin */}
            {admin && adminSidebar()}
            {/* Manager */}

            {/* Supervisor */}
            {supervisor && supervisorSidebar()}
            {/* Employee */}
            {teaPlucker && teaPluckerSidebar()}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
