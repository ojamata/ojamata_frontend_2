import React, { useState } from 'react';
import './TermsAndCondition.css'



const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setAccepted(!accepted);
  };

  return (
    
    <div className='terms'>
      <input
          className='condition'
          type="checkbox"
          id="termsCheckbox"
          checked={accepted}
          onChange={handleCheckboxChange}
          required
      />
      <label aria-required className='accept'>By joining, I agree to the
      <a className='rule' href={'/'}> Terms and Conditions </a> of <span className='appname'>Ojamata</span> </label>
      </div>
        
    );
};

export default TermsAndConditions;
