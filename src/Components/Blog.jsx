import React from "react";
import blog from "./Css/blog.module.css";
import arrow from "../Assets/Images/icons/arrow.png"
import hand from "../Assets/Images/hand.png"
import side from "../Assets/Images/icons/side.png"


function Blog(){

    return(
        <div className={blog.blog}>
            <h1>Popular Blog</h1>
            <div className={blog.main_container}>
                <div className={blog.container1}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Heart of <br/>Farming: Stories from the Field</h2>
                </div>
                <div className={blog.container2}>
                    <div className={blog.subcontainer1}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Price volatility: <br/>Impact on <br/>farming communities</h2>
                    </div>
                    <div className={blog.subcontainer2}>
                    <img src={arrow} className={blog.arrow}/>
                    <h2>Decadent Delights:<br/>Master the art of<br/>Butter masala</h2>
                    </div>
                </div>
                <div className={blog.container3}>
                    <div className="absolute h-[200px] w-[200px] rounded-full bg-sky-600 right-[-50px] top-[-50px]"></div>
                    <div className="absolute h-[250px] w-[250px] rounded-full bg-sky-500 left-[-75px] bottom-[-75px]"></div>
                    <h3>People <br></br>trust Us <h4>Find out why?</h4></h3>
                    
                    <img src={hand}></img>
                    <button className="rotate-45"><img src={arrow} /></button>
                </div>
            </div>
        </div>
    )

}export default Blog;