import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Layout = () => {
  return (
    <nav className="w-full">
     <div className='flex justify-between'>
        <img
                src="/icon.png"
                alt="logo"
                style={{ width: '8vh', height:'8vh' }}
              />
              <ul className='flex p-5 font-mono'>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/">HOME</Link>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75 font-mono" href="/explore">EXPLORE</Link>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75" href="/login">LOGIN</Link>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75" href="/signup">REGISTER</Link>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75" href="/profile">PROFILE</Link>
              <Link className="text-l pl-4 pl-4 text-blue-700 font-bold hover:opacity-75" href="/logout">LOGOUT</Link>
              </ul>
     </div>
    </nav>
  );
};

export default Layout;
