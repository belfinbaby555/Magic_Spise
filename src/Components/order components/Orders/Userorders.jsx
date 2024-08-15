import React, { useEffect, useState } from "react";
import OrderedItems from "./OrderedItems";
import axios from "axios";
import Loading from "../../Loading";
import { Link, useNavigate } from "react-router-dom";

function UserOrder() {
  const [items, setItems] = useState([]);
  const [load,setload]=useState(true);
 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/user_orders", { withCredentials: true });
        setItems(response.data.orders);
        
        setload(false)
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Failed to fetch orders. Please try again later.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="h-fit sm:w-[50%] px-5 sm:px-0 box-border mx-auto py-10 pt-24" >
        {load?<Loading/>:null}
      <h1 className="border-l-4 border-blue-700 pl-2 text-2xl font-bold mb-10">My Orders</h1>
      
      {items.length > 0 ? (
         
        items.map((item) => (
         
          <OrderedItems
            key={item.order_id} 
            name={item.items}
            id={item.order_id}
            address={item.address}
            price={item.total_amount}
            date={item.order_date}
            status={item.order_status}
          />
        ))
      ) : (
        <div class="mx-auto max-w-5xl h-full justify-center px-6 md:flex sm:my-28 flex-col md:space-x-6 xl:px-0">
          <h1 className="text-3xl font-semibold ml-6 text-center">No orders found</h1>
          <p className="mx-auto text-center my-4">Place orders to view here </p>
          <div className="flex justify-center"><Link to='/products'><button className="w-40 h-10 rounded-md text-slate-50 bg-blue-700">Add products</button></Link></div>
        </div>
      )}
    </div>
  );
}

export default UserOrder;
