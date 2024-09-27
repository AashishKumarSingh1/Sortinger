import React from 'react';
import Link from 'next/link';
function Topbar() {
  return (
    <div className="bg-black ring-4 ring-blue-700 text-white py-4 shadow-md z-[10] sticky flex flex-col md:flex-row items-center justify-center gap-5 px-4">
      <Link className="text-3xl font-bold text-center mb-2 md:mb-0" href='/'>
        Sortinger
      </Link>
      {/* <div className='flex flex-row justify-center items-center'>
        <span className='text-cyan-700 text-xl md:text-2xl animate-pulse font-semibold'>
          *Sort kiya kya
        </span>
      </div> */}
    </div>
  );
}

export default Topbar;
