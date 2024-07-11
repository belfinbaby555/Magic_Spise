import React from "react";
import Nav from "./Components/Navi"
import Delivery from "./Components/order components/Delivery"
import Footer from "./Components/Footer"


function userorder(){
    return(
        <div>
            <Nav/>
            <Delivery/>
            <Footer/>
        </div>
    )
}export default userorder;