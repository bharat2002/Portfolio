import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import CopyrightText from './components/CopyrightText'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bharat_Portfolio',
  description: 'Portfolio created By Bharat Kumar Paliwal',
  favicon: '/public/image.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel='shortcut icon' href='/public/image.ico'/>
      </head>
      <body className='max-w-6xl max-sm:max-w-full mx-auto' >
      <NavBar/>
      {children}
      <CopyrightText/>
      </body>
    </html>
  )
}
