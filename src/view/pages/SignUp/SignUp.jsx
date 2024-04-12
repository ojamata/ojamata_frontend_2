import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import oja from '../../../assets/images/OjaMata2.png';
import image from '../../../assets/images/healthy.jpg';
import './SignUp.css';
import TermsAndConditions from '../TermsAndCondition/TermsAndCondition';

const SignUp = ({ role }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: role
  });
  const navigate = useNavigate()

  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (value) => {
    setUserData({ ...userData, phoneNumber: value });
    setValidPhoneNumber(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10,13}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const apiBaseUrl = 'https://crab-desired-wildly.ngrok-free.app/api/register/user'

  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const registerUser = async () => {
    try {
      const response = await axiosInstance.post(apiBaseUrl, userData);
      console.log('User registration successful:', response.data);
      navigate('/login')

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="total">
      <div className="imgDiv">
        <img src={image} alt="background" className="vegiesimg" />
      </div>
      <div className='signUpBody'>
        <div className="logodiv">
          <img className='logo' src={oja} alt="OjaMata logo" />
        </div>
        <div>
          <h2 className='create'>Create an Account</h2>
          
          <div className='details'>
            <input
              className="fillup"
              name="firstName"
              placeholder="First Name"
              type="text"
              required
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            />
            <input
              className="fillup"
              name="lastName"
              placeholder="Last Name"
              type="text"
              required
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            />
            <div className='emailCollector'>
              <MdOutlineMail className='emailImage' />
              <input
                type="email"
                className='collectorEmail'
                name="email"
                placeholder="Email Address"
                required
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className='passwordCon1'>
              <div className='passwordCon'>
                <input
                  type={showPassword ? "text" : "password"}
                  className="collectorEmail1"
                  placeholder="Password"
                  required
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
                {/* Toggle password visibility icon */}
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} className='eyeSvg' />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} className='eyeSvg' />
                )}
              </div>
            </div>
            <div className='phoneBox'>
              <PhoneInput
                country={'ng'}
                name="phoneNumber"
                placeholder="Enter Phone Number"
                inputProps={{ required: true }}
                value={userData.phoneNumber}
                onChange={handlePhoneChange}
                inputStyle={{ width: '370px', height: '45px', borderRadius: '10px', fontSize: '16px' }}
                dropdownStyle={{ border: '1px solid #ccc', borderTop: 'none', borderRadius: '10px', maxHeight: '200px', overflowY: 'auto', flexDirection: 'column', gap: '0' }}
              />
              {!validPhoneNumber && <p className='warning'>Please enter a valid phone number.</p>}
            </div>
            <div>
              <button className='createbutton' onClick={registerUser}>Create Account</button>
            </div>
            <div className='terms'>
            <TermsAndConditions />
          </div>
            <p className='already'>Already have an Account? <Link className='log' to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
