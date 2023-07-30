'use client'
import React from 'react'
import Image from 'next/image'
import vidweb from '/public/vidwebpng.png'

const projects =[
  {
    id:"Youtube",
    title:"Youtube Clone",
    description:"Welcome to TubeXperience, the ultimate YouTube clone with a fresh and modern UI designed for an immersive video-watching experience. Discover the latest and greatest content from creators worldwide with ease, as TubeXperience offers a streamlined interface for browsing and watching new videos. Get ready to dive into a world of captivating content like never before!",
    img: require('/public/vidwebpng.png'),
  },
  {
    id:"TicTacToe",
    title:"TicTacWeb",
    description:"Welcome to TicTacWeb, a revamped Tic Tac Toe website featuring a brand new UI for an exciting gaming experience. Play the classic game of Xs and Os with a modern twist, where the sleek interface enhances your gaming pleasure. Challenge your friends or take on our smart AI for hours of fun and strategic gameplay. Get ready to relive the nostalgia of Tic Tac Toe like never before on TicTacWeb",
    img: require('/public/tic.png'),
  }
  ,
  {
    id:'Youtube1',
    title:"DelightBites",
    description:"As a front-end developer, I've created DelightBites, a food catering website with a user-friendly interface. The standout feature is a personalized menu builder, allowing users to customize catering selections. In the price section, transparent and affordable packages are offered, tailored to various party sizes. DelightBites guarantees a seamless experience and mouthwatering delights for all occasions.",
    img: require('/public/foodwebsite.png'),
  },
  
]
  


const page = () => {
  return (
    

    <div id='iterator' className='my-14 w-6xl flex flex-wrap flex-row justify-center'>

    {
      projects.map((project) => (
        <div key={project.id} className=' m-6 p-4 h-96 w-80 backdrop-blur-xl hover:scale-110 hover:ease-in duration-300 rounded-sm border-4  border-slate-50 hover:border-slate-400 hover:shadow-black hover:shadow-2xl'>
        <div >
        <Image height={500} width={500} src={project.img}/>
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