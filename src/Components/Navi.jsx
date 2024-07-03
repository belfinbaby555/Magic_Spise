import React, { useEffect, useState } from "react";
import nav from "./Css/navi.module.css"
import logo from "../Assets/Images/logos/logo_default.png";
import s_icon from "../Assets/Images/icons/search.png"
import { Route,redirect,useNavigate,Link, json } from "react-router-dom";

function Navi(){



    return(
        <div>
            <div className={nav.bar}>
                <img src={logo} className={nav.logo}></img>
                
                <div className={nav.option}>
                    <a href="/">Home<span></span></a>
                    <a href="/products">Products<span></span></a>
                    <a href="/#about">About us<span></span></a>
                    <a href="" className="relative">More <i className="fa fa-angle-down text-xl mt-[-10px]"></i><span></span></a>
                    <div className="w-[200px] h-0 hidden bg-stone-100 absolute top-[50px] right-[175px] flex flex-col rounded border-[1px] border-slate-300">
                        <a href="">Blog</a>
                        <a href="">Partnership</a>
                        <a href="">Gift</a>
                    </div>
                    <form>
                        <button><img src={s_icon}/></button>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                
                <div className={nav.buttons}>
                <Link to="/login"><button className={nav.login}>Login</button></Link>
                <Link to="/signup"><button className={nav.signup}>SignUp</button></Link>
                <Link to="/cart"><button className={nav.cart}>  <b className="absolute text-xs bg-sky-600 rounded-full top-0 text-stone-100 w-4 h-4 right-[-5px]">5</b>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </button></Link>
                </div>
            </div>
        </div>
    )
}export default Navi