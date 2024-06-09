import React from "react";
import './Assets/home.module.css'
import Navi from "./Components/Navi";
import Banner from "./Components/Banner";
import Client from "./Components/Clients";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Description from "./Components/Description";
import Footer from "./Components/Footer";


function Home() {
  return (
    <div>
      <Navi />
      <Banner/>
      <Client />
      <Description />
      <Product />
       <Blog />
      <About />
      <Feedback />
      <Footer />
      
    </div>
  );
}
export default Home;
