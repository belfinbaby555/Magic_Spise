import React from "react";
import Navi from "./Components/Navi"
import Footer from "./Components/Footer"




function Terms(){
    return(
    <div>
        <Navi/>
        <iframe src='https://www.termsfeed.com/live/3fde8c18-618e-44dc-b485-3d31c35002ce' className="w-screen h-screen" title="terms"></iframe>
    </div>
    )
}export default Terms;