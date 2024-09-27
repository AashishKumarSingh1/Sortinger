'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SortingAlgorithms = ({ algorithms, handleActiveStateChange  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const router=useRouter();
  const nextAlgorithm = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % algorithms.length);
    handleActiveStateChange(algorithms[(currentIndex + 1) % algorithms.length].title); 
  };

  const prevAlgorithm = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + algorithms.length) % algorithms.length);
    handleActiveStateChange(algorithms[(currentIndex - 1 + algorithms.length) % algorithms.length].title); 
  };
function handleClick(){
    router.push(`/sorting?algorithm=${currentAlgorithm.title}`)
}
  const currentAlgorithm = algorithms[currentIndex];

  return (
    <div className="p-6 rounded-lg shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold text-center mb-4">Sorting Algorithms</h2>
      
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevAlgorithm} className="bg-red-600 text-white p-2 rounded hover:bg-red-500 transition duration-300">
          &lt; Previous
        </button>
        <button onClick={nextAlgorithm} className="bg-red-600 text-white p-2 rounded hover:bg-red-500 transition duration-300">
          Next &gt;
        </button>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg shadow-md transition duration-300 ring-2 ring-red-700 hover:ring-rose-600">
        <h3 className="text-xl font-bold text-cyan-500">{currentAlgorithm.title}</h3>
        <p className="mt-2">{currentAlgorithm.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold text-cyan-500">Complexity:</h4>
          <p>Time: {currentAlgorithm.complexity.time}</p>
          <p>Space: {currentAlgorithm.complexity.space}</p>
        </div>
        <button className='w-full mt-3 bg-red-600 text-white justify-end p-2 items-center rounded-lg' onClick={handleClick}>Learn More...</button>
      </div>
    </div>
  );
};

export default SortingAlgorithms;
