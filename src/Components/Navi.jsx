import React, { useEffect, useState } from "react";
import nav from "./Css/navi.module.css"
import logo from "../Assets/Images/logos/logo_default.png";
import s_icon from "../Assets/Images/icons/search.png"
import { Link } from "react-router-dom";
import axios from "axios";

function Navi(){

const [status,setstatus]=useState(true)
const [cart,setcart]=useState('')
const [filteredProducts, setFilteredProducts] = useState([]);
const [email,getemail]=useState('');
const [dropm,setdrop]=useState(false)
const [dropo,setdropo]=useState(false)

useEffect(()=>{
try{
    axios.get('/dash',{withCredentials:true})
    .then(res=>{
        if(res.data.message==="User not logged in"){
            setstatus(true);
        }
        else{
            setstatus(false)
            setcart(res.data.cart_count)
            getemail(res.data.user_name)
            
        }
    })
    .catch((e)=>[
        alert(e)
    ])
}
catch(e){
    console.log(e);
}
   
},[])
const drop=()=>{
    setdrop(!dropm)
}
const dropop=()=>{
    setdropo(!dropo)
}

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
                    <a href="#about">About us<span></span></a>
                    <a onClick={dropop} className="relative">More <i className="fa fa-angle-down text-xl mt-[-10px]"></i><span></span></a>
                    <div onMouseLeave={dropop} className={"w-[200px] -z-10 flex bg-sky-100 absolute top-[50px] duration-300 right-[175px] flex-col justify-around rounded border-slate-300"+(dropo?" h-36 border-[1px]":" h-0 border-0")}>
                        <a href="/" >Blog</a>
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
                    <div>
                   <button onClick={drop} className="w-fit rounded-full px-4 text-lg m-0 text-white py-[7px] bg-blue-700"><b className="invert text-xl ">👤</b> My Account</button>
                    </div>
                )}
                </div>
            </div>
            <div className={"w-72 h-fit duration-500 fixed right-0 top-16 bg-sky-100 flex flex-col px-5 box-border py-4 z-50" + (dropm?" -translate-y-0":" -translate-y-72")}>
                <p className="capitalize text-4xl bg-blue-600 h-12 w-12 rounded-full align-middle mx-auto text-white mt-4 text-center">{email.split("")[0]}</p>
                <b className="font-normal text-center my-4">{email}</b>
                <Link to="/cart"><button className="bg-blue-600 text-white w-full flex justify-between my-1 rounded p-2 items-center">My Cart <b className="h-6 w-6 text-center rounded-full bg-red-500">{cart}</b></button></Link>
                <Link to="/orders"><button className="bg-blue-600 text-white w-full flex justify-between rounded my-1 p-2 items-center">My Orders </button></Link>
            </div>
        </div>
    )
}export default Navi