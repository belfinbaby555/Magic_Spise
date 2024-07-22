import React from "react";

function Loading(){
    return(
        <div className="w-full h-full absolute left-0 flex bg-white/95">
        <div className="w-20 h-20 border-8 border-l-white rounded-full animate-spin m-auto border-blue-600"></div>
        </div>
    )
}export default Loading;