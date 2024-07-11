import React, { useState } from "react";
import up from "../../Assets/Images/icons/arrow_up.svg";
import dlt from "../../Assets/Images/icons/dlt.svg";
import axios from "axios";

const Item = (item) => {
  const [units, setUnits] = useState(item.quantity); // change value here to og quantity when doing backend
  const incUnit = () => {
    setUnits(() => {
      return units + 1;
    });
  };
  const decUnit = () => {
    setUnits(() => {
      if (units > 1) {
        return units - 1;
      } else return units;
    });
  };

const del=()=>{
  axios.get(`/delete/${item.name}`,{withCredentials:true})

  window.location.reload()}

  return (
    <div className="justify-between mb-6 rounded-lg px-3 pb-1 shadow-md sm:flex sm:justify-start bg-blue-100 ">
      {/* Change image here with appropriate spices */}
      <img
        src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="product-image"
        className="w-full rounded-lg sm:w-16 sm:h-20 mt-4"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:items-center sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-xs text-gray-700">
            <span className="text-green-700 font-medium">In Stock</span> |{" "}
            {item.quantity}KG
          </p>
        </div>

        <div className="mt-4 flex justify-between  sm:mt-0 sm:block sm:space-x-6 ">
          <div className="flex items-center">
            <span className="">{units}</span>
            <div className="">
              <img
                src={up}
                alt=""
                className="h-10 cursor-pointer"
                onClick={incUnit}
              />

              <img
                src={up}
                alt=""
                className={
                  "rotate-180 h-10 cursor-pointer" +
                  (units === 1 ? ` opacity-20` : ``)
                }
                onClick={decUnit}
              />
            </div>
            <span className="w-[70px] ml-3 text-blue-700 font-bold text-lg">
              Rs. {item.unitPrice}
            </span>
            <img
              src={dlt}
              alt=""
              className=" pl-10 cursor-pointer hover:opacity-35"
              onClick={del}
              
            />
          </div>
          <div className=" ">
            <input type="checkbox" />
            <span className="text-gray-700"> This item will be a Gift</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
