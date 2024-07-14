import React from "react";
import UserOrder from "./Components/order components/Orders/Userorders";
import Navi from "./Components/Navi";
import Footer from "./Components/Footer"

function User(){
    return(
        <div>
            <Navi/>
            <UserOrder/>
            <Footer/>
        </div>
    )
    
    
}export default User;