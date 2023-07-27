import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bharat_Portfolio',
  description: 'Portfolio created By Bharat Kumar Paliwal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='max-w-6xl mx-auto' >
      <NavBar/>
      {children}
      </body>
    </html>
  )
}
