import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Login from "./Login"
import Signup from "./Signup"
import Produc from "./Product"
import Cart from "./Cart"
import Order from "./Useradress";
import Pay from "./Confirm"
import ProductDetail from "./ProductDetails";
import "./index.css";
import axios from "axios";


export default function App(){
  axios.defaults.baseURL="http://localhost:8000";

  return(
  <BrowserRouter>
  
  <Routes>
  <Route index element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/products" element={<Produc/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/order" element={<Order/>}/>
  <Route path="/payment" element={<Pay/>}/>
  <Route path="/item/:name" element={<ProductDetail/> }/>
  </Routes>
  </BrowserRouter>
  )
};
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
