"use client"
import React from 'react';
import topics from '../../../../data/lec';
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
  <Link href='/explore/cards/srt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Situation Reaction Test</Link>
  <Link href='/explore/cards/gto' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Ground Task</Link>
  <Link href='/explore/cards/wat' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Word Association Test</Link>
  <Link href='/explore/cards/gd' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Ground Discussion</Link>
  <Link href='/explore/cards/ppdt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Picture Perception and Description</Link>
  <Link href='/explore/cards/interview' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Interview</Link>
  </div>
  <h1 className='text-xl bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 text-center font-mono'>LECTURETTE</h1>
  <div className='flex flex-wrap p-5 justify-center'>
  {
    topics.map((topic)=>{
        return <div className='lg:w-1/4 pr-2 pl-2 md:w-1/3 sm:w-1/2 p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] m-2'>
            <h1 className='text-center font-bold text-[#808080]'>TOPIC</h1>
              <ol className='font-bold text-l'>
                <li>1.{topic.topic1}</li>
                <li>2.{topic.topic2}</li>
                <li>3.{topic.topic3}</li>
                <li>4.{topic.topic4}</li>
              </ol>
            <div className={styles.info}>
            <div>
            <Popup trigger={<button className='bg-blue-500 text-white px-4 py-2  rounded-md  hover:opacity-75'>Practice</button>} 
               modal>
              <div className={styles.popuplec}>
              <h1 className='text-center font-bold text-[#808080]'>TOPIC</h1>
              <ol className='font-bold text-l p-5'>
                <li>1.{topic.topic1}</li>
                <li>2.{topic.topic2}</li>
                <li>3.{topic.topic3}</li>
                <li>4.{topic.topic4}</li>
              </ol>
              <Timer/>
              </div>
             </Popup>   
             </div>
           <span className='text-l text-[#FF0000] font-bold'>15 min</span>
            </div>
            </div>
    })
  }
   </div>
   <Footer/>
  </>
}
