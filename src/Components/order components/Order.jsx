import React from "react";
import razor from "../../Assets/Images/icons/razor.png";
import Item from "../order components/Items";

const Order = () => {
  const items = [
    {
      id: 1,
      name: "Black Clove",
      inStock: true,
      quantity: 1,
      unitPrice: 25,
    },
    {
      id: 2,
      name: "Cinnamon",
      inStock: true,
      quantity: 2,
      unitPrice: 45,
    },
    {
      id: 3,
      name: "Turmeric",
      inStock: true,
      quantity: 3,
      unitPrice: 25,
    },
    {
      id: 4,
      name: "Nutmeg",
      inStock: true,
      quantity: 1,
      unitPrice: 25,
    },
  ];
  return (
    <div>
      <h1 className="text-center">Order Confirmation</h1>
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center "></div>

          <div class="mx-auto mt-8 max-w-md md:mt-12 ">
            <div class="rounded-xl  shadow-lg bg-blue-100">
              <h1 class="text-2xl font-semibold text-gray-900 pl-10 pt-5">
                Items
              </h1>
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    {items.map((item) => {
                      return (
                        <Item
                          key={item.id}
                          name={item.name}
                          inStock={item.inStock}
                          quantity={item.quantity}
                          unitPrice={item.unitPrice}
                        />
                      );
                    })}
                  </ul>
                </div>

                <hr class="mx-0 mt-6 mb-0 h-0" />
                <h1 class="text-2xl font-semibold text-gray-900 pt-5">
                  Payment
                </h1>
                <div className="flex mt-3">
                  <img src={razor} alt="" width={60} />
                  <div className="flex flex-col text-gray-500">
                    <span>Razor Pay</span>
                    <span>**** 1234</span>
                  </div>
                </div>

                <h1 class="text-2xl mt-5 font-semibold text-gray-900 pt-5">
                  Delivery Address
                </h1>
                <ul className="mt-3 text-gray-700">
                  <li class="text-lg font-medium ">Belfin Baby</li>
                  {/* Name & other details  */}
                  <li>Cherupuzha, Kannur, 670690</li>
                  <li class="text-gray-500">847 Jewes Bridge</li>
                  <li class="text-gray-500">Apt. 17 London</li>
                  <li class="text-gray-500">UK 474-769-3919</li>
                </ul>

                <h1 class="text-2xl mt-5 font-semibold text-gray-900 pt-5">
                  Order Summary
                </h1>
                <div class="mt-6 space-y-3 pb-8 px-6 rounded-md bg-white">
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
                <div class="mt-6 flex items-center justify-between">
                  <p class="text-sm  text-gray-500">
                    * You will be redirected to Razor Pay payment gateway and
                    then redirected back to our website .
                  </p>
                </div>

                <div class="mt-6 text-center">
                  <button
                    type="button"
                    class="group inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out duration-500 focus:shadow hover:bg-gray-800"
                  >
                    Place Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
