'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const sections = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Steps', id: 'steps' },
  { title: 'Time and Space Complexity', id: 'complexity' },
  { title: 'Examples', id: 'examples' },
];

function RightSidebar() {
  const searchParams = useSearchParams();
  const [algorithm, setAlgorithm] = useState(null);
  //http://localhost:3000/?algorithm=bubblesort
  useEffect(() => {
    const algo = searchParams.get('algorithm'); 
    setAlgorithm(algo);
  }, [searchParams]);

  return (algorithm && 
    <div className="fixed top-[50%] right-5 w-64 bg-black ring-2 rounded-2xl ring-slate-500 text-white p-5 shadow-lg flex flex-col items-center justify-center h-auto transform -translate-y-1/2">
      {algorithm && (
        <>
          <h2 className="text-xl font-bold mb-4 text-center">
            {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
          </h2>
          <hr className='text-white bg-white ring-white w-full mb-4' />
          
          <ul className="space-y-2 w-full">
            {sections.map((section) => (
              <li key={section.id} className="w-full">
                <a
                  href={`#${section.id}`}
                  className="block p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white text-center"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default RightSidebar;
