import React, { useEffect, useState } from "react";
import square from "../../Assets/Images/icons/square.svg";
import Prod from './productCardv2'
import axios from "axios";
import home from "../../Assets/home.module.css"

const Products = () => {

  const [products,setproducts]=useState([])
  const [category,setcategory]=useState([])
  const [options,setoptions]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/products', { withCredentials: true });
        const productsData = res.data;
        setproducts(productsData);
        setcategory(productsData);

        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        setoptions(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  },[])

function sort(cat){
  if(cat==="all"){
    setcategory(products);
  }
  else{
  const filterd=products.filter(product=>product.category===cat)
  setcategory(filterd)
  }

  for(var i=0;i<=document.getElementsByName("options").length-1;i++){
    document.getElementsByName("options")[i].style.backgroundColor="transparent"
    document.getElementsByName("options")[i].style.color="black"
  }
  document.getElementById(cat).style.backgroundColor="rgb(37 99 235)"
  document.getElementById(cat).style.color="white"
  
  
}
  
  


  
  
  return (
    <div className="flex sm:flex-row flex-col bg-gray-100 pt-[60px]">
      <div className="sm:w-96 sm:h-96 sm:p-4 pl-1 sm:pl-10">
        <div>
        <h2 className="text-xl font-bold my-10 sm:flex hidden gap-2">
          <img src={square} alt="" className="w-6 object-contain" />
          <span>Categories</span>
        </h2>
        <ul className={"flex sm:flex-col flex-row gap-1 sm:gap-5 overflow-x-scroll "+home.category}>
          <li onClick={()=>sort("all")} id="all" name="options" style={{color:"white",backgroundColor:"rgb(37 99 235)"}} className="rounded-full w-fit px-5 py-1 cursor-pointer select-none h-fit whitespace-nowrap">
            All Products
          </li>
          
          {(options.map((categor)=>(
            <li onClick={()=>sort(categor)} id={categor} name="options" className="rounded-full capitalize w-fit px-5 py-1 hover:bg-blue-600 hover:text-white bg-slate-300 sm:text-black sm:bg-transparent select-none cursor-pointer  h-fit whitespace-nowrap ">
            {categor}
          </li>
          )))}
        </ul>
      </div>
      </div>
      <div className="sm:w-4/5 sm:p-4">
        <h1 className="text-2xl font-bold text-gray-900 mt-5 border-l-4 pl-2 ml-4 sm:ml-0 border-blue-700">
          Top Picks
        </h1>
        <p className="text-gray-600 text-sm sm:block hidden font-medium mt-3">
          Explore Our Diverse Range of Premium Spice Offerings.
        </p>
        <div className="grid sm:grid-cols-3 sm:gap-y-10 py-5 sm:py-10">
          {category.map((product) => (
            <Prod key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
