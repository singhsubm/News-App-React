import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='w-full h-[60vh] flex items-center justify-center flex-col'>

      <div className="loader"></div>
      <div>
        Please Wait...
      </div>
    </div>
  )
}
