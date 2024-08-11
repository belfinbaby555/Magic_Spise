import React,{useState,useEffect} from "react";
import axios from "axios";

const Items = (item) => {
  const [stock,setstock]=useState()

  useEffect(()=>{
    axios.get(`/product/${item.id}`)
    .then(res=>{
      const stock=res.data.stock.split(":")
      const qty=res.data.quantity.split(":")
      const itemStock=stock[qty.indexOf(String(item.quantity))]
      setstock(itemStock)
      
    })
  },[])
  return (
    <li class="flex  justify-between h-fit py-6 sm:py-4 text-left sm:flex-row sm:space-x-5">
      <div class="shrink-0 relative">
        <img
          class=" w-20 max-w-full rounded-lg object-cover"
          src={item.img}
          alt=""
        />
      </div>

      <div class="relative flex flex-1 ml-3 flex-col justify-between">
        <div class="sm:col-gap-5 flex items-center sm:grid sm:grid-cols-2 justify-between">
          <div class="pr-8 sm:pr-5">
            <p class="text-base font-semibold text-gray-900">{item.name}</p>
            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
            {!+stock<=item.unit ? <span className="text-green-700 text-sm font-medium">In Stock</span>: <span className="text-red-700 text-sm font-medium">Out Of Stock</span>} | {item.quantity}KG
            </p>
          </div>

          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end sm:text-right">
            <div className="flex flex-col">
              <p class="shrink-0 sm:w-20 text-xl font-semibold text-gray-900 sm:order-2 sm:ml-8 ">
                Rs. {item.unitPrice}
              </p>
              <p class="shrink-0 sm:w-20 text-sm text-gray-400 sm:order-2 sm:ml-8 ">
                Qty: {item.unit}
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
    </li>
  );
};

export default Items;
