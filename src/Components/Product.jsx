import React from "react";
import pro from './Css/product.module.css';
import cart from "../Assets/Images/icons/cart.png"
import arrow from '../Assets/Images/icons/arrow.png'
import { Link } from "react-router-dom";


function Product(){
    var products=["cinnamon","cardamon","pepper","clove","driedginger","nutmeg","turmeric"]
    var price=["150","155","246","314","100","265","430"]

    

    const cards =products.map((items,index) => {
        return(
       <Link to={`/product/${items}`}> <div className={pro.product_card} style={{backgroundImage:`url(${require('../Assets/Images/products/'+items+'.jpg')})`}}>
            <div className={pro.details} >
                <h1>{items}</h1>
                <p>100g | 200g</p>
                <h3>₹{price[index]} <b>In stock</b></h3>
                <button className="w-full h-10 bg-blue-600 text-base text-stone-100 rounded ease-in-out duration-200 my-2 mx-auto active:bg-gray-800 sm:hover:bg-gray-800">+ Add to Cart</button>
                
                </div>
        </div></Link>
        )})
    return(
        <div className={pro.products}>
            <h1>Our Products</h1>
            <div className={pro.product_scroll}>
                    {cards}
                </div>
        </div>
       
    )
}export default Product