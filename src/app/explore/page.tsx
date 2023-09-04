import React from 'react'
import Link from 'next/link'
import Layout from '../../../components/ui/layout'
import Footer from '../../../components/ui/footer'
export default  function Explore(){
  const chatUrl:string="https://ssbchat.vercel.app/"
    return <>
    <Layout/>
    <div className='text-center '>
        <h1 className='text-center mb-5 text-xl text-blue-700 font-bold font-mono md:text-2xl'>
            Explore to Ace your personality!
        </h1>
        <Link href={chatUrl} className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-5 hover:opacity-75 m-5 font-mono'>Ask AI about SSB </Link>
    </div>
    <div className="flex flex-wrap p-10">
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
      <div className=' m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/ppdt.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh' }}
        />
         <h1 className='mt-1'>PPDT</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>

    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/gd.png"
          alt="logo"
          style={{  width: '100vh', height:'25vh' }}
        />
         <h1 className='mt-1'>GD</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>

    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/lecturete.png"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='mt-1'>Lecturette</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>

    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/interview.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='mt-1'>Interview</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/srt.png"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='mt-1'>SRT</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="/wat.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='mt-1'>WAT</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>
    <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <img
          src="ground.jpg"
          alt="logo"
          style={{ width: '100vh', height:'25vh'}}
        />
         <h1 className='mt-1'>GTO</h1>
        <p className='mt-3 text-xs text-[#808080]'>
        Send your Wiza contacts to salesforce as either leads or contacts.
          </p>
      </div>
    </div>
   </div>
   <Footer/>
   </>
}