import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 m-2">
        <NavBar />
        <div>
          <div className="shadow-lg p-4 rounded flex justify-start items-center">
            <h1>{title}</h1>
          </div>
          <div className="mt-4 shadow-lg flex justify-around p-3 items-center">
            <div className="h-20 w-20 md:h-40 md:w-40 rounded-full border shadow-lg flex justify-center items-center">  
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png"
                }
                alt="Profile"
                className="rounded-full h-20 w-20 md:h-40 md:w-40"
              />
            </div>
            <div>
              <form className="flex flex-col  justify-center p-2">
                <div className="flex gap-2 justify-center items-center">
                  <DriveFolderUploadIcon />
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {inputs.map((item) => (
                  <div key={item.id} className="flex gap-4 justify-between">
                    <label className="text-base p-2">{item.label}</label>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className="border-b-2 text-sm p-2"
                    />
                  </div>
                ))}
                <div className="flex justify-center">
                  <button className="border p-2 rounded border-purple-400 bg-purple-400 w-40 hover:bg-purple-600 duration-300 mt-2">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
