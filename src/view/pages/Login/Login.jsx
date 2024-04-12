import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons/fa
import image from '../../../assets/images/OjaMata2.png';
import './Login.css'; // Import CSS for styling
import store from '../../../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'


const Login = ({url}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegularLogin = () => {
   console.log("Regular login");
  };

  const apiBaseUrl = 'https://crab-desired-wildly.ngrok-free.app/api/auth/user'

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const autheticateUser = async () => {
    try {
      const response = await axiosInstance.post(apiBaseUrl, userData);
      const accessToken =  response.data.accessToken;
      if(localStorage.getItem('accessToken') !== null){
        localStorage.removeItem('accessToken');
      }
      localStorage.setItem('accessToken',accessToken)
      console.log('User authentication successful:', response.data);
      console.log(accessToken);
      const decodedToken = jwtDecode(accessToken);
      const role = decodedToken.role;
      if(role === 'CUSTOMER'){
        navigate('/customer')
      }
      if(role === 'PICKER'){
        navigate('/picker')
      }
      if(role === 'SUPER_USER'){
        navigate('/admin')
      }
      if(role === 'ORDER_MANAGER'){
        navigate('/order_manager')
      }
      
    } catch (error) {
      console.error('Incorrect Login Details:', error);
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
            className="password-input" 
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
            required
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
        <button type="button" onClick={autheticateUser} className="login-button">
          Login
        </button>
        </div>
        

        <h4 className="account">Dont Have an Account? <span className="signUp">
          <a href='/signup' className="sign">Sign Up</a></span></h4>

      </form>
      
    </div>

    </div>
   
  );
};

export default Login;
