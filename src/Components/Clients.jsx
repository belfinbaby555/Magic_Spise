import React, { useEffect, useState } from "react";
import cli from "./Css/client.module.css";
import tru from '../Assets/Images/trusted.png'

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
        <div className={cli.client_scroll_container}><img src={tru}></img><img src={tru}></img></div>
        <div className={cli.deal_of_the_day}>
          {/* Deal of the day is hidden in mobile screen */}
          <div className="hidden sm:flex flex-col justify-around items-start pl-36 pt-16">
            <span className="text-blue-800 font-[700] text-xl pl-1">40% Off</span>
            <h1 className="text-[55px] font-normal ">Deal of the Day</h1>
            <h1 className="text-5xl font-medium pr-5">
             <b id="hour" >{time[0]}</b><span className="text-lg font-bold mr-3">Hr </span>
              <b id="min">{time[1]}</b><span className="text-lg font-bold mr-3">Min </span>
              <b id="sec">{time[2]}</b><span className="text-lg font-bold ">Sec</span>
            </h1>
            <button
              type="button"
              className="text-white font-normal tracking-[1px] mt-5 bg-blue-700 hover:bg-blue-900 rounded-full text-[17px] px-8 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Client;
