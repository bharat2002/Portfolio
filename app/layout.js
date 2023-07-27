import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

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
      <body className='max-w-6xl mx-auto' >
      <NavBar/>
      {children}
      </body>
    </html>
  )
}
