import React, { useEffect, useState } from "react";
import login from './Assets/login.module.css'


function Login(){
    const [csrf,getcsrf] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8000/get_csrf")
        .then(res=>res.json())
        .then(json=>getcsrf(json.csrf_token,csrf))
        console.log(csrf);
    },[])

    

setTimeout(()=>{
    document.getElementById("submi_login").addEventListener("submit",(event)=>{
        event.preventDefault()

        fetch("http://localhost:8000/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "X-CSRFToken":csrf,
            },
            body:JSON.stringify({
                'email':document.getElementById('email').value,
                'password':document.getElementById('pass').value,
                
            }),
            
        })
        .then(res=>res.json())
        .then(async(json)=>{
                switch(json.message){
                    case 'success':
                        console.log("account created")
                        break;
                        
                    case 'verify':
                        fetch('http://localhost:8000/unverified')
                        .then(res=>console.log(res.json()))
                    
                       
                    default:
                        console.log(json.message)
                        break
                       
                }
        })
        
    })
},100)


    

    return(
        <div className={login.wallpaper}>
        <div className={login.background}>
            <div className={login.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Login</h2>
                <form id="submi_login">
                <h5>Email</h5>
                <input type="email" className="email" id="email" placeholder="example@email.com"></input>
                <h5>Password</h5>
                <input type="password" className="pass" id="pass" placeholder="Password"></input>
                <button className={login.forgot}>Forgot Password?</button>
                <button className={login.signin} type="submit">Sign in</button>
                </form>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Dont't have an account yet? <a href="/signup">Register for free</a></p>
            </div>
        </div>
        </div>
    )
}export default Login;