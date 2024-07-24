import React, { useEffect, useState } from "react";
import login from './Assets/login.module.css'
import axios from "axios";


function Login(){
    const [verify,setverify]=useState(false)
    const [mail,setmail]=useState('');
    const [time,settime]=useState(10);
    var csrf;

        axios.get("/get_csrf",{withCredentials:true})
        .then(res=>csrf=res.data)
        .catch((e)=>{
           document.getElementById("alert").style.display="block"
        })

    

useEffect(!verify && (()=>{
    try{
    document.getElementById("submi_login").addEventListener("submit",(event)=>{
        event.preventDefault()

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
                switch(res.data.message){
                    case 'success':
                        window.location.href='/'
                        break;
                        
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
            document.getElementById("mail_error").innerHTML=e;
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
        alert("yu[p")
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
                    <input type="email" className="email" id="email" placeholder="example@email.com"></input>
                    <p className="w-full h-fit text-red-600" id="mail_error"></p>
                    <h5>Password</h5>
                    <input type="password" className="pass" id="pass" placeholder="Password"></input>
                    <p className="w-full h-fit text-red-600" id="pass_error"></p>
                    <button className={login.forgot}>Forgot Password?</button>
                    <button className={login.signin} type="submit">Sign in</button>
                    </form>
                    {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                    <p>Dont't have an account yet? <a href="/signup">Register for free</a></p>
                </div>
)}
                {verify && (
                     <div className={login.login_container}>
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