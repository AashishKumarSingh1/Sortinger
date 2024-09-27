'use client'
import React from "react";
import { useState,useEffect } from "react";
import SortingAlgorithms from "./sortingAlgorithm";
import Sidebar from "../Navbars/sidebar";
const AppInfoCard = ({ appData }) => {
  const { title, motto, description, creator } = appData.app;
  const [active, setActive] = useState('Bubble Sort');
  console.log(active)
  const handleActiveStateChange = (newState) => {
    setActive(newState);
  };
  return (
    <div className="justify-between flex flex-row">
    <div className="fixed left-5 ">
    <Sidebar activeState={active} />
    </div>
    <div className="ring-2 ring-gray-300 text-white p-4 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 xl:ml-[20%]">
        <div className="ring-red-500 ring-2 p-4 shadow-md rounded-lg mb-4 ">
        <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg italic mt-2">{motto}</p>
      </div>

      <p className="mb-4">{description}</p>
        </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md ring-red-700 ring-2 hover:ring-rose-600">
          <h2 className="text-xl font-semibold text-cyan-400">Creator</h2>
          <div className="flex items-center mt-2">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-16 h-16 rounded-full mr-4 border-2 border-purple-600 shadow-md hover:scale-105"
            />
            <div>
              <h3 className="text-lg text-center">{creator.name}</h3>
              <p className="text-sm">{creator.bio}</p>
            </div>
          </div>

          {/* <h2 className="text-xl font-semibold mt-4">Socials</h2> */}
          <div className="flex space-x-3 mt-2">
            <a
              href={creator.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={creator.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md ring-red-700 ring-2 hover:ring-rose-600">
          <h2 className="text-xl font-semibold text-cyan-400">Interests:</h2>
          <div className="flex flex-wrap mt-2 flex-col ">
            {creator.interests.map((interest, index) => (
              <div key={index} className="flex items-start flex-col mr-4 mb-2">
                <span className="font-semibold">{''} </span>
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-semibold">Expertise</h2>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {creator.expertise.map((skill, index) => (
              <div key={index} className="flex items-center mb-2">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 mr-2"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className="mt-4 "> <SortingAlgorithms algorithms={appData.sortingAlgorithms} handleActiveStateChange={handleActiveStateChange} /></div>
      {/* <Sidebar activeState={active} /> */}
    </div>
    
    </div>
  );
};

export default AppInfoCard;
