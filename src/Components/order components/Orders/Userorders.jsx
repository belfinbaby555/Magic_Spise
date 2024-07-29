import React, { useEffect, useState } from "react";
import OrderedItems from "./OrderedItems";
import axios from "axios";
import Loading from "../../Loading";

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
    <div className="h-fit sm:w-[50%] px-5 relative sm:px-0 box-border mx-auto py-10 pt-24">
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
        <p>No orders found.</p> 
      )}
    </div>
  );
}

export default UserOrder;
