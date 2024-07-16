import React from "react";
import feed from "./Css/feedback.module.css"
import cli from "../Assets/Images/cli.png"
import coma from "../Assets/Images/icons/coma.png"


function Feedback(){
    return(
        <div className={feed.feedback}>
            <h1>Testimonials</h1>
            <div className={feed.feedbox}>
                <div className={feed.clientimg}>
                    <h2><b className="text-blue-800">What </b><b>Client's </b><br/><b className="text-stone-400">Say</b></h2>
                    <img src={cli}/>
                </div>
                <div className={feed.feedback1}>
                    <img src={coma} className="w-20 pb-6"/>
                    <p className="text-xl">I've been using The Magic Spice's range of spices for a few months now,
                         and they have truly transformed my cooking.  I highly recommend their spices to anyone 
                          looking to elevate their culinary experience
                    </p>
                    <h3 className="pt-10 leading-7 text-stone-600">Prince Thomas<br/>2023-04-06</h3>
                </div>
                <div className={feed.feedback1}>
                    <img src={coma} className="w-20 pb-6"/>
                    <p className="text-xl">The virgin coconut oil from The Magic Spice has been a game-changer for 
                        me. It's incredibly pure and has a wonderful aroma. I use it not just in my 
                        cooking but also as a part of my skincare routine. 
                    </p>
                    <h3 className="pt-10 leading-7 text-stone-600">Prince Thomas<br/>2023-04-06</h3>
                </div>
            </div>
        </div>
    )
}export default Feedback;