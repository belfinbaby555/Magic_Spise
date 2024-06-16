import React, { useEffect, useState } from "react";

import login from './Assets/login.module.css'
import axios from "axios";

function Login(){
    const [getcsrf,setcsrf]=useState("")

    useEffect(()=>{
        async function fetchdata(){
        const csrf= await axios.get("http://localhost:8000/get_csrf")
        setcsrf(csrf.data.csrf_token,getcsrf);
        document.cookie=`CSRFTOKEN=${getcsrf}; path='/'`
        }
        fetchdata();
},[])

async function formSubmit(){
    var formdat=new FormData();

    formdat.append('email',document.getElementById('email').value)
    formdat.append('password',document.getElementById('pass').value)

    await axios({
        method:'POST',
        data:formdat,
        url:"http://localhost:8000/login",
        xsrfCookieName:'CSRFTOKEN',
        xsrfHeaderName:'X-CSRFTOKEN',
        headers:{
            'Content-Type':'multipart/form-data',
            'X-CSRFTOKEN':getcsrf
        }
    })

}
    console.log(getcsrf)
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
                <button className={login.signin} onClick={formSubmit}>Sign in</button>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Dont't have an account yet? <a href="/signup">Register for free</a></p>
            </div>
        </div>
        </div>
    )
}export default Login;