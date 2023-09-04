"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import {TbLayoutNavbarExpand} from 'react-icons/tb';

const Layout = () => {
  const [isDivActive, setIsDivActive] = useState(false);
   const toggle=()=>{
         setIsDivActive(!isDivActive);
  }
  return (
    <nav className="w-full">
     <div className='flex justify-between'>
        <img
                src="/icon.png"
                alt="logo"
                style={{ width: '8vh', height:'8vh' }}
              />
              <ul className={styles.routes}>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/">HOME</Link>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/explore">EXPLORE</Link>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/login">LOGIN</Link>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/signup">REGISTER</Link>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/profile">PROFILE</Link>
              <Link className=" pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/logout">LOGOUT</Link>
              </ul>
             <h1 className={styles.dropdown} onClick={toggle}>
                <TbLayoutNavbarExpand/>
              </h1>
     </div>
     <ul className={isDivActive ? `${styles.menuActive}` : `${styles.menu}`}>
              <Link className="block  pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/">HOME</Link>
              <Link className="block pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/explore">EXPLORE</Link>
              <Link className="block pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/login">LOGIN</Link>
              <Link className="block pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/signup">REGISTER</Link>
              <Link className="block pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/profile">PROFILE</Link>
              <Link className="block pl-4 mt-2 text-white font-bold font-mono bg-blue-500 hover:opacity-75 " href="/logout">LOGOUT</Link>           
              </ul>
            
    </nav>
  );
};

export default Layout;
