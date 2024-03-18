import React from 'react'

const Buttons = ({text, backgroundColor, textColor, size }) => {
  return (
    <button
        className='px-5 py-2 text-black bg-transparent rounded-lg'
        style={{backgroundColor: backgroundColor, color: textColor, fontSize: size}}
    >
        {text}
    </button>
  )
}

export default Buttons
