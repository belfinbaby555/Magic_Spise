import React from "react";
import './Assets/home.module.css'
import Navi from "./Components/Navi";
import Products from "./Components/product components/Product";
import Footer from "./Components/Footer";

function productpage(){
    return(
        <div>
        <Navi/>
        <Products/>
        <Footer/>
        </div>
    )
}export default productpage;