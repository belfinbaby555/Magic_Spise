import React from "react";
import pro from '../Css/product.module.css';
import { Link } from "react-router-dom";


const ProductCardv2 = ({ product }) => {
  

  return (
    
    <Link to={`/item/${product.id}`}><div className={pro.product_card} style={{backgroundImage:`url(${product.img})`}} name={product.category}>
     
            <div className={pro.details} >
                <h1>{product.name}</h1>
                <p>{product.quantity}g</p>
                <h3>₹{product.price} <b>In stock</b></h3>
                <b className="hidden">{product.id}</b>
                <button className="w-full h-10 bg-blue-600 text-stone-100 rounded my-2 mx-auto">Buy Now</button>
            </div>
        </div></Link>
  );
};

export default ProductCardv2;
