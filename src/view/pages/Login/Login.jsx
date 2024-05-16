import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons/fa
import image from '../../../assets/images/OjaMata2.png';
import './Login.css'; // Import CSS for styling
import store from '../../../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();



  const [userData, setUserData] = useState({
    email: '',
    password: ''
});

  const apiBaseUrl = 'https://ojamata.onrender.com/api/auth/user'

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const loginUser = async () => {
    try {
      const response = await axiosInstance.post(apiBaseUrl, userData);
      console.log('Logged in', response.data);


      const token = response.data.accessToken;

      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        if(decoded.role === 'CUSTOMER') navigate('/customer')
        if(decoded.role === 'PICKER') navigate('/picker')
        if(decoded.role === 'STAFF') navigate('/order-manager')
        if(decoded.role === 'SUPER_USER') navigate('/admin')
      } catch (error) {
        console.error('Error decoding JWT:', error.message);
      }


      localStorage.setItem('accessToken', response.data.accessToken)

      
    } catch (error) {
      console.error('Error getting pickers', error);
    }
  };

  
  return (
    <div className="main">
      <div className="storecontainer">
        <img src={store} alt="store" className='store' />
      </div>
    
      <div className="login-container">
      <img src={image} alt="" className="image" />
      <form className="login-form">
        <label htmlFor="email" className="email-label">Email Address</label>
        <input 
          type="email" 
          className="email-input"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required/>
        <label htmlFor="password" className="password-label">Password</label>
        <div className="password-container">
          <input 
            type={showPassword ? "text" : "password"}
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
            className="password-input" required
           />
          {/* Toggle password visibility icon */}
          {showPassword ? (
            <FaEyeSlash onClick={togglePasswordVisibility} className="eye-icon" />
          ) : (
            <FaEye onClick={togglePasswordVisibility} className="eye-icon" />
          )}
        </div>
        <div className="forgotten">
          <a href='/' className="forgottenText">Forgotten Password</a>
        </div>
        <div className="buttoncase">
        <button type="button" onClick={loginUser} className="login-button">
          Login
        </button>
        </div>
        

        <h4 className="account">Don't Have an Account? <span className="signUp">
          <a href='/signup' className="sign">Sign Up</a></span></h4>

      </form>
      
    </div>

    </div>
   
  );
};

export default Login;
