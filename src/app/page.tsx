"use client"
import React from 'react'
import Layout from '../../components/ui/layout'
import Footer from '../../components/ui/footer'
import Link from 'next/link'
import TypingEffect from '../../components/ui/typing'
export default function Home() {
  const chatUrl:string="https://ssbchat.vercel.app/"
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <div className='custombg'
       >
         <Layout/>
        <div className='header'>
         <h1 className='text-2xl text-blue-700 font-semibold m-10  md:text-3xl'>Welcome to Crack SSB!</h1>
         <div className='text-center flex flex-col sm:block'>
         <Link href="/explore" className='bg-blue-500 text-white font-bold px-2 py-2 rounded-md hover:opacity-75 ml-10 mr-10 mt-2 mb-2 font-mono sm: ml-5 mr-5 px-5'>Get Started for Free </Link>
         <Link href={chatUrl} className='bg-blue-500 text-white font-bold px-2 py-2 rounded-md hover:opacity-75 ml-10 mr-10 mt-2 mb-2 font-mono sm: px-5 mr-5 ml-5'>Ask AI about SSB </Link>
         </div>
        </div>
        <div className='typed'>
        <TypingEffect/>
        </div>
        </div>     
      <Footer/>
    </main>
  )
}
