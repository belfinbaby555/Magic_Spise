import React from "react";
import arrow from "../../Assets/Images/icons/side.png";
import bookmark from "../../Assets/Images/icons/bookmark.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col justify-between w-[270px] h-[360px] cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[220px] object-cover rounded-t-lg "
      />
      <p className="text-lg flex justify-between">
        <h3 className="text-xl font-medium ml-4 mt-1">{product.name}</h3>
        <img src={bookmark} alt="" className="w-8 object-cover mr-1" />
      </p>

     
      <p className="text-gray-700 mx-4">{product.description}</p>
      <p className="text-lg font-medium mb-2 mx-4 flex flex-col gap-0">
        <span className="text-black">Rs.{product.price}</span>
        <span className="text-gray-500 font-normal line-through">
          {product.price}
        </span>
      </p>
      <p className="text-lg mx-4 flex justify-between ">
        <span className="text-green-700 text-base">In Stock</span>
        <img src={arrow} alt="" className="w-8 object-contain" />
      </p>
    </div>
  );
};

export default ProductCard;
