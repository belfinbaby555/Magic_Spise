import { useEffect } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import sig from './Assets/login.module.css'
import axios from "axios";

function Signup(){

        const navigates=useNavigate()
        var csrf;
try{
    axios.get("/get_csrf",{withCredentials:true})
    .then(res=>csrf=res.data)
    .catch(()=>[
        document.getElementById("alert").style.display="block"
    ])
}
catch(e){
    document.getElementById("alert").style.display="block"
}
       
        



useEffect(async()=>{
    try{
        document.getElementById("submi").addEventListener("submit",async(event)=>{
            event.preventDefault()
    var info=JSON.stringify({
        'email':document.getElementById('email').value,
        'password':document.getElementById('pass').value,
        'name':document.getElementById('phone').value
    })
    
             await axios.post("/signup",info,{
                headers:{
                    "Content-Type":"application/json",
                    "X-CSRFToken":csrf,
            },
            withCredentials:true
            })
            .then(res=>{
                    switch(res.data.message){
                        
                        case 'success':
                            document.getElementById('mail_error').innerHTML="";
                            navigates('/login')
                            
                            break;
                        
                        case 'UNIQUE constraint failed: main_user.email':
                            document.getElementById('mail_error').innerHTML="Account already exist!"
                            break;
    
                        default:
                            document.getElementById('mail_error').innerHTML=res.data.message;
                           
                    }
            })
            .catch(e =>{
                document.getElementById("alert").style.display="block"
            })
            
        })
    }
    catch(e){
        document.getElementById("alert").style.display="block";
    }

},100)




    return(
        <div className={sig.wallpaper}>
        <div className={sig.background}>
        <h6 className="text-center text-white border-l-8 rounded-md uppercase text-xl border-red-600 absolute right-2 top-10 bg-red-600/50 px-4 block py-3 duration-500" id="alert" style={{display:'none'}}>Something went wrong !!!</h6>
            <div className={sig.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Signup</h2>
                <form id="submi">
                <h5>Username</h5>
                <input type="text" id="phone" placeholder="Username" required></input>
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com" required></input>
                <p className="w-full h-fit text-red-600" id="mail_error"></p>
                <h5>Password</h5>
                <input type="password" id="pass" placeholder="Password" required></input>
                <span><input type="checkbox" required></input><p> I agree to <Link to='/termsandcondition'><a>terms and conditions</a></Link></p></span>
                <button className={sig.signin} type="submit">Sign Up</button>
                </form>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Already have an account?  <Link to="/login"><a>Sign In</a></Link></p>
            </div>
        </div>
        </div>
    )
}export default Signup;