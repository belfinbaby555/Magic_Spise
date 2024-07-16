import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderedItems = (item) => {
var text=item.name;

const details=text.replace(/'/g, '"');

const info=JSON.parse(details)

const adde=item.address.split("β");

const cancel=()=>{
  axios.get(`/cancel/${item.id}`,{withCredentials:true,})
  .then(res=>{
    if(res.data.message){
      window.location.reload()
    }
  })
}

  return (
    <div className="flex flex-col">
    <li class="flex flex-col p-2 sm:p-0 h-fit overflow-hidden relative text-left sm:flex-row sm:space-x-5 my-3 mb-0 rounded-t-lg bg-blue-100">
      <div class="shrink-0 relative">
        
        <img
          class=" sm:w-32 max-w-full rounded-lg sm:m-2 box-border object-cover"
          src={info.image}
          alt=""
        />
      </div>

      <div class="relative flex flex-1 flex-col justify-between">
        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2 sm:my-auto my-4 flex justify-between">
          <div class="pr-8 sm:pr-5 my-auto pl-3">
            <p class="text-lg capitalize font-semibold text-gray-900">{info.name}</p>
          
            <p class="shrink-0 w-20 text-sm text-gray-400 sm:order-2 sm:ml-0 ">
                Qty: {info.quantity}
              </p>
          </div>

          <div class="sm:mt-0 flex mr-3 justify-between items-center sm:justify-end text-right">
            <div className="flex flex-col">
              <p class="shrink-0 w-fit text-xl font-semibold text-gray-900 sm:order-2 my-auto sm:ml-8 ">
                Rs. {item.price}
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
      {item.status==="canceled" ? <div className="hidden"></div>:<button onClick={cancel} className="bottom-0 right-0 px-3 py-2 h-14 sm:h-24 sm:pb-2 bg-blue-600 rounded-lg sm:rounded-none sm:rounded-bl-xl text-slate-50">Cancel</button> }
      
    </li>
    <div className="px-5 py-5 flex sm:flex-row flex-col bg-blue-100 rounded-b-lg justify-between">
      
      <ul className="my-auto scale-105">
      <h1 class="text-2xl font-semibold text-gray-900  mb-5">
                  Delivery Address
                </h1>
              <li class="text-xl font-medium uppercase ">{adde[0] + " " + adde[1]}</li>
              {/* Name & other details  */}
              <li className="capitalize">{adde[4] + " ," + adde[5] + ' ,' + adde[6]}</li>
              <li class="text-gray-500 capitalize">{adde[3]}</li>
              <li class="text-gray-500 capitalize">{adde[8]}</li>
              <li class="text-gray-500 capitalize">{adde[2]}</li>
              <p className={"mt-7 px-2 py-1 capitalize text-white rounded text-center " + (item.status==="canceled"? "bg-red-600":"bg-green-600")}>{item.status}</p>
            </ul>
            <div class="mt-6  pb-8 w-full sm:w-1/2 px-6 rounded-md bg-white">
            <div className="space-y-3">
                  <h1 className="border-b border-gray-300 text-gray-700  py-2">
                    Summary
                  </h1>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Ordered on</p>
                    <p class="font-semibold ">{item.date.slice(0,10)}</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Unit price</p>
                    <p class="font-semibold ">Rs. {info.price}</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Quatity</p>
                    <p class="font-semibold ">{info.quantity}</p>
                  </div>
                  <div class="flex items-center font-bold justify-between text-black pt-5">
                    <p class="">Total</p>
                    <p class=" ">Rs.{item.price}</p>
                  </div>
                </div>
                </div>
    </div>
    </div>
  );
};

export default OrderedItems;