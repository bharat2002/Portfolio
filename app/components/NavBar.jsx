'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useState} from 'react';
import image from '/public/image.png'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
  return (
        <div className='flex flex-row justify-between p-2 items-center' >
            <Image width={150} height={150} src={image} />
            <div className=' max-sm:hidden flex flex-row justify-between '>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100  ' href="/">HOME</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 '  href="/projects">PROJECTS</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 '  href="/">ABOUT</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100 ' href="/">CONTACT</Link>
                <Link className='px-2 py-2 mx-2 hover:text-slate-100 hover:scale-125 hover:ease-in duration-100' href="/resume/">RESUME</Link>
            </div>
            <div className='max-sm:flex hidden items-center'>
            <button className="outline-none mobile-menu-button" onClick={() => setShowMenu(!showMenu)}>
		    <svg
			className="w-10 h-8 text-gray-500"
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
            <div className='flex flex-col justify-center absolute top-20 right-0 backdrop-blur-md z-20 py-5 px-3 bg-slate-900 rounded-xl w-1/3 align-center ' >
            <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2 hover:ease-in duration-100 hover:text-slate-100 ' href="/">HOME</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2  hover:ease-in duration-100 hover:text-slate-100 '  href="/">PROJECTS</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2  hover:ease-in duration-100 hover:text-slate-100 '  href="/">ABOUT</Link>
                <Link onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2 h hover:ease-in duration-100 hover:text-slate-100 ' href="/">CONTACT</Link>
                <Link  onClick={() => setShowMenu(!showMenu)} className='px-2 py-2 mx-2   hover:ease-in duration-100 hover:text-slate-100' href="/resume">RESUME</Link>
            </div>}




            </div> 
        </div>
  )
}

export default NavBar