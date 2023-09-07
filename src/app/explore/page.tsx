import React from 'react'
import Link from 'next/link'
import Layout from '../../../components/ui/layout'
import Footer from '../../../components/ui/footer'
import Typewriter from 'typewriter-effect';
export default  function Explore(){
  const chatUrl:string="https://ssbchat.vercel.app/"
    return <>
    <Layout/>
    <div className='text-center '>
        <Link href={chatUrl} className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-5 hover:opacity-75 m-5 font-mono'>Ask AI about SSB </Link>
    </div>
    <div className="flex flex-wrap p-10">
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
      <div className=' m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
      <Link href='/explore/cards/ppdt'>
         <img
          src="/ppdt.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh' }}
        />
        </Link>
         <h1 className='m-2 font-bold '>PIC PERCEPTION & DESCRIPTION</h1>
         <Link href='/explore/cards/ppdt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Explore</Link>
      </div>
    </div>

    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
      <Link href='/explore/cards/gd'>
         <img
          src="/gd.png"
          alt="logo"
          style={{  width: '100vh', height:'25vh' }}
        />
        </Link>
         <h1 className='m-2 font-bold'>GROUP DISCUSSION</h1>
         <Link href='/explore/cards/gd' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Explore</Link>
      </div>
    </div>

    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/lecturete.png"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='m-2  font-bold'>LECTURETTE</h1>
         <Link href='/explore/cards/lec' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Explore</Link>
        
      </div>
    </div>

    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/interview.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='m-2  font-bold'>Interview</h1>
         <Link href='/explore/cards/interview' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Explore</Link>
        
      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/srt.png"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='m-2  font-bold'>SITUATION REACTION TEST</h1>
         <Link href='/explore/cards/srt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Explore</Link>

      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/wat.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='m-2  font-bold'>WORD ASSOCIATION TEST</h1>
         <Link href='/explore/cards/wat' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-3 font-mono'>Explore</Link>
        
      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="ground.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='m-2 font-bold'>GROUND TASK</h1>
         <Link href='/explore/cards/gto' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-3 font-mono'>Explore</Link>
        
      </div>
    </div>
   </div>
   <Footer/>
   </>
}