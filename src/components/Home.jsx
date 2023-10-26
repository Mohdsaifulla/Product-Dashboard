import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Widget from "./Widget";
import FeatureChart from "./FeatureChart";
import NormalChart from "./NormalChart";
import TableComp from "./TableComp";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 m-2">
          <NavBar />
          <div className="flex  justify-around mt-4 flex-wrap md:w-full w-10/12">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="mt-4 p-6 flex flex-col justify-around  gap-3 md:flex-row items-center md:w-full w-10/12">
            <FeatureChart />
            <NormalChart />
          </div>
          <div className="flex flex-col justify-center items-center md:w-full w-10/12">
            <div className="md:w-full w-10/12 shadow-lg p-4 font-bold rounded">Latest Transactions</div>
            <TableComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
