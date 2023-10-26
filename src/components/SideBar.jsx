import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import {Link} from 'react-router-dom'
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return isOpen ? (
    <div className="bg-white border-r-2 w-48 flex flex-col justify-center items-center">
      <div className="p-2 font-bold text-black  w-48 flex justify-center">
        <span
          className="text-2xl text-purple-600 w-10  hover:bg-purple-200 flex justify-center rounded-full duration-300 items-center"
          onClick={handleNav}
        >
          {/* <KeyboardBackspaceIcon /> */}
        </span>
      </div>
      <div className="cursor-pointer fixed top-0 left-0 z-10     bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="p-2 font-bold text-black  border-b-2 w-48 flex justify-center">
        <span
          className="text-2xl text-purple-600 w-10 hover:bg-purple-200 flex justify-center rounded-full duration-300 items-center"
          onClick={handleNav}
        >
          <KeyboardBackspaceIcon />
        </span>
      </div>
        <ul className="">
          <p className="title">MAIN</p>
          <Link to="/">
         
          <li className="hover:bg-purple-400 w-full p-2 border duration-300 rounded flex flex-row">
          <SpaceDashboardOutlinedIcon />
            <span className="p-1">Dashboard</span>
            
          </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/users">
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded flex flex-row">
            <VerifiedUserIcon />
            <span className="p-1">User</span>
          </li>
          </Link>

          <Link to="/productpage">
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded flex flex-row">
            <InventoryIcon />
            <span className="p-1">Products</span>
          </li>
          </Link>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <ListAltIcon />
            <span className="p-1">Orders</span>
          </li>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <LocalShippingIcon />
            <span className="p-1">Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <QueryStatsIcon />
            <span className="p-1">Stats</span>
          </li>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded flex flex-row">
            <NotificationsActiveIcon />
            <span className="p-1">Notification</span>
          </li>
          <p className="title">SERVICES</p>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <LoginIcon />
            <span className="p-1">Logs</span>
          </li>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <SettingsIcon />
            <span className="p-1">Settings</span>
          </li>
          <p className="title">USER</p>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <AccountCircleIcon />
            <span className="p-1">Profile</span>
          </li>
          <li className="hover:bg-purple-400 p-2 border border-transparent hover:border duration-300 rounded">
            <LogoutIcon />
            <span className="p-1">Logout</span>
          </li>
        </ul>
      </div>
      {/* <p className="title">THEME</p>
      <div className="flex gap-4 justify-center mt-4 mb-4">
        <div className="w-[20px] h-[20px] bg-white border border-black rounded"></div>
        <div className="w-[20px] h-[20px] bg-[#333] border border-black rounded"></div>
      </div> */}
    </div>
  ) : (
    <div
      onClick={handleNav}
      className="m-4 hover:bg-purple-200 h-10 w-10 rounded-full flex justify-center "
    >
      <span className="text-2xl">
        <ReorderIcon className="text-purple-600" />
      </span>
    </div>
  );
};

export default SideBar;
