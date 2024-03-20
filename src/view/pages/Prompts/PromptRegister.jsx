import React from 'react'
import image from '../../../assets/images/real-food-pyramid-assortment-top-view.jpg'
import './PromptRegister.css'
import oja from '../../../assets/images/OjaMata2.png'
import { Link } from 'react-router-dom'

const PromptRegister = () => {
  return (
    <>
    <div>
      <img src={oja} alt="logo" className='oja'/>
    </div>
    <div className="registerHead">
      
      <div className="btns">
        <Link to='/signup/customer'>
          <button className="customerRegister">Register as Customer</button>
        </Link>
        <Link to='/signup/picker'>
          <button className="pickerRegister">Register as Picker</button>
        </Link>
        
      </div>
      <img src={image} alt="background" className='registerbg'/>
    </div>
    
    </>
    
  )
}

export default PromptRegister