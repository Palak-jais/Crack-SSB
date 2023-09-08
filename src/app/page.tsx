"use client"
import React from 'react'
import Layout from '../../components/ui/layout'
import Footer from '../../components/ui/footer'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
export default function Home() {
  const chatUrl:string="https://ssbchat.vercel.app/"
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <div className='custombg'
       >
         <Layout/>
        <div className='header'>
         <div className='home-text'>
         <div className='typed'>
        <Typewriter
     options={{
    strings: ['Hello Cadet,Welcome to Crack SSB!','Ace your preparation here!', 'All solution at one platform!'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
        <div className='links'>
        <Link href="/explore" className='bg-blue-500 text-white font-bold px-2 py-2 rounded-md hover:opacity-75 ml-10 mr-10 mt-2 mb-2 font-mono sm: ml-5 mr-5 px-5'>Get Started for Free </Link>
         <Link href={chatUrl} className='bg-blue-500 text-white font-bold px-2 py-2 rounded-md hover:opacity-75 ml-10 mr-10 mt-2 mb-2 font-mono sm: px-5 mr-5 ml-5'>Ask AI about SSB </Link>
         </div>
         </div>
         <div className='home-image'>
         <img
         className='home-image'
          src="/landing.png"
          alt="logo"
          style={{ width:'100vh', height:'50vh'}}
        />
        </div>
        </div>
        </div>    
        <h1 className='text-center font-bold text-xl m-5 sm:mt-20'> OUR FEATURES</h1>
        <div className='flex flex-wrap m-2 sm:m-5'>
        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <h1 className='m-2 font-bold text-center'>DISCUSS</h1>
         <p className='text-l font-bold p-2 text-[#808080]'>Discuss about topics as per sheduled timer as happening in ssb.</p>
      </div>
    </div>
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <h1 className='m-2 font-bold text-center'>LEARN</h1>
         <p className='text-l font-bold p-2 text-[#808080]'>Discuss about topics as per sheduled timer as happening in ssb.</p>
      </div>
    </div> 
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
         <h1 className='m-2 font-bold text-center'>EXPLORE</h1>
         <p className='text-l font-bold p-2 text-[#808080]'>Discuss about topics as per sheduled timer as happening in ssb.</p>
      </div>
    </div>
    <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
    <div className='m-2 p-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>  
         <h1 className='m-2 font-bold text-center'>PRACTICE</h1>
         <p className='text-l font-bold p-2 text-[#808080]'>Discuss about topics as per sheduled timer as happening in ssb.</p>
      </div>
    </div>
    </div>
      <Footer/>
    </main>
  )
}
