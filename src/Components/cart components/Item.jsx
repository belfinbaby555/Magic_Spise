import React, { useState } from "react";
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
  axios.get(`/delete/${item.id}`,{withCredentials:true})
  .then(res=>{
    if(res.data.status==="ok"){
      window.location.reload()
    }
  })

}

  return (
    <div className="justify-between mb-6 rounded-lg px-3 pb-4 sm:pb-1 pt-1 sm:pt-0 shadow-md sm:flex sm:flex-row flex-col sm:justify-start bg-blue-100 ">
      {/* Change image here with appropriate spices */}
      <img
        src={item.img}
        alt="product-image"
        className="w-full rounded-lg mb-2 sm:w-fit sm:h-20 mt-3"
      />
      <div className="sm:ml-4 ml-1 flex sm:w-full sm:items-center justify-between">
        <div className="mt-5 sm:mt-0 w-fit">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-xs text-gray-700">
            <span className="text-green-700 text-sm font-medium">In Stock</span> |{" "}
            {item.quantity} KG
          </p>
        </div>

        <div className="mt-4 flex justify-between w-fit sm:mt-0 sm:block sm:space-x-6 ">
          <div className="flex items-center">
            {/* <span className="mr-5">{units}</span> */}
            {/* <div className="">
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
            </div> */}
            <span className="w-[70px] ml-3 text-blue-700 font-bold text-lg">
              Rs. {item.unitPrice}
            </span>
            <img
              src={dlt}
              alt=""
              className=" pl-10 cursor-pointer  hover:opacity-35"
              onClick={del}
              
            />
          </div>
          {/* <div className=" ">
            <input type="checkbox" />
            <span className="text-gray-700"> This item will be a Gift</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
