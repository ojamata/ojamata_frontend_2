import React, { useState } from 'react';
import './AddressForm.css'; // Import CSS file for styling

const AddressForm = () => {
  const [addresses, setAddresses] = useState([{ street: '', city: '', state: '' }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...addresses];
    newAddresses[index][name] = value;
    setAddresses(newAddresses);
  };

  const addAddress = () => {
    setAddresses([...addresses, { street: '', city: '', state: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(addresses);
  };

  return (
    
      <div className="address-form-container">
         <h1 className='over'>Address</h1>
         {addresses.map((address, index) => (
           <form key={index} className="address-form" onSubmit={handleSubmit}>
             <h2>Address {index + 1}</h2>
             <div className="form-group">
               <label className="form-label">
                 Street Address:
                 <input
                   className="form-input"
                   type="text"
                   name="street"
                   value={address.street}
                   onChange={(e) => handleChange(e, index)}
                 />
               </label>
             </div>
             <div className="form-group">
               <label className="form-label">
                 City:
                 <input
                   className="form-input"
                   type="text"
                   name="city"
                   value={address.city}
                   onChange={(e) => handleChange(e, index)}
                 />
               </label>
             </div>
             <div className="form-group">
               <label className="form-label">
                 State:
                 <input
                   className="form-input"
                   type="text"
                   name="state"
                   value={address.state}
                   onChange={(e) => handleChange(e, index)}
                 />
               </label>
             </div>
           </form>
         ))}
         <button className="add-address-btn" onClick={addAddress}>Add Address</button>
         <button className="submit-btn" onClick={handleSubmit}>Submit</button>
       </div>

    
    
  );
};

export default AddressForm;
