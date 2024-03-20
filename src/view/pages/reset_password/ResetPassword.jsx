import React from 'react'

const ResetPassword = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-40 pt-40'>
      <p className=' text-2xl font-bold'>Reset Password</p>
      <input className='border-2 border-black px-4 py-3 rounded-lg' placeholder='Enter the code sent to your email'/>
      <button className=' bg-green-800 text-white px-10 py-5 rounded-lg'>
        Send
      </button>
    </div>
  )
}

export default ResetPassword
