import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import login from './Assets/login.module.css'
import axios from "axios";


function Login(){
    const [verify,setverify]=useState(false)
    const [mail,setmail]=useState('');
    const [time,settime]=useState(10);
    const [load,setload]=useState(false)
    const navi=useNavigate()
    var csrf;

        axios.get("/get_csrf",{withCredentials:true})
        .then(res=>csrf=res.data)
        .catch((e)=>{
           document.getElementById("alert").style.display="block"
        })

    

useEffect(!verify && (()=>{
    try{
    document.getElementById("submi_login").addEventListener("submit",(event)=>{
        setload(true)
        event.preventDefault();

var info=JSON.stringify({
    'email':document.getElementById('email').value,
    'password':document.getElementById('pass').value,
    
})
        axios.post("/login",info,{
            headers:{
                    "Content-Type":"application/json",
                    "X-CSRFToken":csrf,
            },
            withCredentials:true
      
        })
        .then(async(res)=>{
            setload(false)
                switch(res.data.message){
                    case 'success':
                        navi("/")
                        break
                        
                    case 'verify':
                        axios.get('/unverified',{withCredentials:true})
                        .then(res=>{console.log(res.data)

                        document.getElementById('mail_error').innerHTML=''
                        document.getElementById('pass_error').innerHTML=''
                        setmail(res.data.email,mail)
                        settime(res.data.timer_duration,time)
                        countdown();
                        setverify(true,verify)
                        })
                        break;
                    
                       
                    case 'User does not exist':
                        document.getElementById('mail_error').innerHTML=res.data.message
                        document.getElementById('pass_error').innerHTML=''
                        break;
                    
                    case 'Incorrect password':
                        document.getElementById('pass_error').innerHTML=res.data.message
                        document.getElementById('mail_error').innerHTML=''
                        break;
                    default:
                        
                }
        })
        .catch((e)=>{
            document.getElementById("mail_error").innerHTML=e.message;
        })
        
    })}

catch(e){
    document.getElementById("alert").style.display="block"
}

}),[])

const resend=()=>{
    axios.get('/resend',{withCredentials:true})
    .then(res=>console.log(res.data.message))
    .catch((e)=>{
        alert(e)
    })
}

const countdown = () => {
    const inter = setInterval(() => {
      settime(prev => prev - 1);

      if (time >= 0) {
        clearInterval(inter); 
        
        settime('Resend');
      }
    }, 1000);
  };

    return(
        <div className={login.wallpaper}>
        <div className={login.background}>
        <h6 className="text-center text-white border-l-8 rounded-md uppercase text-xl border-red-600 absolute right-2 top-10 bg-red-600/50 px-4 py-3 duration-500" id="alert" style={{display:'none'}}>Something went wrong !!!</h6>
                {!verify && (
                <div className={login.login_container}>
                    <h1>#the MAGIC SPICE</h1>
                    <h2>Login</h2>
                    <form id="submi_login">
                    <h5>Email</h5>
                    <input type="email" required className="email" id="email" placeholder="example@email.com"></input>
                    <p className="w-full h-fit text-red-600" id="mail_error"></p>
                    <h5>Password</h5>
                    <input type="password" required className="pass" id="pass" placeholder="Password"></input>
                    <p className="w-full h-fit text-red-600" id="pass_error"></p>
                    <button className={login.forgot}>Forgot Password?</button>
                    <button className={login.signin} type="submit">{load?<div className="w-7 h-7 rounded-full border-4 border-white border-l-transparent mx-auto animate-spin"></div>:"Sign in"}</button>
                    </form>
                    {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                    <p>Dont't have an account yet? <Link to="/signup">Register for free</Link></p>
                </div>
)}
                {verify && (
                     <div className={login.login_container} style={{height:'fit-content'}}>
                        <h1>#the MAGIC SPICE</h1>
                        <h2 className="text-center">Verification required</h2>
                        <h3 className="text-center my-4 text-base">Verification mail has been send to <br/><b>{mail}</b></h3>
                        <button className={login.signin} onClick={resend} >{time}</button>
                     </div>
                )}
                
            
        </div>
        </div>
    )
}export default Login;