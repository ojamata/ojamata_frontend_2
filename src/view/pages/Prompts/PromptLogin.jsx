import React from 'react'
import image from '../../../assets/images/assortment-different-fresh-vegetables.jpg'
import './PromptLogin.css'
import pic from '../../../assets/images/OjaMata2.png'
import { Link } from 'react-router-dom'

const PromptLogin = () => {
  return (
    <>
    <div>
      <img src={pic} alt="logo"className='pic'/>
    </div>
    <div className="loginHead">
      
      <div className="btns">
        <Link to='/login/customer'>
          <button className="customerLogin">Login as Customer</button>
        </Link>
        <Link to='/login/picker'>
          <button className="pickerLogin">Login as Picker</button>
        </Link>
        
      </div>
      <img src={image} alt="customer" className='loginbg'/>
    </div>
    
    </>
  )
}

export default PromptLogin