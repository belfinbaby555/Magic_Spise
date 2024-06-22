import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = [
    {
      id: 1,
      name: "Black Clove",
      inStock: true,
      quantity: 1,
      unitPrice: 25,
      isGift: true,
    },
    {
      id: 2,
      name: "Cinnamon",
      inStock: true,
      quantity: 3,
      unitPrice: 45,
      isGift: false,
    },
    {
      id: 3,
      name: "Turmeric",
      inStock: true,
      quantity: 3,
      unitPrice: 25,
      isGift: true,
    },
    {
      id: 4,
      name: "Nutmeg",
      inStock: true,
      quantity: 3,
      unitPrice: 25,
      isGift: false,
    },
  ];
  return (
    <div>
      <div class="pt-24 h-fit pb-24">
        <h1 class="mb-10 text-left text-2xl  font-bold border-l-4 ml-7 sm:ml-56 px-3 border-sky-900">My Cart</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg sm:w-2/3">
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  inStock={item.inStock}
                  quantity={item.quantity}
                  unitPrice={item.unitPrice}
                  isGift={item.isGift}
                />
              );
            })}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-blue-100 px-4 py-3 shadow-md md:mt-0 md:w-1/3">
            <h1 className="text-xl font-medium">Subtotal</h1>
            <p className="text-gray-600 font-medium pb-5">(4 items)</p>
            <div class=" space-y-3 pb-5 px-5 rounded-md bg-white">
              <h1 className="border-b border-gray-300 text-gray-700  py-2">
                Summary
              </h1>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Order</p>
                <p class="font-semibold ">$239.00</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Delivery</p>
                <p class="font-semibold ">$5.30</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">Discount</p>
                <p class="font-semibold ">$12.00</p>
              </div>
              <div class="flex items-center justify-between text-gray-600">
                <p class="">GST Tax</p>
                <p class="font-semibold ">$2.00</p>
              </div>
              <div class="flex items-center font-bold justify-between text-black pt-5">
                <p class="">Total</p>
                <p class=" ">$2.00</p>
              </div>
            </div>
            <Link to="/order"><button class="mt-6 w-full rounded-md bg-blue-700 py-1.5 font-medium text-blue-50 duration-200 sm:duration-500 active:bg-gray-800 sm:hover:bg-gray-800">
              Proceed to Buy
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
