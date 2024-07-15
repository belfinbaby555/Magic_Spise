import React, { useState } from "react";
import nav from "./Css/navi.module.css"
import logo from "../Assets/Images/logos/logo_default.png";
import s_icon from "../Assets/Images/icons/search.png"
import { Link } from "react-router-dom";
import axios from "axios";

function Navi(){

const [status,setstatus]=useState(false)
const [cart,setcart]=useState('')
const [filteredProducts, setFilteredProducts] = useState([]);

axios.get('/dash',{withCredentials:true})
.then(res=>{
    if(res.data.message==="User not logged in"){
        setstatus(status=>true);
    }
    else{
        setstatus(false,status)
        setcart(cart=>res.data.cart_count)
        
    }
})
const handleSearch = async() => {
    const res = await axios.get("/products",{withCredentials:true})
    const products=await res.data
    const value = document.getElementById("search").value.toLowerCase();
    if(value===""){
        setFilteredProducts([]);
        document.getElementById("result").style.display="none"
    }
    else{
        document.getElementById("result").style.display="block"
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
}
  };

    return(
        <div id='navbar'>
            <div className={nav.bar} >
                <img src={logo} alt="logo" className={nav.logo}></img>
                
                <div className={nav.option}>
                    <a href="/">Home<span></span></a>
                    <a href="/products">Products<span></span></a>
                    <a href="/#about">About us<span></span></a>
                    <a href="/" className="relative">More <i className="fa fa-angle-down text-xl mt-[-10px]"></i><span></span></a>
                    <div className="w-[200px] h-0 flex bg-stone-100 absolute top-[50px] right-[175px] flex-col rounded border-[1px] border-slate-300">
                        <a href="/">Blog</a>
                        <a href="/">Partnership</a>
                        <a href="/">Gift</a>
                    </div>
                    <form>
                        <button><img alt="search" src={s_icon}/></button>
                        <input type="text" id="search" placeholder="Search" onChange={handleSearch} />
                        <ul id="result" className="w-60  absolute bg-blue-100 top-9 right-0 px-3 py-2 rounded" style={{display:'none'}}>
                        
                        
                        {filteredProducts.map(prod=>[
                            <li className="w-full box-border py-2 my-1 relative bg-white px-3 rounded capitalize text-lg  font-semibold cursor-pointer" onClick={()=>{window.location.href=`/item/${prod.id}`}}>
                                <img src={prod.img1} className="w-fit h-12 float-right top-0 rounded"/>{prod.name}
                            <p className="text-gray-500 text-sm font-light">{prod.category}</p>
                            
                            </li>
                        ])}
                        </ul>
                    </form>
                </div>
                
                <div className={nav.buttons}>
                {status && (
                    <div className="ml-auto">
                    <Link to="/login"><button className={nav.login}>Login</button></Link>
                    <Link to="/signup"><button className={nav.signup}>SignUp</button></Link>
                    </div>
                )}
                {!status && (
                <Link to="/cart" className="ml-auto"><button className={nav.cart}>  <b className="absolute text-xs bg-sky-600 rounded-full top-0 text-stone-100 w-4 h-4 right-[-5px]" id="cart">{cart}</b>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </button></Link>
                )}
                </div>
            </div>
        </div>
    )
}export default Navi