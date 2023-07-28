import React from 'react'
import Image from 'next/image'
import about from '/public/abouthero.png'

const page = () => {
  return (
    <div className='mx-14 w-6xl flex flex-col justify-center items-center overflow-hidden'> 
    <div className='flex flex-row justify-center items-center  max-lg:flex-col '>
    <p className='flex w-3/4 items-center'>I m a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices</p>
    <Image width={500} src={about}/>
    </div>
    <div className="relative flex w-6xl overflow-hidden">
  <div className="py-12 overflow-x-hidden animate-marquee whitespace-nowrap">
    <span className="text-2xl mx-4">Marquee Item 1</span>
    <span className="text-2xl mx-4">Marquee Item 2</span>
    <span className="text-2xl mx-4">Marquee Item 3</span>
    <span className="text-2xl mx-4">Marquee Item 4</span>
    <span className="text-2xl mx-4">Marquee Item 5</span>
  </div>
  <div className="py-12 overflow-x-hidden animate-marquee whitespace-nowrap">
    <span className="text-2xl mx-4">Marquee Item 1</span>
    <span className="text-2xl mx-4">Marquee Item 2</span>
    <span className="text-2xl mx-4">Marquee Item 3</span>
    <span className="text-2xl mx-4">Marquee Item 4</span>
    <span className="text-2xl mx-4">Marquee Item 5</span>
  </div>
  </div>
        
    </div>
  )
}

export default page