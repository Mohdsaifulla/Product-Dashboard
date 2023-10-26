import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        quant:200,
        link: "See all users",
        per:"22.5%",
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        quant:300,
        link: "View all users",
        per:"25.9%",

      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        money:'₹ 23445',
        link: "View net earning",
        per:"36.4%",

      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        money:'₹ 43433',
        link: "See details",
        per:"42.5%",

      };
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-row justify-between gap-6 p-2 shadow-lg rounded h-32 w-44">
      <div className="flex flex-col justify-around p-1">
        <span className="text-sm text-[#333]">{data.title}</span>
        <span>{data.money?data.money:data.quant}</span>
        <span className="text-[10px] underline cursor-pointer">
          {data.link}
        </span>
      </div>
      <div className="flex flex-col justify-around p-1">
        <span className="text-sm">{data.per}</span>
        <span>
          <AccountCircleIcon className="text-green-400" />
        </span>
      </div>
    </div>
  );
};

export default Widget;
