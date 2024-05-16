import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handleAccept = async (notificationId) => {
    const apiBaseUrl = 'https://ojamata.onrender.com/api/picker/accept-order'

    const axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      timeout: 5000,
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      }
    })

    const data = {
      notificationId: notificationId
    }

    try {
      const response = await axiosInstance.post(apiBaseUrl, data)
      console.log('Response:', response.data)
      // Handle the response if needed
    } catch (error) {
      console.error('Error sending request:', error)
    }

    navigate('/picker/new_order')
  }

  const getAllNotifications = async () => {
    try {
      const apiBaseUrl = 'https://ojamata.onrender.com/api/notification/get-all'
      const response = await axios.get(apiBaseUrl, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
      console.log('Notifications:', response.data)
      setData(response.data)

      const token = localStorage.getItem("accessToken");
      const decoded = jwtDecode(token);
      console.log('User Data:', decoded);

    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  useEffect(() => {
    getAllNotifications()
  }, []) // Empty dependency array to run only once when component mounts

  return (
    <div className='flex flex-col items-center justify-center pt-40'>
      <div className='flex flex-col gap-4 '>
        {data.map(notification => (
          <div key={notification.id} className='flex flex-col items-center justify-center border-2 border-black px-20 py-10 gap-4 rounded-lg'>
            <p className='text-2xl'>{notification.message}</p>
            <button onClick={() => handleAccept(notification.id)} className='bg-green-800 text-white px-5 py-3 rounded-lg'>
              Accept
            </button>
          </div>          
        ))}
      </div>
    </div>
  )
}

export default Notification
