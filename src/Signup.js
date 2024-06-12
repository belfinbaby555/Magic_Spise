import React from "react";
import sig from './Assets/login.module.css'

function Signup(){
    var csrf="";
    
    fetch("http://localhost:8000/get_csrf")
    .then((res)=>res.json())
    .then(data=>{
        csrf=data.csrf_token;
    })

    
   
       addEventListener("submit",(eve)=>{
            eve.preventDefault();

            var formDat={ 
                'email':document.getElementById("email").value,
                'name':"shibu",
                'password':document.getElementById("pass").value,
            }
            
            
        fetch("http://127.0.0.1:8000/signup",{
            method:"POST",
            body:JSON.stringify(formDat),
            headers:{'X-CSRFToken':csrf}
        })
        .then((res)=>{res.json})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})
    })


    return(
        <div className={sig.wallpaper}>
        <div className={sig.background}>
            <div className={sig.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Signup</h2>
                <form id="sign">
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com"></input>
                <h5>Phone</h5>
                <input type="number" id="phone" placeholder="+91 ******4690"></input>
                <h5>Password</h5>
                <input type="password" id="pass" placeholder="Password"></input>
                <span><input type="checkbox"></input><p> I agree to <a href="#">terms and conditions</a></p></span>
                <button className={sig.signin} type="submit">Sign Up</button>
                </form>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Already have an account?  <a href="/login">Sign In</a></p>
            </div>
        </div>
        </div>
    )
}export default Signup;