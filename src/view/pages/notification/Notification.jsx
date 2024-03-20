import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
    const data = [
        {id: 1, title: 'PickUp for Oshodi'},
        {id: 2, title: 'PickUp for Ojota'},
        {id: 3, title: 'PickUp for Ikeja'}
    ]
    const navigate = useNavigate()
    const handleAccept = () => {
      navigate('/picker/new_order')
    }
  return (
    <div className='flex flex-col items-center justify-center pt-40'>
      <div className='flex flex-col gap-4 '>
        {data.map(notification => (
          <div className='flex flex-col items-center justify-center border-2 border-black px-20 py-10 gap-4 rounded-lg'>
            <p className=' text-2xl' key={notification.id}>{notification.title}</p>
            <button onClick={handleAccept} className=' bg-green-800 text-white px-5 py-3 rounded-lg'>
              Accept
            </button>
          </div>          
        ))}
      </div>
    </div>
  )
}

export default Notification
