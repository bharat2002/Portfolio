import React from 'react'

const CopyrightText = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-800 p-4 text-sm'>
      <p>
        Designed and Developed by Bharat Kumar Paliwal
      </p>
      <p>
       Copyright {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default CopyrightText