import React from "react";
import pro from './Css/product.module.css';
import cart from "../Assets/Images/icons/cart.png"


function Product(){
    var products=["cinnamon","cardamon","pepper","clove","driedginger","nutmeg","turmeric"]
    var price=["150","155","246","314","100","265","430"]

    const cards =products.map((items,index) => {
        return(
        <div className={pro.product_card} style={{backgroundImage:`url(${require('../Assets/Images/products/'+items+'.jpg')})`}}>
            <div className={pro.details}>
                <h1>{items}</h1>
                <p>100g | 200g</p>
                </div>
        </div>
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