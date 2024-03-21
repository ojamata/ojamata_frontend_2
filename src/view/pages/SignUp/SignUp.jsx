import { Link } from "react-router-dom";
import oja from '../../../assets/images/OjaMata2.png';
import './SignUp.css'
import image from '../../../assets/images/healthy.jpg'

import { FaEye,FaEyeSlash} from 'react-icons/fa';

import { MdOutlineMail } from "react-icons/md";


import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import TermsAndConditions from '../TermsAndCondition/TermsAndCondition'





const SignUp = ({ onSelect }) => {
    
    const [selectedRole, setSelectedRole] = useState(null);
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);


    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    
    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10,13}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    const [userData, setUserData] = useState({
        phoneNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const createUser = async (e) => {
        console.log("a click event happened");
        e.preventDefault();
        try {
            // const apiUrl = `https://ojamata-backend.onrender.com/api/register/customer`;
            const apiUrl = `http://localhost:8080/api/register/customer`;

            const userPhoneData = {
                ...userData,
                phoneNumber: phoneNumber,
                password: password,
                // selectedRole: role
            };

            await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userPhoneData),
            }).then((res) => res.json())
                .then(data => {
                    console.log(data.message);
                });

            setPassword("");
            setSelectedRole(null);
            setPhoneNumber("");
            setValid(true);
            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
            });


        } catch (error) {
            console.error("Account not created:", error.message);
        }
    };


    return (
        <div className="total">
            {<div className="imgDiv">
                <img src={image} alt="background" className="vegiesimg" />

            </div> }
            <div className='signUpBody'>
            

            <div className="logodiv">
                <img className='logo' src={oja} alt="OjaMata logo" />
            </div>
            <div>
                <h2 className='create'>Create an Account</h2>
                <div className='terms'>
                    
                    
                </div>
                {/* </div> */}
                


                <div className='details'>

                    <div>
                        <input
                            className="fillup"
                            name="firstName"
                            placeholder="First Name"
                            type="text" required
                            value={userData.firstName}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}

                        />

                    </div>

                    <div>
                        <input
                            className="fillup"
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            required
                            value={userData.lastName}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}

                        />
                    </div>

                    <div className='emailCollector'>
                        <MdOutlineMail className='emailImage' />
                        <input
                            
                            type="email"
                            id="email1"
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
                          <input type={showPassword ? "text" : "password"} className="collectorEmail1"  placeholder="Password"/>
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
                            required
                            country={'ng'}
                            name="phone"
                            placeholder="Enter Phone Number "
                            inputProps={{ required: true }}
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            style={{ width: '20px', fontSize: '15px' }}
                            inputStyle={{ width: '370px', height: '45px', borderRadius: '10px', fontSize: '16px' }}
                            dropdownStyle={{ border: '1px solid #ccc', borderTop: 'none', borderRadius: '10px', maxHeight: '200px', overflowY: 'auto', flexDirection: 'column', gap: '0' }}
                        />

                        {!valid && <p className='warning'>Please enter a valid phone number.</p>}
                    </div>
                    {/* <PhoneNumberValidation /> */}
                    <TermsAndConditions />

                    <div>
                        <button className='createbutton' onClick={createUser}>Create Account</button>
                    </div>
                    <p className='already'>Already have an Accounnt ? <Link className='log' to={'/login'}> Login</Link></p>

                </div>
            </div>
        </div>

        </div>
        
    );
};
export default SignUp