import axios from "axios";
import React from "react";

function Address () {
  


const handle = (event)=>{
  event.preventDefault()
var csrf

  
  const data={'address': 
    event.target.fname.value + "β" +
    event.target.lname.value + "β" +
    event.target.phone.value + "β" +
    event.target.place.value + "β" +
    event.target.area.value + "β" +
    event.target.town.value + "β" +
    event.target.pincode.value + "β" +
    event.target.state.value + "β" +
    event.target.landmark.value
  }
axios.post('/setaddr',data,{
  headers:{
    "Content-Type":"application/json",
    "X-CSRFToken":csrf,
  },
  withCredentials:true
})
.then(res=>{console.log(res.data)
if(res.data.message === 'Save successful'){
  window.location.reload()
}
})


}



  return (
    <div className="pt-0">
      <h1 className="text-center text-2xl  font-bold">Add a New Address</h1>
      <div className="flex items-center justify-center p-5 ">
        <div className="mx-auto w-full max-w-[550px] bg-blue-100 sm:p-10 p-2 rounded-lg">
          <form onSubmit={handle}>
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
                placeholder="First Name (eg:'John')"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="lname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter Your Last Name
              </label>
              <input
              key="cart"
                type="text"
                name="lname"
                required
                id="lname"
                placeholder="Last Name (eg:'Doe')"
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
                required
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
                Enter Your Place / Flat / Apartment
              </label>
              <input
                type="text"
                required
                name="place"
                id="place"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="area"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Area / Sector / Village / Post Office
              </label>
              <input
                type="text"
                name="area"
                required
                id="area"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="town"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Town / City / District
              </label>
              <input
                type="text"
                required
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
                required
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
                required
                id="state"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            
            <div className="mb-5">
              <label
                for="landmark"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Landmark (Optional)
              </label>
              <input
                type="text"
                name="landmark"
                id="landmark"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button type="submit" className="hover:shadow-form w-full rounded-md bg-blue-700 hover:bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
