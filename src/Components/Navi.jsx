import React, { useEffect, useState } from "react";
import nav from "./Css/navi.module.css"
import logo from "../Assets/Images/logos/logo_default.png";
import s_icon from "../Assets/Images/icons/search.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ham from "../Assets/Images/menu.png"

function Navi(){

const [status,setstatus]=useState(true)
const [cart,setcart]=useState('')
const [filteredProducts, setFilteredProducts] = useState([]);
const [email,getemail]=useState('');
const [dropm,setdrop]=useState(false)
const [dropo,setdropo]=useState(false)
const [navi,setnav]=useState(false);
const navigate=useNavigate()

const logout=async()=>{
    axios.get("/logout",{withCredentials:true})
    .then(res=>{
        if(res.data.message==="Logged out successfully"){
            navigate("/")
        }
    })
    .catch(e=>{
        console.error(e.message)
    })
}

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
        console.error(e.message)
    ])
}
catch(e){
    console.error(e.message);
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
            <div className="hidden md:block">
            <div className={nav.bar} >
                <img src={logo} alt="logo" className={nav.logo}></img>
                
                <div className={nav.option}>
                    <Link to="/">Home<span></span></Link>
                    <Link to="/products">Products<span></span></Link>
                    <Link to="#about">About us<span></span></Link>
                    <Link onClick={dropop} className="relative">More <i className="fa fa-angle-down text-xl mt-[-10px]"></i><span></span></Link>
                    <div onMouseLeave={dropop} className={"w-[200px] -z-10 flex bg-sky-100 absolute top-[50px] duration-300 right-[175px] flex-col justify-around rounded border-slate-300"+(dropo?" h-36 border-[1px]":" h-0 border-0")}>
                        <Link to="/Magic_Spise/" >Blog</Link>
                        <Link to="/Magic_Spise/">Partnership</Link>
                        <Link to="/Magic_Spise/">Gift</Link>
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
                <button onClick={logout} className="bg-blue-600 text-white w-full flex justify-between rounded my-1 p-2 items-center">Logout</button>
            </div>
        </div>


        <div className="block md:hidden">
            <nav className="w-screen h-14 bg-sky-100 fixed box-border px-5 flex justify-between z-50">
                <img src={logo} className="h-full"/>
                <button className="h-7 my-auto" onClick={()=>{setnav(!navi)}}><img className="h-full" src={ham}/></button>
                <div className={"w-full h-screen box-border px-5 bg-sky-100 fixed flex flex-col left-0 top-14 duration-500 -z-40 " + (navi?"-translate-y-0 opacity-100":"-translate-y-full opacity-0")}>
                    
                    
                    
                    
                    {status?<span className="w-full flex flex-col border-b-2 border-gray-400 pb-3">
                        <Link to="/login"><button className="bg-blue-600 text-white w-full flex justify-between text-lg my-1 rounded p-2 items-center">Login</button></Link>
                    <Link to="/signup"><button className="bg-blue-600 text-white w-full flex justify-between my-1 text-lg rounded p-2 items-center">SignUp</button></Link>
                    </span>:<span className="w-full flex flex-col border-b-2 border-gray-400 pb-3">
                        <p className="capitalize text-4xl bg-blue-600 h-12 w-12 rounded-full align-middle mx-auto text-white mt-4 text-center">{email.split("")[0]}</p>
                        <b className="font-semibold  text-center my-4">{email}</b>
                        <Link to="/cart"><button className="bg-blue-600 text-white w-full flex justify-between my-1 rounded p-2 items-center">My Cart <b className="h-6 w-6 text-center rounded-full bg-red-500">{cart}</b></button></Link>
                <Link to="/orders"><button className="bg-blue-600 text-white w-full flex justify-between rounded my-1 p-2 items-center">My Orders </button></Link>
                    </span>}




                    <Link to="/" className=" box-border flex items-center gap-1 px-3 text-lg font-medium text-black  my-3 mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                     Home</Link>
                    <Link to="/products" className="box-border flex items-center gap-1 px-3 text-lg font-medium text-black   my-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                    Products</Link>
                    <Link to="/" className="box-border flex items-center gap-1 px-3 text-lg font-medium text-black  my-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                        About us</Link>
                    <Link to="/" className="box-border flex items-center gap-1 px-3 text-lg font-medium text-black   my-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                    Blog</Link>
                    <Link to="/" className="box-border flex items-center gap-1 px-3 text-lg font-medium text-black  my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>
                    Partnership</Link>
                    <Link to="/" className="box-border flex items-center gap-1 px-3 text-lg font-medium text-black  my-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg>
                    Gift</Link>
                    {!status?
                    <Link onClick={logout} className="box-border flex items-center gap-1 px-3 text-lg font-medium text-red-600  my-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="red" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                    Logout</Link>:null
}
                </div>
            </nav>
        </div>
        </div>
    )
}export default Navi