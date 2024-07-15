import React from "react";
import pro from '../Css/product.module.css';
import { Link } from "react-router-dom";


const ProductCardv2 = ({ product }) => {
  const stock=product.stock.split(":");
  const total=stock.reduce((acc, value) => acc + Number(value), 0)
console.log(total)
  return (
    
    <Link to={`/item/${product.id}`}><div className={pro.product_card} style={{backgroundImage:`url(${product.img1})`}} name={product.category}>
     
            <div className={pro.details} >
                <h1>{product.name}</h1>
                <p>{stock.map(qty=>(qty+product.si_unit+" | "))}</p>
                {total ? <div>
                <h3>₹{product.price[0]} <b>In stock</b></h3><b className="hidden">{product.id}</b>
                <button className="w-full h-10 bg-blue-600 text-stone-100 rounded my-2 mx-auto">Buy Now</button></div>
                :<h4 className="text-red-500 text-center py-2 font-semibold">Out Of Stock</h4>}
                
                
            </div>
        </div></Link>
  );
};

export default ProductCardv2;
