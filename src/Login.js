import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';
import login from './Assets/login.module.css';
import axios from "axios";

function Login() {
    const [verify, setVerify] = useState(false);
    const [mail, setMail] = useState('');
    const [time, setTime] = useState();
    const [load, setLoad] = useState(false);
    const [csrf, setCsrf] = useState('');
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passRef = useRef(null);
    const mailErrorRef = useRef(null);
    const passErrorRef = useRef(null);
    const alertRef = useRef(null);

    useEffect(() => {
        const handleSubmit = (event) => {
            event.preventDefault();
            setLoad(true);
            mailErrorRef.current.innerHTML = '';
            passErrorRef.current.innerHTML = '';

            const info = JSON.stringify({
                'email': emailRef.current.value,
                'password': passRef.current.value,
            });

            axios.post("/login", info, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrf,
                },
                withCredentials: true
            })
                .then(async (res) => {
                    switch (res.data.message) {
                        case 'success':
                            navigate("/");
                            break;

                        case 'verify':
                            axios.get('/unverified', { withCredentials: true })
                                .then(res => {
                                    setMail(res.data.email);
                                    startCountdown(10);
                                    setVerify(true);
                                });
                            break;

                        case 'User does not exist':
                            mailErrorRef.current.innerHTML = res.data.message;
                            break;

                        case 'Incorrect password':
                            passErrorRef.current.innerHTML = res.data.message;
                            break;

                        default:
                            break;
                    }
                    setLoad(false);
                })
                .catch((e) => {
                    mailErrorRef.current.innerHTML = e.message;
                });
        };

        const form = document.getElementById('submi_login');
        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    }, [csrf, navigate]);

    const resend = () => {
        setTime(<div className="w-7 h-7 rounded-full border-4 border-white border-l-transparent mx-auto animate-spin"></div>)
        axios.get('/resend', { withCredentials: true })
            .then((res) => {startCountdown(30)})
            .catch((e) => {
                setTime('Resend')
            });
    };

    const startCountdown = (t) => {
        setTime("Resend in "+t+" sec")
        const interval = setInterval(() => {
            if (t > 1) {
                t--;
                setTime("Resend in "+t+" sec");
            } else {
                clearInterval(interval);
                setTime('Resend');
            }
        }, 1000);
    };

    return (
        <div className={login.wallpaper}>
            <div className={login.background}>
                <h6 className="text-center text-white border-l-8 rounded-md uppercase text-xl border-red-600 absolute right-2 top-10 bg-red-600/50 px-4 py-3 duration-500" id="alert" ref={alertRef} style={{ display: 'none' }}>Something went wrong !!!</h6>
                {!verify && (
                    <div className={login.login_container}>
                        <h1>#the MAGIC SPICE</h1>
                        <h2>Login</h2>
                        <form id="submi_login">
                            <h5>Email</h5>
                            <input type="email" required className="email" ref={emailRef} placeholder="example@email.com" />
                            <p className="w-full h-fit text-red-600" ref={mailErrorRef}></p>
                            <h5>Password</h5>
                            <input type="password" required className="pass" ref={passRef} placeholder="Password" />
                            <p className="w-full h-fit text-red-600" ref={passErrorRef}></p>
                            <button className={login.forgot}>Forgot Password?</button>
                            <button className={login.signin} type="submit">
                                {load ? <div className="w-7 h-7 rounded-full border-4 border-white border-l-transparent mx-auto animate-spin"></div> : "Sign in"}
                            </button>
                        </form>
                        <p>Don't have an account yet? <Link to="/signup">Register for free</Link></p>
                    </div>
                )}
                {verify && (
                    <div className={login.login_container} style={{ height: 'fit-content' }}>
                        <h1>#the MAGIC SPICE</h1>
                        <h2 className="text-center">Verification required</h2>
                        <h3 className="text-center my-4 text-base">Verification mail has been sent to <br /><b>{mail}</b></h3>
                        <button className={login.signin} onClick={resend} disabled={time !== 'Resend'}>{time}</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
