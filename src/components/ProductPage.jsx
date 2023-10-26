import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const ProductPage = ({ data }) => {
  console.log(data);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 m-2">
        <NavBar />
        <div>
          {data.map((item) => (
            <div className="flex md:flex-row flex-col border p-2 justify-around">
              <div className="w-52 h-full">
                <img src={item.images[0]} alt="Product"/>
              </div>
              <div className="flex flex-col flex-wrap">
                <h1 className="font-bold">{(item.title).slice(0,20)}...</h1>
                <p>{item.description.slice(0, 30)}..</p>
                <div className="flex bg-gray-100 rounded p-2  cursor-pointer gap-2">
                <p>$ {item.price}</p>
                <p>OFFER {item.discountPercentage} % OFF</p>
                </div>
                <p className=" bg-gray-100 rounded p-2  cursor-pointer gap-2 mt-4"> ⭐{'⭐'.repeat(item.rating)} ({item.rating})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
