import React from "react";

const Address = () => {
  return (
    <div className="pt-0 ">
      <h1 className="text-center text-2xl pb-3 sm:pb-0 font-bold">Add a New Address</h1>
      <div className="flex items-center justify-center sm:p-5 ">
        <div className="mx-auto w-full max-w-[550px] bg-blue-100 px-5 py-10 sm:p-10 rounded-lg">
          <form>
            <div className="mb-5">
              <label
                for="fname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter Your First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Belfin"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="lname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter Your First Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Baby"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter Your Mobile Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+91 342-2344-34"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="address"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter Your House / Flat / Apartment
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="area"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Area / Sector / Village
              </label>
              <input
                type="text"
                name="area"
                id="area"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="town"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Town / City
              </label>
              <input
                type="text"
                name="town"
                id="town"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="pincode"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="state"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="town"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                District
              </label>
              <input
                type="text"
                name="district"
                id="district"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="landmark"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                id="landmark"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-blue-700 hover:bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add as New Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
