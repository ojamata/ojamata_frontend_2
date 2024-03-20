import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons/fa
import image from '../../../assets/images/OjaMata2.png';
import './Login.css'; // Import CSS for styling
import store from '../../../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg'


const Login = ({url}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegularLogin = () => {
    // Handle regular login logic here
    console.log("Regular login");
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
        <input type="email" className="email-input"  required/>
        <label htmlFor="password" className="password-label">Password</label>
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} className="password-input" required
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
        <button type="button" onClick={handleRegularLogin} className="login-button">
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
