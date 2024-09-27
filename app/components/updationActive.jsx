'use client'
import React, { useState } from 'react'
import Sidebar from '../Navbars/sidebar'
import SortingAlgorithms from './sortingAlgorithm'
import appData from '@/app/home.json';
function UpdationActive() {
    const [active, setActive] = useState('');

    const handleActiveStateChange = (newState) => {
      setActive(newState);
    };
  
    return (
      <div className="flex">
        <Sidebar activeState={active} />
        <SortingAlgorithms algorithms={appData.sortingAlgorithms} handleActiveStateChange={handleActiveStateChange} />
      </div>
    );
}

export default UpdationActive
