import { useEffect, useState } from "react";
import razor from "../../Assets/Images/icons/razor.png";
import Item from "../order components/Items";
import axios from "axios";
import Pay from "./Payment";


function Order() {
  const [items,setitems] = useState([])
  const [address,getaddress]=useState([])
  

  
  var total=0;




  useEffect(()=>{
    axios.get("/get_cart",{withCredentials:true})
  .then(res=>{setitems(items=>res.data.cart)

    
  })
  },[])

  useEffect(()=>{
    axios.get('/getaddr',{withCredentials:true})
    .then(res=>{
      if(res.data.address==='None'){
        
      }
      else{
        const info=res.data.address;
        const out=info.split('β')
        getaddress(address=>out)
        
        }
    })
  },[])

  

  for(let i=0;i<=Object.entries(items).length-1;i++){
    total=total+items[i].price;
  }
  
  const amount={
    'price':total,
    'delivery':60,
    'discount':5,
    'gst':Math.round(total*0.18)
  }

  return (
    <div>
     
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
                          name={item.item}
                          inStock={item.inStock}
                          quantity={item.quantity}
                          unitPrice={item.price}
                          img={item.img}
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
                  <li class="text-lg font-medium capitalize">{address[0] + " " + address[1]}</li>
                  {/* Name & other details  */}
                  <li className="capitalize">{address[4] + " ," + address[5] + ' ,' + address[6]}</li>
                  <li class="text-gray-500 capitalize">{address[3]}</li>
                  <li class="text-gray-500 capitalize">{address[8]}</li>
                  <li class="text-gray-500 capitalize">{address[2]}</li>
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
                    <p class="font-semibold ">Rs. {amount.price}</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Delivery</p>
                    <p class="font-semibold ">Rs. {amount.delivery}</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">Discount</p>
                    <p class="font-semibold ">Rs. {amount.discount}</p>
                  </div>
                  <div class="flex items-center justify-between text-gray-600">
                    <p class="">GST Tax</p>
                    <p class="font-semibold ">Rs. {amount.gst}</p>
                  </div>
                  <div class="flex items-center font-bold justify-between text-black pt-5">
                    <p class="">Total</p>
                    <p class=" ">Rs.{amount.delivery + amount.gst + amount.price - amount.discount}</p>
                  </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <p class="text-sm  text-gray-500">
                    * You will be redirected to Razor Pay payment gateway and
                    then redirected back to our website .
                  </p>
                </div>

                <Pay/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
