import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import NormalChart from "./NormalChart";
import DataTable from "./DataTable";

const Single = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 m-2">
        <NavBar />
        <div className="flex  gap-4 md:flex-row flex-col justify-center">
          <div className="flex-1 shadow-lg w-10/12">
            <div className="flex justify-between p-2">
              <h1>Information</h1>
              <p>Edit</p>
            </div>
            <div className="flex justify-around mt-4 p-2 gap-2">
              <img
                src="https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?auto=format&fit=crop&q=80&w=1903&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="itemImage"
                className="rounded-full w-20 h-20"
              />
              <div className="p-1">
                <h1 className="font-bold">Tina Freanca</h1>
                <p className="text-sm text-gray-400">tina23@gmail.com</p>
                <p className="text-sm text-gray-400">+92-2323 323 334</p>
                <p className="text-sm text-gray-400"> Address:Pensylvenia US</p>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <NormalChart />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-8 mt-8">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
