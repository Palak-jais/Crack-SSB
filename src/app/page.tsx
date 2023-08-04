import React from 'react'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
    <h1 >Crack SSB!</h1>
        <div className="max-w-screen-xl w-full mx-auto flex-wrap justify-center gap-8 p-4 ">
           <div className='text-center text-4xl'>
            <h2>Explore.</h2>
           </div>
           <div className='text-center text-sm mt-4'>         
            <p>Push your limitations to become a defence officer.</p>
           </div>
           <div  className='text-center mt-5'>
           <button className='bg-black text-white px-4 py-2 rounded-md'>Get Started for Free </button>
           </div>
           <div className="flex flex-wrap p-10">
          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
            <div className=' m-2 p-1'>
               <img
                src="/ppdt.jpg"
                alt="logo"
                style={{ width: '40vh', height:'30vh' }}
              />
               <h1 className='mt-1'>PPDT</h1>
                 <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>

          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="/gd.png"
                alt="logo"
                style={{ width: '40vh', height:'30vh' }}
              />
               <h1 className='mt-1'>GD</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>

          <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="/lecturete.png"
                alt="logo"
                style={{ width: '40vh', height:'30vh' }}
              />
               <h1 className='mt-1'>Lecturette</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>

          <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="/interview.jpg"
                alt="logo"
                style={{ width: '40vh', height:'30vh' }}
              />
               <h1 className='mt-1'>Interview</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>
          <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="/srt.png"
                alt="logo"
                style={{width: '40vh', height:'30vh'}}
              />
               <h1 className='mt-1'>SRT</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>
          <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="/wat.jpg"
                alt="logo"
                style={{ width: '40vh', height:'30vh'}}
              />
               <h1 className='mt-1'>WAT</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>
          <div className="lg:w-1/3 pl-4 md:w-1/2 sm:w-1/2 p-2">
          <div className='m-2 p-1'>
               <img
                src="ground.jpg"
                alt="logo"
                style={{ width: '40vh', height:'30vh' }}
              />
               <h1 className='mt-1'>GTO</h1>
               <h2 className='mt-3 text-xs text-[#808080]'>CRM</h2>
              <p className='mt-3 text-xs text-[#808080]'>
              Send your Wiza contacts to salesforce as either leads or contacts.
                </p>
            </div>
          </div>
         
        </div>
      </div>
    </main>
  )
}
