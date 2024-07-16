import React, { useEffect, useState } from "react";
import history from "../../Assets/Images/icons/history.png";
import Address from "./Address";
import { Link } from "react-router-dom";
import axios from "axios";

const Delivery = () => {
const [add,setaddress]=useState(false);
const [status,getstatus]=useState();
const [address,getaddress]=useState([])

useEffect(()=>{
  axios.get('/getaddr',{withCredentials:true})
  .then(res=>{
    if(res.data.address==='None'){
      getstatus(status=>true)
    }
    else{
      const info=res.data.address;
      const out=info.split('β')
      getaddress(address=>out)
      
      }
  })
},[])

  const chan=()=>{
    setaddress(()=>{
      return !add;

    })}



  return (
    <div>
      {status && (
      <div className="pt-24 h-full flex sm:flex-row flex-col justify-center">
    <div className=" w-[500px]">
      <Address/>
      </div>
    </div>)}

    {!status && (
    <div className="pt-24 h-full flex sm:flex-row flex-col justify-center">
      <div className="mb-10">
      <h1 className="text-center text-3xl font-bold">Delivery Address</h1>
      <div class="mt-5 bg-blue-100 flex flex-col shadow rounded-xl sm:w-[400px] mx-auto">
        <div class="flex justify-around">
          <div class="flex-1 py-5 pl-5 ">
            <ul>
              <li class="text-xl font-medium uppercase ">{address[0] + " " + address[1]}</li>
              {/* Name & other details  */}
              <li className="capitalize">{address[4] + " ," + address[5] + ' ,' + address[6]}</li>
              <li class="text-gray-500 capitalize">{address[3]}</li>
              <li class="text-gray-500 capitalize">{address[8]}</li>
              <li class="text-gray-500 capitalize">{address[2]}</li>
            </ul>
          </div>
          <div class="flex-none pt-2.5 pr-2.5 pl-1">
            <img src={history} alt="" className="h-5 ml-1" />
          </div>
        </div>
        <button onClick={chan} className="hover:shadow-form w-[300px] hover:bg-gray-800 duration-500  mx-auto mb-5 rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add as New Address
        </button>
       <Link to="/checkout" className="mx-auto "><button className="hover:shadow-form hover:bg-gray-800 duration-500 w-[300px] sm:mx-10 mx-auto mb-5 rounded-md bg-blue-700 hover py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Procced
        </button></Link>
      </div>
      </div>
      
      {add && (<div className=" w-[500px]">
      <Address/>
      </div>)}
      
    </div>)}
    </div>
  );
};

export default Delivery;
