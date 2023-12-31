'use client'
import React from 'react'
import Image from 'next/image'
import about from '/public/abouthero.png'



const aboutimages = [

  {

    name:'Java',
    img: require('/public/about/java.svg'),
  },
  {

    name:'React',
    img: require('/public/about/react.svg'),
  }, {
    name:'Next',
    img: require('/public/about/nextjs.svg'),
  }, {
    name:'Figma',
    img: require('/public/about/figma.svg'),
  }, {
    name:'JavaScript',
    img: require('/public/about/javascript-1.svg'),
  },
  {
    name:'Tailwind',
    img: require('/public/about/tailwind.png'),
  },
  {
    name:'C++',
    img: require('/public/about/c.svg'),
  },
  {
    name:'GitHub',
    img: require('/public/about/git.svg'),
  },
  {
    name:'Office',
    img: require('/public/about/office-1.svg'),
  },
  ,
  {
    name:'Python',
    img: require('/public/about/python.svg'),
  },
  {
    name:'VS Code',
    img: require('/public/about/code.svg'),
  }
]

const page = () => {
  return (
    <div className='mx-14 w-6xl flex flex-col justify-center h-[75vh] items-center overflow-hidden'> 
    <div className='flex flex-row justify-between items-center  max-lg:flex-col '>
    <div className='flex flex-col w-1/2 max-lg:w-full  mt-8 '>
    <h1 className='text-3xl text-start pb-4 text-purple-600'>ABOUT ME</h1>
    <p className='flex '>I m a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices</p>
    </div>
    <Image width={300} src={about}/>
    </div>
    <div className=" flex ">
  <div className="flex flex-row py-12 overflow-x-hidden animate-marquee whitespace-nowrap">
   {
     aboutimages.map((image) => (
        <div key={image.name} className='text-center flex flex-col items-center text-slate-50 px-6'>
          {image.name}
          <div className='relative w-12 h-12'>
          <Image priority fill src={image.img}/>
          </div>
        </div>
       
     ))
   }
  </div>
  
 
  </div>
        
    </div>
  )
}

export default page