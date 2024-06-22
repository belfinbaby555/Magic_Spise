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
    <div className="pt-24 flex flex-col sm:flex-row justify-center box-border px-4 mb-5">
      <div className="mb-10">
      <h1 className="text-center text-3xl font-bold">Delivery Address</h1>
      <div class="mt-5 bg-blue-100 shadow rounded-xl w-[calc(100vw - 40px)] mx-4 sm:w-[400px] mx-auto">
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
          <div class="flex-none pt-2.5 pr-2.5 pl-1 h-fit">
            <img src={history} alt="" className="h-5 ml-1" />
          </div>
        </div>
        <div className="flex flex-col box-border px-5 sm:px-12">
        <button onClick={chan} className="sm:hover:shadow-form active:shadow-form w-full active:bg-gray-800 sm:hover:bg-gray-800 sm:duration-500 duration-200 mx-auto mb-5 rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add as New Address
        </button>
       <Link to="/payment" className="mx-auto w-full"><button className="active:shadow-form sm:hover:shadow-form active:bg-gray-800 sm:hover:bg-gray-800 sm:duration-500 duration-200 w-full mx-auto mb-5 rounded-md bg-blue-700 hover py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Procced
        </button></Link>
        </div>
      </div>
      </div>
      
      {add && (<div className=" w-full sm:w-[500px]">
      <Address/>
      </div>)}
      
    </div>
  );
};

export default Delivery;
