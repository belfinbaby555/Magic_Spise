import React, { useEffect, useState } from "react";
import cli from "./Css/client.module.css";
import tru from '../Assets/Images/trusted.png'
import cork from "../Assets/Images/cork_jar.png"
import bowl from "../Assets/Images/bowl.png"

function Client() {

  const [time, setTime] = useState([0, 0, 0]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      const Targetdate = new Date("2024-07-05T17:00:00");
      const Currentdate = new Date();
      const diff = Targetdate.getTime() - Currentdate.getTime();
      const sec = diff / 1000;
      const hour = Math.floor(sec / 3600);
      const min = Math.floor((sec % 3600) / 60);
      const secon = Math.floor(sec % 60);

      setTime([hour, min, secon].map(num => (num < 10 ? "0" + num : num.toString())));
    }, 1000);


    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="flex text-center">
      <div className={cli.trusted_clients}>
        <h5>Trusted by Over 50+ Client Nationwide</h5>
        <div className={cli.client_scroll_container}><div></div></div>
        <div className={cli.deal_of_the_day}>
          <img src={cork} className="w-24 h-fit hidden sm:block m-3 sm:mt-auto"/>
          <div className="flex flex-col justify-around items-start sm:pl-24 sm:pt-16 pt-10 h-fit m-2">
            <span className="text-blue-800 font-[700] text-xl w-full text-center sm:text-left pl-1">40% Off</span>
            <h1 className="sm:text-[55px] text-[40px] w-full font-[600] sm:font-normal text-center sm:text-left ">Deal of the Day</h1>
            <h1 className="sm:text-5xl text-3xl sm:text-left text-center font-medium w-full">
             <b id="hour" >{time[0]}</b><span className="sm:text-lg text-base font-bold mr-3">Hr </span>
              <b id="min">{time[1]}</b><span className="sm:text-lg text-base font-bold mr-3">Min </span>
              <b id="sec">{time[2]}</b><span className="sm:text-lg text-base font-bold ">Sec</span>
            </h1>
            <button
              type="button"
              className="text-white hidden sm:block font-normal w-full sm:w-fit tracking-[1px] mt-5 bg-blue-700 active:bg-gray-800 sm:hover:bg-gray-800 duration-200 rounded-full text-[17px] px-8 py-2.5 text-center "
            >
              Explore
            </button>
          </div>
          <img src={bowl} className="sm:w-[45%] sm:py-7 w-96 h-fit my-auto mr-auto sm:mr-0 ml-auto mt-5 sm:mt-auto"/>
          <button
              type="button"
              className="text-white block sm:hidden font-normal w-4/5 mx-auto mb-5 sm:w-fit tracking-[1px] mt-5 bg-blue-700 active:bg-gray-800 sm:hover:bg-gray-800 duration-200 rounded-full text-[17px] px-8 py-2.5 text-center "
            >
              Explore
            </button>
        </div>
      </div>
    </div>
  );
}
export default Client;
