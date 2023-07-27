'use client'
import React from 'react'
import Image from 'next/image'
import vidweb from '/public/vidwebpng.png'

const projects =[
  {
    id:"Youtube3",
    title:"Youtube Clone",
    description:"1Youtube Clone",
    img: '/public/vidwebpng.png',
  },
  {
    id:"Youtube2",
    title:"Youtube Clone",
    description:"2Youtube Clone",
    img: '/public/vidwebpng.png',
  }
  ,
  {
    id:'Youtube1',
    title:"Youtube Clone",
    description:"Youtube Clone",
    img: '/public/vidwebpng.png',
  },
  
]
  


const page = () => {
  return (
    

    <div id='iterator' className='my-14 w-6xl flex flex-wrap flex-row justify-center'>

    {
      projects.map((project) => (
        <div key={project.id} className=' m-6 p-4 h-96 w-80 backdrop-blur-xl hover:scale-110 hover:ease-in duration-300 rounded-sm border-4  border-slate-50 hover:border-slate-400 hover:shadow-black hover:shadow-2xl'>
        <div >
        <Image height={500} width={500} src={require('/public/vidwebpng.png')}/>
        </div>
        <div className='overflow-y-scroll h-3/5 scrollbar-thin scrollbar-rounded-full scrollbar-thumb-purple-600  scrollbar-track-gray-300 flex flex-col text-hereis pr-2 py-4'>
          <p className='text-center font-bold text-purple-600 text-2xl'>{project.title}</p>
          <p className='text-justify text-md'>{project.description}</p>
        </div>
        </div>

      ))
     }
        </div>

  )
}

export default page