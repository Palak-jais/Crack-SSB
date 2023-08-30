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
      <Layout/>
      <div className='custombg'
       >
        <div className='header'>
         <h1 className='text-3xl text-blue-700 font-semibold m-10'>Welcome to Crack SSB !</h1>
         <Link href="/explore" className='bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-5 hover:opacity-75 m-5'>Get Started for Free </Link>
         <Link href={chatUrl} className='bg-blue-500 text-white font-bold px-4 py-2 rounded-md mt-5 hover:opacity-75 m-5'>Ask AI about SSB </Link>
        </div>
        <div className='typed'>
        <TypingEffect/>
        </div>
        </div>     
      <Footer/>
    </main>
  )
}
