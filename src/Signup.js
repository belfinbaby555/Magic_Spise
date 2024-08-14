import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sig from './Assets/login.module.css';
import axios from 'axios';

function Signup() {
  const [csrf, setCsrf] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch CSRF token on component mount
    axios.get('/get_csrf', { withCredentials: true })
      .then(res => setCsrf(res.data))
      .catch(() => setShowAlert(true));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);

    const { email, pass, phone } = event.target.elements;
    const info = JSON.stringify({
      email: email.value,
      password: pass.value,
      name: phone.value,
    });

    try {
      const res = await axios.post('/signup', info, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrf,
        },
        withCredentials: true,
      });

      switch (res.data.message) {
        case 'success':
          navigate('/login');
          break;
        case 'UNIQUE constraint failed: main_user.email':
          setError('Account already exists!');
          break;
        default:
          setError(res.data.message);
      }
    } catch (e) {
      setShowAlert(true);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className={sig.wallpaper}>
      <div className={sig.background}>
        {showAlert && (
          <h6 className="text-center text-white border-l-8 rounded-md uppercase text-xl border-red-600 absolute right-2 top-10 bg-red-600/50 px-4 py-3 duration-500">
            Something went wrong !!!
          </h6>
        )}
        <div className={sig.login_container}>
          <h1>#the MAGIC SPICE</h1>
          <h2>Signup</h2>
          <form id="submi" onSubmit={handleSubmit}>
            <h5>Username</h5>
            <input type="text" id="phone" name="phone" placeholder="Username" required />
            <h5>Email</h5>
            <input type="email" id="email" name="email" placeholder="example@email.com" required />
            <p className="w-full h-fit text-red-600">{error}</p>
            <h5>Password</h5>
            <input type="password" id="pass" name="pass" placeholder="Password" required />
            <span>
              <input type="checkbox" required />
              <p>I agree to <Link to='/termsandcondition'>terms and conditions</Link></p>
            </span>
            <button className={sig.signin} type="submit">
              {load ? (
                <div className="w-7 h-7 rounded-full border-4 border-white border-l-transparent mx-auto animate-spin"></div>
              ) : "Sign Up"}
            </button>
          </form>
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
