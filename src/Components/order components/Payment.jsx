import axios from "axios";
import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import logo from "../../Assets/Images/logos/logo_blue.png"
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

export default function Pay() {
  const [Razorpay] = useRazorpay();
  const [load , setload]=useState(false);
  const navigate=useNavigate();

  const handlePayment = useCallback(async() => {
    setload(true);

await axios.get("/getAmount",{withCredentials:true})
.then(res=>{
  
    const options = {
      key: res.data.razorpay_merchant_key,
      amount: String(res.data.razorpay_amount),
      currency: "INR",
      name: "The Magic Spice",
      description: "Test Transaction",
      image: logo,
      order_id: res.data.razorpay_order_id,
      handler: function(response){
        console.log(JSON.stringify(response))
        axios.post("/paymenthandler",JSON.stringify(response),{
          headers:{
            "Content-Type":"application/json",
            "X-CSRFToken":"csrf",
          },
          withCredentials:true

        })
        
        .then(res=>{
          if (res.data.message==="Payment completed and orders placed successfully!"){
            return navigate('/orders')
          }
        })
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3e54d3",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
    setload(false)
})
.catch(e=>{
  alert(e.message)
})
  }, [Razorpay]);

  return (
    <div class="mt-6 text-center relative" >
      {load?<Loading/>:null}
        <button onClick={handlePayment}type="button"class="group inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
            Place Order
            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
        </button>
        <div className="w-full bg-white h-12 rounded-b-xl"></div>
    </div>
  );
}