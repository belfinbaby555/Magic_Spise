import sig from './Assets/login.module.css'
import axios from "axios";

function Signup(){

        
        var csrf;

        axios.get("/get_csrf",{withCredentials:true})
        .then(res=>csrf=res.data)
        



setTimeout(async()=>{
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
                        document.getElementById('mail_error').innerHTML=""
                        window.location.href='/login'
                        
                        break;
                    
                    case 'UNIQUE constraint failed: main_user.email':
                        document.getElementById('mail_error').innerHTML="Account already exist!"
                        break;

                    default:
                        document.getElementById('mail_error').innerHTML=res.data.message;
                       
                }
        })
        .catch(e =>{
            
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
                <h5>Username</h5>
                <input type="text" id="phone" placeholder="Username" required></input>
                <h5>Email</h5>
                <input type="email" id="email" placeholder="example@email.com" required></input>
                <p className="w-full h-fit text-red-600" id="mail_error"></p>
                <h5>Password</h5>
                <input type="password" id="pass" placeholder="Password" required></input>
                <span><input type="checkbox"></input><p> I agree to <a>terms and conditions</a></p></span>
                <button className={sig.signin} type="submit">Sign Up</button>
                </form>
                {/* <button className="google"><i class="fas fa-clock"></i>Sign-in with Google</button> */}
                <p>Already have an account?  <a href="/login">Sign In</a></p>
            </div>
        </div>
        </div>
    )
}export default Signup;