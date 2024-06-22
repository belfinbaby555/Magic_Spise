import React from "react";
import arrow from "../../Assets/Images/icons/side_white.png";
import pro from '../Css/product.module.css';
import cart from "../../Assets/Images/icons/cart.png"
import { Link } from "react-router-dom";

const ProductCardv2 = ({ product }) => {
  return (
   <Link to={`/product/${product.name}`} ><div className={pro.product_card} style={{backgroundImage:`url(${product.image})`}}>
            <img src={arrow} className="w-12 h-fit m-2 ml-auto"/>
            <div className={pro.details}>
                <h1 className="capitalize">{product.name}</h1>
                <p>100g | 200g</p>
                <h3>₹{product.price} <b>In stock</b></h3>
                <button className="w-full h-10 bg-blue-600 text-stone-100 rounded ease-in-out duration-200 my-2 mx-auto active:bg-gray-800 sm:hover:bg-gray-800">+ Add to Cart</button>
            </div>
        </div></Link>
  );
};

export default ProductCardv2;
