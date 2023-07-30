'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useState} from 'react';
import image from '/public/image.png'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
  return (
        <div className='flex flex-row justify-between p-2 max-w-6xl  items-center' >
           <Link href='/'> <Image alt='logo' width={150} height={150} src={image} /></Link>
            <div className=' max-sm:hidden flex flex-row justify-between '>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100  ' href="/">HOME</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 '  href="/projects">PROJECTS</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 '  href="/about">ABOUT</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 ' href="/contact">CONTACT</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100' target='_blank' href="https://drive.google.com/file/d/1xjETO_dvXm88Ih5e7A1o0PML2Am264v8/view?usp=sharing">RESUME</Link>
            </div>
            <div className='max-sm:flex hidden items-center'>
            <button className="outline-none mobile-menu-button" onClick={() => setShowMenu(!showMenu)}>
		    <svg
			className="w-10 h-8 mr-14 text-gray-500"
			x-show="!showMenu"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		    <path d="M4 6h16M4 12h16M4 18h16"></path>
		    </svg>
	        </button>

            {showMenu && 
            <div className='flex flex-col justify-center absolute text-slate-50 top-20 right-16 border-2 border-slate-200 backdrop-blur-md z-20 py-5 px-3  rounded-2xl w-1/2 align-center ' >
            <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2 hover:ease-in duration-100 hover:text-slate-100 ' href="/">HOME</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2  hover:ease-in duration-100 hover:text-slate-900 '  href="/projects/">PROJECTS</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2  hover:ease-in duration-100 hover:text-slate-100 '  href="/about">ABOUT</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2 h hover:ease-in duration-100 hover:text-slate-100 ' href="/contact">CONTACT</Link>
                <Link  onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2   hover:ease-in duration-100 hover:text-slate-100' target='_blank' href="https://drive.google.com/file/d/1xjETO_dvXm88Ih5e7A1o0PML2Am264v8/view?usp=sharing">RESUME</Link>
            </div>}




            </div> 
        </div>
  )
}

export default NavBar