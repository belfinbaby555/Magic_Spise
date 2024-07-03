import React, { useEffect, useState } from "react";
import sig from './Assets/login.module.css'

function Signup(){

    const [csrf,getcsrf] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8000/get_csrf")
        .then(res=>res.json())
        .then(json=>getcsrf(json.csrf_token,csrf))
        console.log(csrf);
    },[])



setTimeout(()=>{
    document.getElementById("submi").addEventListener("submit",(event)=>{
        event.preventDefault()

        fetch("http://localhost:8000/signup",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "X-CSRFToken":''
            },
            body:JSON.stringify({
                'email':document.getElementById('email').value,
                'password':document.getElementById('pass').value,
                'name':document.getElementById('phone').value
            })
        })
        .then(res=>res.json())
        .then(json=>{
                switch(json.message){
                    case 'success':
                        console.log("accout created")
                        break;
                    
                    case 'UNIQUE constraint failed: main_user.email':
                        console.log("account exist")
                        break;

                    default:
                        console.log('something')
                       
                }
        })
        
    })

},100)




    return(
        <div className={sig.wallpaper}>
        <div className={sig.background}>
            <div className={sig.login_container}>
                <h1>#the MAGIC SPICE</h1>
                <h2>Signup</h2>
                <form id="submi">
                <h5>Phone</h5>
                <input type="text" id="phone" placeholder="Username" required></input>
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com" required></input>
                <h5>Password</h5>
                <input type="password" id="pass" placeholder="Password" required></input>
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