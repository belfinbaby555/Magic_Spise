import React from "react";
import square from "../../Assets/Images/icons/square.svg";
import Prod from './productCardv2'
import procss from '../Css/product.module.css'


const Products = () => {
  const products = [
    {
      image: require("../../Assets/Images/products/cardamon.jpg"),
      name: "cardamon",
      price: "100",
    },
    {
      image: require("../../Assets/Images/products/cinnamon.jpg"),
      name: "cinnamon",
      price: "200",
    },
    {
      image: require("../../Assets/Images/products/clove.jpg"),
      name: "clove",
      price: "100",
    },
    {
      image: require("../../Assets/Images/products/driedginger.jpg"),
      name: "ginger",
      price: "200",
    },
    {
      image: require("../../Assets/Images/products/nutmeg.jpg"),
      name: "nutmeg",
      price: "100",
    },
    {
      image: require("../../Assets/Images/products/pepper.jpg"),
      name: "pepper",
      price: "200",
    },
    {
      image: require("../../Assets/Images/products/turmeric.jpg"),
      name: "turmeric",
      price: "100",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 2",
      price: "200",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 pt-[65px]" id={procss.item_scroll}>
      <div className="w-full sm:w-80 shadow-md sm:shadow-none h-18 sm:block flex flex-row  sm:h-fit z-0 p-4 pl-2 my-2 sm:my-0 sm:pl-10 bg-gray-100 overflow-x-scroll overflow-y-hidden" id={procss.item_scroll}>
        <h2 className="text-xl font-bold sm:my-10 hidden sm:flex p-0 gap-2 w-fit" >
          <img src={square} alt="" className="w-6 object-contain" />
          <span className="h-fit my-auto">Categories</span>
        </h2>
        <ul className="flex flex-row sm:flex-col gap-1 sm:gap-5 ">
          <li className="rounded-full flex items-center w-fit whitespace-nowrap px-5 sm:py-1 py-2 bg-blue-500 text-stone-100  cursor-pointer">
            All Products
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer ">  
            Whole Spices
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer">          
            Nuts & Seeds
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer">          
            Tea & Coffee
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer">          
            Masalas
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer">          
            Health & Wellness
          </li>
          <li className="rounded-full flex items-center bg-gray-300 sm:bg-transparent w-fit px-5 sm:py-1 py-2 whitespace-nowrap hover:bg-blue-500 duration-200 hover:text-stone-100 cursor-pointer">          
            Others
          </li>
        </ul>
      </div>
      <div className="w-full p-0 sm:p-4 ">
        <h1 className="text-2xl w-full font-bold text-gray-900 mt-5 border-l-4 pl-2  m-4 border-blue-700">
          Top Picks
        </h1>
        <p className="text-gray-600 text-sm font-medium m-3 ml-4">
          Explore Our Diverse Range of Premium Spice Offerings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-0 sm:gap-y-10 py-10">
          {products.map((product) => (
            <Prod key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
