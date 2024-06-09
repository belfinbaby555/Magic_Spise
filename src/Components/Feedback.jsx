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
                    <p className="text-xl">Lorem ipsum nifjvijfeofjnvej
                        wkdjbckjkjdvksjds sdjs d dfhbeid ied iefdvi efh
                         iejfdvik jfivf niefv iefv iefuvief iernvf ir jfv
                    </p>
                    <h3 className="pt-10 leading-7 text-stone-600">Prince Thomas<br/>2023-04-06</h3>
                </div>
                <div className={feed.feedback1}>
                    <img src={coma} className="w-20 pb-6"/>
                    <p className="text-xl">Lorem ipsum nifjvijfeofjnvej
                        wkdjbckjkjdvksjds sdjs d dfhbeid ied iefdvi efh
                         iejfdvik jfivf niefv iefv iefuvief iernvf ir jfv
                    </p>
                    <h3 className="pt-10 leading-7 text-stone-600">Prince Thomas<br/>2023-04-06</h3>
                </div>
            </div>
        </div>
    )
}export default Feedback;