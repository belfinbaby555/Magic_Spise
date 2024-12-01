import React, { useEffect, useState } from "react";
import history from "../../Assets/Images/icons/history.png";
import Address from "./Address";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const Delivery = () => {
  const [add, setaddress] = useState(false);
  const [status, getstatus] = useState(false);
  const [address, getaddress] = useState([]);
  const [load, setload] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/getaddr', { withCredentials: true });
        if (res.data.address === 'None') {
          getstatus(true);
          setload(false);
        } else {
          const info = res.data.address;
          const out = info.split('β');
          getaddress(out);
          setload(false);
        }
      } catch (e) {
        if (e.message === "Request failed with status code 500") {
          window.location.href = "/login";
        }
      }
    };

    fetchData();
  }, []);

  const chan = () => {
    setaddress(() => {
      return !add;
    });
  };

  return (
    <div className="relative">
      {load ? <Loading /> : <div></div>}
      {status && (
        <div className="pt-24 h-full flex sm:flex-row flex-col justify-center">
          <div className=" w-full sm:w-[500px]">
            <Address />
            <button>use old</button>
          </div>
        </div>
      )}

      {!status && (
        <div className="pt-24 h-full flex sm:flex-row flex-col justify-center">
          <div className="mb-10 px-3">
            <h1 className="text-center text-3xl font-bold">Delivery Address</h1>
            <div class="mt-5 bg-blue-100 flex flex-col shadow rounded-xl sm:w-[400px] mx-auto">
              <div class="flex justify-around">
                <div class="flex-1 py-5 pl-5 ">
                  <ul>
                    <li class="text-xl font-medium uppercase ">{address[0] + " " + address[1]}</li>
                    
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
              <button onClick={chan} className="hover:shadow-form md:w-[300px] w-11/12 hover:bg-gray-800 duration-500  mx-auto mb-5 rounded-md bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Add as New Address
              </button>
              <Link to="/checkout" className=" w-full flex">
                <button className="hover:shadow-form hover:bg-gray-800 duration-500 w-11/12 md:w-[300px]  mx-auto mb-5 rounded-md bg-blue-700 hover py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Procced
                </button>
              </Link>
            </div>
          </div>

          {add && (
            <div className=" w-full">
              <Address />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Delivery;
