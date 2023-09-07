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
      <Footer/>
    </main>
  )
}
