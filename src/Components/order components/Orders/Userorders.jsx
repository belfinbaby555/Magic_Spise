import React, { useEffect, useState } from "react";
import OrderedItems from "./OrderedItems";
import axios from "axios";

function UserOrder(){
const [items,getitems]=useState([])

useEffect(()=>{
    try{
    axios.get("/user_orders",{withCredentials:true})
    .then(res=>{
    getitems(items=>res.data.orders)
    })
    .catch(e=>{
        alert(e)
    })
}
catch(e){
    alert(e)
}
},[])


    return(
        
        <div className="h-fit sm:w-[50%] px-5 sm:px-0 box-border mx-auto py-10 pt-24">
            <h1 className="border-l-4 border-blue-700 pl-2 text-2xl font-bold mb-10">My Orders</h1>

            {items.map( (item) => {
                return(
                <OrderedItems
                name={item.items}
                id={item.order_id}
                address={item.address}
                price={item.total_amount}
                date={item.order_date}
                status={item.order_status}
                />
                );
            })}

        </div>
        
    )
}export default UserOrder;