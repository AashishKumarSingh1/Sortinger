'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import Topbar from './topbar';
const sortingAlgorithms = [
  'Bubble Sort',
  'Selection Sort',
  'Insertion Sort',
  'Merge Sort',
  'Quick Sort',
  'Heap Sort',
  'Counting Sort',
  'Radix Sort',
  'Bucket Sort',
];

function Sidebar({ activeState }) {
  const [active, setActive] = useState('Bubble Sort');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActive(activeState);
  }, [activeState]);

  function handleClick(algo) {
    setActive(algo);
    router.push(`/sorting?algorithm=${algo}`);
    setIsOpen(false);
  }

  function handleHome() {
    router.push('/');
  }

  return (
    <div className={`relative`}>
      <button
        className="text-white xl:hidden p-2 absolute top-5 left-5 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>
    
      <div className={`bg-black text-white w-64 p-5 shadow-lg ring-2 ring-slate-500 rounded-xl m-4 ${isOpen ? 'absolute' : 'hidden xl:block'}`}>
        <ul className="space-y-2 flex flex-col justify-around h-full">
          <Link className='text-center font-semibold' href={'/'}>
            Sortinger
          </Link>
          {sortingAlgorithms.map((algo, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg transition-all duration-300 ease-in-out border-2 border-transparent cursor-pointer hover:bg-red-600 hover:text-white hover:border-pink-500 ${active === algo ? 'bg-red-600' : ''}`}
            >
              <button onClick={() => handleClick(algo)}>
                {algo}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
