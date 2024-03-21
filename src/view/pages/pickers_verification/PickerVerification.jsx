import React, { useState } from 'react';

const PickerVerification = () => {
  const [verificationType, setVerificationType] = useState('');

  const handleVerificationChange = (e) => {
    setVerificationType(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-8 pt-20'>
        <h2 className='text-3xl font-bold'>Picker Verification</h2>
        <div className='flex flex-col gap-7'>
            <label htmlFor="verificationType">Verification Type:</label>
            <select className='w-fit px-5 py-2 rounded-lg' id="verificationType" value={verificationType} onChange={handleVerificationChange}>
                <option value="">Select verification type</option>
                <option value="ID">NIN</option>
                <option value="License">Driver's License</option>
                <option value="Passport">Passport</option>
            </select>
            <input type='number' className='border-2 border-black px-5 py-2 rounded-lg' placeholder='Enter the verification number'/>
        
        </div>
        <button className='w-fit px-6 py-3 bg-green-800 text-white rounded-lg'>Verify</button>
    </div>
    
  );
};

export default PickerVerification;
