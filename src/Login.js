import React, { useEffect, useState } from "react";
import login from './Assets/login.module.css'
import wall from './Assets/Images/wallpaper_withname.png'

function Login(){

    return(
        <div className={login.wallpaper}>
        <div className={login.background}>
            <div className={login.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Login</h2>
                <h5>Email</h5>
                <input type="email" className="email" id="email" placeholder="example@email.com"></input>
                <h5>Password</h5>
                <input type="password" className="pass" id="pass" placeholder="Password"></input>
                <button className={login.forgot}>Forgot Password?</button>
                <button className={login.signin}>Sign in</button>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Dont't have an account yet? <a href="/signup">Register for free</a></p>
            </div>
        </div>
        </div>
    )
}export default Login;