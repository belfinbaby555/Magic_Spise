import React, { useEffect, useState } from "react";
import sig from './Assets/login.module.css'
import axios from "axios";


function Signup() {

    const [csrf,setgetcsrf]=useState('');

    

    useEffect(()=>{
        async function fetchcsrf(){
       const Xcsrf= await axios.get("http://localhost:8000/get_csrf");
        setgetcsrf(Xcsrf.data.csrf_token,csrf)
        }
        fetchcsrf();
    },[])
    document.cookie=`csrftoken= ${csrf}; path='\'`

    addEventListener('submit',async(event)=>{
        
        event.preventDefault();
        var form={
            'name':document.getElementById("phone").value,
            'email':document.getElementById("email").value,
            'password':document.getElementById("pass").value,
            'csrftoken':csrf,
        }

        console.log(form)
        
        axios({
            method:'POST',
            url:"http://127.0.0.1:8000/signup",
            data:JSON.stringify(form),
            withCredentials:true,
            headers:{
                'Content-Type':'application/json',
                'X-CSRFToken':csrf,
            },
        })
    })




       


    return(
        <div className={sig.wallpaper}>
        <div className={sig.background}>
            <div className={sig.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Signup</h2>
                <form>
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com"></input>
                <h5>Phone</h5>
                <input type="text" id="phone" placeholder="name"></input>
                {/* +91 ******4690 */}
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