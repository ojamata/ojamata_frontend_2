import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PickerPaymentInfo = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState(''); 
  const [accountName, setAccountName] = useState(''); 
  const [isNameVisible, setIsNameVisible] = useState(false)
  const secretKey = process.env.REACT_APP_PAYSTACK_API;
  const navigate = useNavigate()

 

  const getBanks = async () => {
    try {
      const response = await fetch('https://api.paystack.co/bank', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}` 
        }
      });


      if (!response.ok) {
        throw new Error('Failed to fetch banks');
      }

      const data = await response.json();
      setBanks(data.data)// Log the data to the console or use it as needed
    } catch (error) {
      console.error('Error fetching banks:', error);
    }
  };


  const verifyAccount = async () => {
    try {
      const response = await fetch(`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}` 
        }
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized access. Please check your Paystack secret key.');
        } else {
          throw new Error('Failed to verify account');
        }
      }
  
      
      const data = await response.json();
      const name = data.data.account_name;
      setAccountName(name); // Set the account name
      setIsNameVisible(true);
    } catch (error) {
      console.error('Error verifying account:', error);
    }
  };

  const addPaymentInfo = () => {
    navigate('/paymentInfo/success')
  }
  useEffect(() => {
    getBanks();
  })

  return (
    <div className='flex flex-col gap-5 items-center justify-center pt-20'>
      <p className=' text-2xl font-bold'>Verify Account Number</p>
      <label>Choose a bank:</label>
      <select className='w-fit px-5 py-3' value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
        <option value="">Select Bank</option>
        {banks.map((bank, index) => (
          <option key={index} value={bank.code}>{bank.name}</option>
        ))}
      </select>
      <div className='flex flex-col gap-10'>
        <input className='w-fit px-5 py-3 border-2 border-black rounded-lg' placeholder='Enter your account number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)}/>
        <button className=' bg-green-800 text-white px-5 py-3' onClick={verifyAccount}>
          Verify
        </button>

        <button className=' bg-green-800 text-white px-5 py-3' onClick={addPaymentInfo}>
          Add Payment Information
        </button>

      </div>
      {isNameVisible && (
          <p className="text-green-700">Account Name: {accountName}</p>
        )}
  </div>
  );
};

export default PickerPaymentInfo;
