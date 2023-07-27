import React from 'react'
import Image from 'next/image'
import vidweb from '/public/vidwebpng.png'

const page = () => {
  return (
    <div className='m-14 w-6xl flex flex-col items-start'>
        <div className='p-4 h-96 w-80 backdrop-blur-xl hover:scale-110 hover:ease-in duration-300 rounded-sm border-4  border-slate-50 hover:border-slate-400 hover:shadow-black hover:shadow-2xl'>
        <div>
        <Image height={500} width={500} src={vidweb}/>
        </div>
        <div className='overflow-y-scroll h-3/5 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-300 flex flex-col text-hereis p-4'>
          <p className='text-center font-bold text-purple-600 text-2xl'>Youtube Clone</p>
          <p className='text-justify text-md'>This is currently an ongoing project. It is a full stack project with both frontend and backend integration which is fully responsive. responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App.</p>
        </div>
        </div>
    </div>
  )
}

export default page