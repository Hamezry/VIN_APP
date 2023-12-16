import { NavLink } from "react-router-dom";

import { menu } from "../../context/routes";

function Sidebar() {
  const activeStyle =
    "border text-white text-[16px] font-medium shadow-xl rounded-3xl flex items-center gap-3 p-3";
  const baseStyle =
    "text-VIN-textGray font-medium text-[16px] flex items-center gap-3  p-3";

  return (
    <div className=" flex justify-between bg-VIN-navColor items-center w-full h-24 px-5">
   
      <h2 className="">VIN-LOGO</h2>
      <div className="gap-4 items-center flex">
        {menu?.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path ?? ""}
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              end
            >
              {route?.label ?? ""}
            </NavLink>
          );
        })}
      </div>

      <h2 className="p-5 text-lg font-semibold">Profile</h2>
    </div>
  );
}

export default Sidebar;
