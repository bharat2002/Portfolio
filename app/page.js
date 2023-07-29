import Image from 'next/image'
import heroimg from '/public/herimg.png'
import connect from '/public/connect.png'
import Text from './components/Text';
import Link from 'next/link'
import gitlogo from '/public/gitlogo.png'
import linkedin from '/public/linkedin.png'
import twitter from '/public/twitter.png'


export default function Home() {
  return (
    <>
    <div className=' pt-5 flex flex-row align-center justify-between mb-14 mx-14 font-bold w-6xl h-full max-lg:flex-col ' >
      <div className='flex flex-col items-center  justify-center   '>
      <p className='p-2 text-3xl text-slate-50 text-left max-md:text-lg'>
        Heyyyy.... <span className='wave'>👋</span> <br />
        I&apos;m <span className=' hover:text-blue-100 text-purple-600 '> BHARAT KUMAR PALIWAL
        </span> </p>
      <Text/>
      </div>
      <div className='flex justify-center'>
        <Image src={heroimg} />
      </div>
    </div>
    <div className='mb-24 mt-24 flex flex-row justify-center max-lg:flex-col-reverse items-center'>
    <div className='w-1/2 '>
        <Image src={connect}/>
        
      </div>
    <div className='w-1/2 pt-16 mx-14 w-6xl h-full text-2xl mb-20 italic '>
      <p className=' not-italic text-center text-3xl text-slate-50 mb-7 max-md:text-lg'>LET ME <span className="text-purple-600"> INTRODUCE </span> MYSELF</p>
      <p className='mb-3 max-md:text-sm'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
      <p className='italic mb-3 max-md:text-sm'>I am fluent in classics like <span className="text-slate-50"> JAVA, Javascript and Typescript </span>.</p>
      <p className='mb-3 max-md:text-sm'>My field of Interest&apos;s are building new  Web Technologies and Products.</p>
      <p className='mb-3 max-md:text-sm'>Whenever possible, I also apply my passion for developing products with Modern Javascript Library and Frameworks  like React.js and Next.js</p>
      <p className='mb-3 max-md:text-sm'>I am currently in my final year of bachelor&apos;s degree with a cumulative academic score of 9.72 CGPA.</p>
      </div>
      
    </div>

    <p className='text-center text-3xl text-purple-600 '>Connect With Me On </p>
        <div className='flex flex-row items-center justify-center p-3'>
          <Link className='px-2 py-2 mx-2 hover:text-slate-50 hover:scale-110 hover:ease-in duration-200' href='https://github.com/bharat2002'>
            <Image height={50} width={50} className='rounded-full' src={gitlogo}/>
          </Link>
          <Link className='px-2 rounded-full  py-2 mx-2 hover:text-slate-50  hover:scale-110 hover:ease-in duration-200' href='https://www.linkedin.com/in/bharat-kumar-paliwal-b69533221/'>
          <Image height={50} width={50}  src={linkedin}/>
          </Link>
          <Link className='px-2 py-2 mx-2 hover:text-slate-50 hover:scale-110 hover:ease-in duration-200' href='https://twitter.com/BharatP74720'>
          <Image height={50} width={50} src={twitter}/>
          </Link>
        </div>

    </>
  )
}
