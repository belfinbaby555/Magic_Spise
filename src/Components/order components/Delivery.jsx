import React, { useEffect, useState } from "react";
import history from "../../Assets/Images/icons/history.png";
import side from "../../Assets/Images/icons/side.png";
import Address from "./Address";
import { Link } from "react-router-dom";

const Delivery = () => {
const [add,setaddress]=useState(false);

  const chan=()=>{
    setaddress(()=>{
      console.log(add);
      return !add;

    })}


  return (
    <div className="pt-24 flex flex-row justify-center">
      <div className="mb-10">
      <h1 className="text-center text-3xl font-bold">Delivery Address</h1>
      <div class="mt-5 bg-blue-100 shadow rounded-xl w-[400px] mx-auto">
        <div class="flex">
          <div class="flex-1 py-5 pl-5 ">
            <ul>
              <li class="text-xl font-medium uppercase ">Belfin Baby</li>
              {/* Name & other details  */}
              <li>Cherupuzha, Kannur, 670690</li>
              <li class="text-gray-500">847 Jewes Bridge</li>
              <li class="text-gray-500">Apt. 17 London</li>
              <li class="text-gray-500">UK 474-769-3919</li>
            </ul>
          </div>
          <div class="flex-none pt-2.5 pr-2.5 pl-1">
            <img src={history} alt="" className="h-5 ml-1" />
          </div>
        </div>
        <button onClick={chan} className="hover:shadow-form w-[300px] hover:bg-gray-800 duration-500 mx-10 mb-5 rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add as New Address
        </button>
       <Link to="/payment"><button className="hover:shadow-form hover:bg-gray-800 duration-500 w-[300px] mx-10 mb-5 rounded-md bg-blue-700 hover py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Procced
        </button></Link>
      </div>
      </div>
      
      {add && (<div className=" w-[500px]">
      <Address/>
      </div>)}
      
    </div>
  );
};

export default Delivery;
