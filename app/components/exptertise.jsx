import React from 'react';

function Expertise({ creator }) {
  return (
    <div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg ring-2 ring-gray-600 hover:ring-gray-400 transition duration-300 w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Expertise</h2>
        <div className="grid grid-cols-3 gap-4 mt-2">
          {creator.map((skill, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-700 p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-2">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 mr-2"
              />
              <span className="text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
