"use client"
import React from 'react';
import topics from '../../../../data/gd';
import styles from '../cards.module.css';
import Layout from '../../../../../components/ui/layout';
import Footer from '../../../../../components/ui/footer';
import Popup from 'reactjs-popup';
import Timer from '../../../../../components/ui/timer';
import Link from 'next/link';
export default function Gd(){
  return <>
  <Layout/>
  <div className='flex flex-wrap justify-center'>
  <Link href='/explore/cards/ppdt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Picture Perception and Description</Link>
  <Link href='/explore/cards/wat' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Word Association Test</Link>
  <Link href='/explore/cards/lec' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Lecturette</Link>
  <Link href='/explore/cards/gd' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Group Discussion</Link>
  <Link href='/explore/cards/interview' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Interview</Link>
  <Link href='/explore/cards/srt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Situation Reaction Test</Link>
  </div>
  <h1 className='text-xl bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 text-center font-mono'>GROUP DISCUSSION</h1>
  <p className='h-100 text-center p-60'>Things to come..</p>
   <Footer/>
  </>
}
