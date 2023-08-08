import React from 'react';
import Link from 'next/link';

const Layout = () => {
  return (
    <nav className="w-full">
     <div className='flex justify-between'>
        <img
                src="/icon.png"
                alt="logo"
                style={{ width: '8vh', height:'8vh' }}
              />
              <ul className='flex p-5'>
              <Link className="pl-4 pl-4 text-blue-500 font-semibold hover:opacity-75" href="/">HOME</Link>
                <Link className="pl-4 pl-4 text-blue-500 font-semibold hover:opacity-75" href="/login">LOGIN</Link>
                <Link className="pl-4 pl-4 text-blue-500 font-semibold hover:opacity-75" href="/signup">REGISTER</Link>
                <Link className="pl-4 pl-4 text-blue-500 font-semibold hover:opacity-75" href="/profile">PROFILE</Link>
              </ul>
     </div>
    </nav>
  );
};

export default Layout;
