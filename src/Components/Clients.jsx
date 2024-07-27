import React, { useEffect, useState } from "react";
import cli from "./Css/client.module.css";
import cork from "../Assets/Images/cork_jar.png"
import bowl from "../Assets/Images/bowl.png"
import axios from "axios";
import Loading from "./Loading";

function Client() {
const [deal,setdeal]=useState([]);

useEffect(()=>{
 try{
  async function per(){
    await axios.get('/products',{withCredentials:true})
    .then((res)=>{
      const dta=res.data
      
      const percentage = dta.map(product => product.percentage);
      const max = Math.max(...percentage);
      const index=percentage.indexOf(String(max))
      setdeal(dta[index])
     
      })
      .catch((e)=>{
        
      })
  }per()
 }
 catch(e){
  console.log(e)
 }

},[])
  

  return (
    
    <div className="flex text-center h-fit">
      
      <div className={cli.trusted_clients}>
        <h5>Trusted by Over 50+ Client Nationwide</h5>
        <div className={cli.client_scroll_container}><div></div></div>
        <div className={cli.deal_of_the_day}>

        {deal.percentage ? <div></div>:<Loading/>}
          <img src={cork} className="w-24 h-fit hidden sm:block m-3 sm:mt-auto"/>
          <div className="flex flex-col justify-around items-start sm:pl-24 sm:pt-16 pt-10 h-fit m-2">
            
            <span className="text-blue-800 font-[700] text-xl w-full text-center sm:text-left pl-1">{deal.percentage}% Off</span>
            <h1 className="sm:text-[55px] text-[35px] w-full font-[600] sm:font-normal text-center sm:text-left ">Deal of the Day</h1>
            <h1 className="sm:text-5xl text-3xl mt-3 md:mt-0  sm:text-left text-center font-medium w-full">
             <b>{deal.name}</b>
              
            </h1>
            <button onClick={()=>{window.location.href=`/item/${deal.id}`}}
              type="button"
              className="text-white hidden sm:block font-normal w-full sm:w-fit tracking-[1px] mt-5 bg-blue-700 active:bg-gray-800 sm:hover:bg-gray-800 duration-200 rounded-full text-[17px] px-8 py-2.5 text-center "
            >
              Explore
            </button>
          </div>
          <img src={bowl} className="sm:w-[45%] sm:py-7 w-96 h-fit my-auto mr-auto sm:mr-0 ml-auto mt-5 sm:mt-auto"/>
          <button onClick={()=>{window.location.href=`/item/${deal.id}`}}
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
