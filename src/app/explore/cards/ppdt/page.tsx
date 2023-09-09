"use client"
import React from 'react';
import pictures from '../../../../data/ppdt';
import styles from '../cards.module.css';
import Layout from '../../../../../components/ui/layout';
import Footer from '../../../../../components/ui/footer';
import Popup from 'reactjs-popup';
import Timer from '../../../../../components/ui/timer';
import Link from 'next/link';
export default function Ppdt(){
  return <>
  <Layout/>
  <div className='flex flex-wrap justify-center'>
  <Link href='/explore/cards/wat' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Word Association Test</Link>
  <Link href='/explore/cards/lec' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Lecturette</Link>
  <Link href='/explore/cards/gd' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Group Discussion</Link>
  <Link href='/explore/cards/srt' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Situation Reaction Test</Link>
  <Link href='/explore/cards/gto' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Ground Task</Link>
  <Link href='/explore/cards/interview' className='bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 hover:opacity-75 m-1 font-mono'>Interview</Link>
  </div>
  <h1 className='text-xl bg-blue-500 text-white  font-bold px-4 py-2 rounded-md mt-3 text-center font-mono'>PICTURE PERCEPTION AND DISCUSSION</h1>
  <div className='flex flex-wrap p-5 justify-center'>
  {
    pictures.map((image)=>{
        return <div className='lg:w-1/4 pr-2 pl-2 md:w-1/3 sm:w-1/2 p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] m-4'>
            <img className={styles.img}src={image.images}/>
            <div className={styles.info}>
            <div>
            <Popup trigger={<button className='bg-blue-500 text-white px-4 py-2  rounded-md ml-2 hover:opacity-75'>Practice</button>} 
               modal>
              <div className={styles.popup}>
              <img  className={styles.popupimg} src={image.images}/>
              <Timer/>
              </div>
             </Popup>   
             </div>
           <span className='text-l text-[#FF0000] font-bold'>5 min</span>
            </div>
            </div>
    })
  }
   </div>
   <Footer/>
  </>
}
