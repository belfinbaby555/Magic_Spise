import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderedItems = (item) => {
var text=item.name;
const details=text.split("'")
const price=details[2].split(",")
const qty=details[4].split("]")

const cancel=()=>{
  axios.get("/cancel/8",{withCredentials:true,})
  .then(res=>{
    console.log(res.data)
  })
}

  return (
    <li class="flex flex-col p-2 sm:p-0 h-fit overflow-hidden relative text-left sm:flex-row sm:space-x-5 my-3 rounded-md bg-blue-100">
      <div class="shrink-0 relative">
        
        <img
          class=" sm:w-32 max-w-full rounded-lg sm:m-2 box-border object-cover"
          src={details[3]}
          alt=""
        />
      </div>

      <div class="relative flex flex-1 flex-col justify-between">
        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2 sm:my-auto my-4 flex justify-between">
          <div class="pr-8 sm:pr-5 my-auto pl-3">
            <p class="text-lg capitalize font-semibold text-gray-900">{details[1]}</p>
          
            <p class="shrink-0 w-20 text-sm text-gray-400 sm:order-2 sm:ml-0 ">
                Qty: {qty[0].slice(1)}
              </p>
          </div>

          <div class="sm:mt-0 flex mr-3 justify-between items-center sm:justify-end text-right">
            <div className="flex flex-col">
              <p class="shrink-0 w-fit text-xl font-semibold text-gray-900 sm:order-2 my-auto sm:ml-8 ">
                Rs. {price[1]}
              </p>
              
            </div>
          </div>
        </div>

        <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          {/* <button
            type="button"
            class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            
          </button> */}
        </div>
      </div>
      <button onClick={cancel} className="bottom-0 right-0 px-3 py-2 h-14 sm:h-24 sm:pb-2 bg-blue-600 rounded-lg sm:rounded-none sm:rounded-r-lg text-slate-50">Cancel</button>
    </li>
  );
};

export default OrderedItems;