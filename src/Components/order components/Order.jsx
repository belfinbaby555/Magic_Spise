import React, { useEffect, useState } from "react";
import razor from "../../Assets/Images/icons/razor.png";
import Item from "../order components/Items";
import axios from "axios";
import Pay from "./Payment";
import Loading from "../Loading";

function Order() {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState([]);
  const [total, setTotal] = useState(0);
  const [load, setLoad] = useState(true); 


  

  useEffect(() => {
    const fetchData = async () => {
      try {

        
        const cartResponse = await axios.get("/get_cart", { withCredentials: true });
        const cartData = cartResponse.data.cart;
        setItems(cartData);

        
        const totalPrice = calculateTotal(cartData);
        setTotal(totalPrice);

        
        const addressResponse = await axios.get("/getaddr", { withCredentials: true });
        const addressData = addressResponse.data.address;
        if (addressData !== "None") {
          setAddress(addressData.split("β"));
        }

        
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        if(error.message==="Request failed with status code 500"){
          window.location.href="/login"
        }
        setLoad(false); 
      }
    };

    fetchData();
  }, []);

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
  };

  const amount = {
    price: total,
    delivery: 60,
    discount: 5,
    gst: Math.round(total * 0.18),
  };

  
  return (
    <div>
      {load?<Loading/>:null}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center "></div>

          <div className="mx-auto mt-8 max-w-md md:mt-12 ">
            <div className="rounded-xl shadow-lg bg-blue-100">
              <h1 className="text-2xl font-semibold text-gray-900 pl-10 pt-5">Items</h1>
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {items.map((item) => (
                      <Item
                        key={item.product_id}
                        id={item.product_id}
                        name={item.item}
                        quantity={item.quantity}
                        unitPrice={item.price}
                        img={item.img}
                        unit={item.number}
                      />
                    ))}
                  </ul>
                </div>

                <hr className="mx-0 mt-6 mb-0 h-0" />
                <h1 className="text-2xl font-semibold text-gray-900 pt-5">Payment</h1>
                <div className="flex mt-3">
                  <img src={razor} alt="" width={60} />
                  <div className="flex flex-col text-gray-500">
                    <span>Razor Pay</span>
                    <span>**** 1234</span>
                  </div>
                </div>

                <h1 className="text-2xl mt-5 font-semibold text-gray-900 pt-5">Delivery Address</h1>
                <ul className="mt-3 text-gray-700">
                  <li className="text-lg font-medium capitalize">{address[0] + " " + address[1]}</li>
                  <li className="capitalize">{address[4] + " ," + address[5] + ' ,' + address[6]}</li>
                  <li className="text-gray-500 capitalize">{address[3]}</li>
                  <li className="text-gray-500 capitalize">{address[8]}</li>
                  <li className="text-gray-500 capitalize">{address[2]}</li>
                </ul>

                <h1 className="text-2xl mt-5 font-semibold text-gray-900 pt-5">Order Summary</h1>
                <div className="mt-6 space-y-3 pb-8 px-6 rounded-md bg-white">
                  <h1 className="border-b border-gray-300 text-gray-700  py-2">Summary</h1>
                  <div className="flex items-center justify-between text-gray-600">
                    <p className="">Order</p>
                    <p className="font-semibold">Rs. {amount.price}</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <p className="">Delivery</p>
                    <p className="font-semibold">Rs. {amount.delivery}</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <p className="">Discount</p>
                    <p className="font-semibold">Rs. {amount.discount}</p>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <p className="">GST Tax</p>
                    <p className="font-semibold">Rs. {amount.gst}</p>
                  </div>
                  <div className="flex items-center font-bold justify-between text-black pt-5">
                    <p className="">Total</p>
                    <p className=" ">Rs.{amount.delivery + amount.gst + amount.price - amount.discount}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm  text-gray-500">
                    * You will be redirected to Razor Pay payment gateway and then redirected back to our website .
                  </p>
                </div>

                <Pay />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
