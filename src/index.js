import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Login from "./Login"
import Signup from "./Signup"
import Produc from "./Product"
import Cart from "./Cart"
import Order from "./Useradress";
import Pay from "./Confirm"
import ProductDetail from "./ProductDetails";
import Terms from "./Terms";
import User from "./User";
import "./index.css";
import axios from "axios";



export default function App(){
  axios.defaults.baseURL="https://magicspice.pythonanywhere.com";

  return(
  <HashRouter basename="/Magic_Spise">
  
  <Routes>
  <Route index element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/products" element={<Produc/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/order" element={<Order/>}/>
  <Route path="/checkout" element={<Pay/>}/>
  <Route path={`/item/:id`} element={<ProductDetail/>} />
  <Route path="/orders" element={<User/>}/>
  <Route path="/termsandcondition" element={<Terms/>}/>
  </Routes>
  </HashRouter>
  )
};
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
