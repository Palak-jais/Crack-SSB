import React from 'react'
import Layout from '../../components/layout'
import Footer from '../../components/ui/footer'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Layout/>
      <div className=''>
        <div className='text-center'>
         <h1 className='text-3xl text-blue-700 font-semibold m-10'>Welcome to Crack SSB !</h1>
         <Link href="/explore" className='bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:opacity-75'>Get Started for Free </Link>
        </div>
        </div>     
      <Footer/>
    </main>
  )
}
