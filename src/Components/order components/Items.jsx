import React from "react";

const Items = (item) => {
  return (
    <li class="flex flex-col py-6 sm:py-4 text-left sm:flex-row sm:space-x-5">
      <div class="shrink-0 relative">
        <img
          class="h-20 w-20 max-w-full rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
          alt=""
        />
      </div>

      <div class="relative flex flex-1 flex-col justify-between">
        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div class="pr-8 sm:pr-5">
            <p class="text-base font-semibold text-gray-900">{item.name}</p>
            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
              In Stock | {item.quantity}KG
            </p>
          </div>

          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end sm:text-right">
            <div className="flex flex-col">
              <p class="shrink-0 w-20 text-xl font-semibold text-gray-900 sm:order-2 sm:ml-8 ">
                ${item.unitPrice}
              </p>
              <p class="shrink-0 w-20 text-sm text-gray-400 sm:order-2 sm:ml-8 ">
                Qty: {item.quantity}
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
