import React, { useEffect, useState } from "react";
import dlt from "../../Assets/Images/icons/dlt.svg";
import axios from "axios";

const Item = (item) => {
  const [units, setUnits] = useState(item.unit); // change value here to og quantity when doing backend
  const [stock,setstock]=useState()
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
useEffect(()=>{
  axios.get(`/product/${item.id}`)
  .then(res=>{
    const stock=res.data.stock.split(":")
    const qty=res.data.quantity.split(":")
    const itemStock=stock[qty.indexOf(String(item.quantity))]
    setstock(stock[itemStock])
    
  })
},[])
  

const del=()=>{
  axios.get(`/delete/${item.name}/${item.price}`,{withCredentials:true})
  .then(res=>{
    if(res.data.status==="ok"){
      window.location.reload()
    }
  })

}

  return (
    <div className="justify-between mb-6 rounded-lg px-3 pb-4 sm:pb-1 pt-1 sm:pt-0 relative shadow-md sm:flex sm:flex-row flex-col sm:justify-start bg-blue-100 ">
      {/* Change image here with appropriate spices */}
      <img
        src={item.img}
        alt="product-image"
        className="w-fir rounded-lg mb-2 md:w-fit md:h-20 mt-3"
      />
      <div className="sm:ml-4 ml-1 flex md:flex-row flex-col md:w-full sm:items-center justify-between">
        <div className="mt-5 sm:mt-0 md:w-fit full flex items-center justify-between">
          <div>
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-sm text-gray-700">
            {!+stock<=item.unit ? <span className="text-green-700 text-sm font-medium">In Stock</span>: <span className="text-red-700 text-sm font-medium">Out Of Stock</span>} |{" "}
            {item.quantity} KG
          </p>
          </div>
          <span className="mr-0 md:hidden block">Qty: <b>{units}</b></span>
        </div>

        <div className="mt-6 flex justify-between md:w-fit w-full sm:mt-0 sm:flex-row  ">
          <div className="flex w-full items-center justify-between">
            <span className="mr-10 md:block hidden">Qty: <b>{units}</b></span>
            
            <span className="w-20 md:ml-3 text-blue-700 font-bold text-xl md:text-lg">
            ₹ {item.unitPrice} /-
            </span>
            <img
              src={dlt}
              alt=""
              className=" md:pl-10 cursor-pointer  hover:opacity-35"
              onClick={del}
              
            />
          </div>
         
        </div>
      </div>
      <p className="absolute bottom-0 right-1 text-sm text-gray-700">Delivery: ₹{item.delivery}</p>
    </div>
  );
};

export default Item;
