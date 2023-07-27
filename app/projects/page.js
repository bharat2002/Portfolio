import React from 'react'
import Image from 'next/image'
import vidweb from '/public/vidwebpng.png'

const page = () => {
  return (
    <div className='mx-14 w-6xl flex flex-col items-start'>
        <div className='p-4 h-96 w-80 bg-slate-700  rounded-sm
         border-2 hover:border-4 border-slate-50 hover:border-slate-400 hover:shadow-black hover:shadow-2xl'>
        <div>
        <Image height={500} width={500} src={vidweb}/>
        </div>
        <div className=' text-hereis p-4'>
          Youtube Clone
        </div>
        </div>
    </div>
  )
}

export default page