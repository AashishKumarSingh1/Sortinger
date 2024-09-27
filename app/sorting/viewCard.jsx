import React, { useEffect, useState } from "react";
import sortData from "@/app/sorting.json";
import appData from '@/app/home.json'
import FormExample from "./formexample";
function ViewCard({ algorithmName }) {
  const [algorithm, setAlgorithm] = useState(null);
  const { title, motto, description, creator } = appData.app;
  useEffect(() => {
    const foundAlgorithm = sortData.algorithms.find(
      (algo) => algo.name === algorithmName
    );
    setAlgorithm(foundAlgorithm);
  }, [algorithmName]);

  if (!algorithm) {
    return <p className="text-white text-center">Loading...</p>;
  }

  return (
    <div className="ring-2 ring-gray-300 text-white p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 m-4">

        <div className="ring-red-500 ring-2 p-4 shadow-md rounded-lg mb-4 ">
        <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg italic mt-2">{motto}</p>
      </div>

      <p className="mb-4">{description}</p>
        </div>

      <div className="ring-2 ring-red-500 rounded-lg p-4">
        <h2 className="text-3xl font-semibold text-center mb-4 text-cyan-400">
          {algorithm.name}
        </h2>
        <p className="mb-6 text-gray-300">{algorithm.introduction}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-5 mb-5 w-full gap-5">
        <div className="ring-2 ring-red-600 rounded-lg p-4 basis-1/2">
          <h3 className="font-semibold text-lg mt-4 text-cyan-300">Steps:</h3>
          <ol className="list-decimal list-inside mb-6 text-gray-200">
            {algorithm.steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="ring-2 ring-red-600 rounded-xl basis-1/2 p-4 ">
        <h3 className="font-semibold text-lg">Time Complexity:</h3>
      <ul className="list-disc list-inside mb-6 text-gray-200">
        <li>
          Best:{" "}
          <span className="font-medium">{algorithm.timeComplexity.best}</span>
        </li>
        <li>
          Average:{" "}
          <span className="font-medium">
            {algorithm.timeComplexity.average}
          </span>
        </li>
        <li>
          Worst:{" "}
          <span className="font-medium">{algorithm.timeComplexity.worst}</span>
        </li>
      </ul>
      <hr className="border-2 border-red-600" />

      <h3 className="font-semibold text-lg mt-4">Space Complexity:</h3>
      <p className="text-gray-200 font-medium">{algorithm.spaceComplexity}</p>
        </div>
      </div>

      <FormExample />
    </div>
  );
}

export default ViewCard;
