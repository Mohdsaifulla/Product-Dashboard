import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const NavBar = () => {
  return (
    <div className="flex md:justify-between justify-end items-center p-4">
      <div className="border hidden md:inline-block">
        <input type="searchbox" className="" />
        <SearchIcon className="cursor-pointer"/>
      </div>
      <div className="flex gap-5">
        <div className=" hidden md:inline-flex">
          <PublicIcon className="cursor-pointer"/>
          <p className="pl-1">English</p>
        </div>
        <div>
          <DarkModeIcon className="cursor-pointer"/>
        </div>
        <div className="relative">
          <NotificationsIcon className="cursor-pointer"/>
          <div
            className="absolute top-[0.5px]
                 left-0 bg-red-600 rounded-full w-2 h-2 animate-pulse"
          ></div>
        </div>
        <div className="relative">
          <MessageIcon className="cursor-pointer"/>
          <div
            className="absolute top-0
                 left-0 bg-red-600 rounded-full w-2 h-2 animate-pulse"
          ></div>
        </div>
        <div className="hidden md:inline-block">
          <FormatListBulletedIcon className="cursor-pointer"/>
        </div>
        <div className="h-8 w-8 ">
          <img
            src="https://th.bing.com/th/id/OIP.LwUkhZpdxovxvlpO6roX_gHaHa?pid=ImgDet&rs=1"
            alt="profile"
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
