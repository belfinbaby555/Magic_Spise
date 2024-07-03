import React from "react";
import arrow from "../../Assets/Images/icons/arrow.png";
import pro from '../Css/product.module.css';
import cart from "../../Assets/Images/icons/cart.png"

const ProductCardv2 = ({ product }) => {
  return (
    <div className={pro.product_card} style={{backgroundImage:`url(${product.image})`}}>
     
            <div className={pro.details}>
                <h1>{product.name}</h1>
                <p>100g | 200g</p>
                <h3>₹{product.price} <b>In stock</b></h3>
                <button className="w-full h-10 bg-blue-600 text-stone-100 rounded my-2 mx-auto">Add to Cart</button>
            </div>
        </div>
  );
};

export default ProductCardv2;
