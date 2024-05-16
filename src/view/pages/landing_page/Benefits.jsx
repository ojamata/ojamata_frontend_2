import React from 'react'
import {benefits} from '../../../data/benefits'

const Benefits = () => {
  return (
    <div className='flex flex-col'>
        <div className='lg:flex items-center justify-center pt-20 gap-20 '>
            {benefits.map((benefit, index) => (
                <div className='flex gap-5 lg:mb-0 mb-10 items-center justify-center' key={index}>
                    <img src={benefit.icon}  alt=''/>
                    <div className=' w-60 gap-4'>
                        <h3>{benefit.title}</h3>
                        <p className=' font-extralight'>{benefit.text}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className=' px-60 py-10'>
            <hr/>
        </div>
    </div>
    
  )
}

export default Benefits
