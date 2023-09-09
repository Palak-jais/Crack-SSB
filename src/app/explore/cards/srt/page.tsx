"use client"
import React from 'react';
//import topics from '../../../../data/srt';
//import styles from '../cards.module.css';
import Layout from '../../../../../components/ui/layout';
import Footer from '../../../../../components/ui/footer';
import Link from 'next/link';
export default function SRT(){
  return <>
  <Layout/>
  <div className='flex flex-wrap justify-center'>
  <Link href='/explore/cards/gd' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Group Discussion</Link>
  <Link href='/explore/cards/wat' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Word Association Test</Link>
  <Link href='/explore/cards/lec' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Lecturette</Link>
  <Link href='/explore/cards/ppdt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Picture Perception and Description</Link>
  <Link href='/explore/cards/gto' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Ground Task</Link>
  <Link href='/explore/cards/interview' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Interview</Link>
  </div>
  <h1 className='text-xl bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 text-center font-mono'>SITUATION REACTION TEST</h1>
  <p className='h-100 text-center p-60'>Things to come..</p>
   <Footer/>
  </>
}
