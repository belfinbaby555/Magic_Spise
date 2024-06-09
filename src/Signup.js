import React from "react";
import sig from './Assets/login.module.css'

function Signup(){
    return(
        <div className={sig.wallpaper}>
        <div className={sig.background}>
            <div className={sig.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Signup</h2>
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com"></input>
                <h5>Phone</h5>
                <input type="number" id="phone" placeholder="+91 ******4690"></input>
                <h5>Password</h5>
                <input type="password" id="pass" placeholder="Password"></input>
                <span><input type="checkbox"></input><p> I agree to <a href="#">terms and conditions</a></p></span>
                <button className={sig.signin}>Sign Up</button>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Already have an account?  <a href="/login">Sign In</a></p>
            </div>
        </div>
        </div>
    )
}export default Signup;