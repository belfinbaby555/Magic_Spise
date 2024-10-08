import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const Cart = () => {
  const [items,setitems]=useState([])
  const [load,setload]=useState(false)
 
  const navigate=useNavigate();


  useEffect(()=>{
    axios.get("/get_cart",{withCredentials:true})
  .then(res=>{setitems(res.data.cart)
    setload(true)
  })
  .catch(e=>{
    if(e.message==="Request failed with status code 500"){
      navigate("/login")
      setload(false)
    }
    else{
      console.error(e.message)
    }
  })
  },[])
  
  const total = Object.entries(items).reduce((accumulator, [key, item]) => {
    return accumulator + Math.ceil((item.price - Number(item.delivery_fees)) - ((item.price - Number(item.delivery_fees))*(Number(item.tax)/100)));
  }, 0);

  const discount = Object.entries(items).reduce((accumulator, [key, item]) => {
    return accumulator + ((item.price - Number(item.delivery_fees))*(Number(item.discount)/100));
  }, 0);

  const delivery=Object.entries(items).reduce((a, [key, item]) => {return a + Number(item.delivery_fees)}, 0)

const amount={
  'price':total,
  'delivery':delivery,
  'discount':discount,
  'gst':total*0.18
}

  return (
    
    <div className="">
      {load?<div></div>:<Loading/>}
      <div class={"pt-24" + (Object.entries(items).length?" h-fit":" h-screen")}>

        <h1 class="mb-10 text-2xl  font-bold border-l-4 ml-4 px-3 border-blue-600 text-left sm:ml-56">My Cart</h1>
        {Boolean(Object.entries(items).length) && (
       
        <div class="mx-auto max-w-5xl justify-center px-3 md:px-6 md:flex md:space-x-6 xl:px-0">
        
          <div class="rounded-lg md:w-2/3">
            {items.map((item) => {
              return (
                <Item
                  id={item.product_id}
                  name={item.item}
                  unit={item.number}
                  quantity={item.quantity}
                  price={item.price}
                  unitPrice={Math.round((item.price - item.delivery_fees)-(((item.price - item.delivery_fees) * Number(item.tax)/100)+((item.price - item.delivery_fees) * Number(item.discount)/100)))}
                  img={item.img}
                  discount={item.discount}
                  delivery={item.delivery_fees}
                />
              );
            })}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-blue-100 px-2 md:px-4 py-3 mb-5 shadow-md md:mt-0 md:w-1/3">
            <h1 className="text-xl font-medium">Subtotal</h1>
            <p className="text-gray-600 font-medium pb-5">({Object.entries(items).length} items)</p>
            <div class=" space-y-3 pb-5 px-3 md:px-5 rounded-md bg-white">
              <h1 className="border-b border-gray-300 text-gray-700  py-2">
                Summary
              </h1>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Order</p>
                <p class="font-semibold ">Rs. {amount.price}</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Delivery</p>
                <p class="font-semibold ">Rs. {amount.delivery}</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Discount</p>
                <p class="font-semibold ">Rs. {amount.discount}</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">GST Tax(18%)</p>
                <p class="font-semibold ">Rs. {Math.round(amount.gst)}</p>
              </div>
              <div class="flex items-center font-bold justify-between text-black pt-5">
                <p class="">Total</p>
                <p class=" ">Rs. {Math.round(amount.price + amount.delivery + amount.gst - amount.discount)}</p>
              </div>
            </div>
            <Link to="/order"><button class="mt-6 w-full rounded-md bg-blue-700 py-1.5 font-medium text-blue-50 duration-500 hover:bg-gray-800">
              Proceed to Buy
            </button></Link>
          </div>
        </div> )}
        {!Object.entries(items).length && (
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex sm:my-28 flex-col md:space-x-6 xl:px-0">
          <h1 className="text-3xl font-semibold ml-6 text-center">Your cart is Empty</h1>
          <p className="mx-auto text-center my-4">Add items to cart to view here</p>
          <div className="flex justify-center"><Link to='/products'><button className="w-40 h-10 rounded-md text-slate-50 bg-blue-700">Add products</button></Link></div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
