'use client';
import React, { useEffect, useState, Suspense } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ChartDataLabels
);

function FormExample() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState("");
  useEffect(() => {
    const algo = searchParams.get("algorithm");
    setActive(algo);
  }, [searchParams]);

  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sortedNumber, setSortedNumbers] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const number = parseFloat(inputValue);
    if (!isNaN(number)) {
      setNumbers((prev) => [...prev, number]);
      setInputValue("");
    } else {
      alert("Please enter a valid number");
    }
  };

  const data = {
    labels: numbers.map((number) => `${number}`),
    datasets: [
      {
        label: "Numbers",
        data: numbers,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "black",
        },
      },
      datalabels: {
        color: "black",
        anchor: "end",
        align: "end",
        formatter: (value) => value,
      },
    },
  };

  async function handleSorting() {
    try {
      const response = await axios.post(
        `https://sortinger-backend.onrender.com/sort?algorithm=${active}`,
        {
          numbers: numbers,
          algorithm: active,
        }
      );
      const sortedNumbers = response.data.steps;
      setSortedNumbers(sortedNumbers);
    } catch (error) {
      console.error("Error sorting numbers:", error);
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center mt-5 ring-2 ring-red-600 rounded-2xl p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Add Numbers to Visualize the Flow:
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="p-3 border border-red-800 rounded-l-md text-black h-12 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter a number"
          />
          <button
            onClick={handleAddNumber}
            className="bg-red-500 text-white rounded-r-md hover:bg-red-600 transition duration-300 p-4 h-12 flex items-center justify-center shadow hover:shadow-lg"
          >
            Add
          </button>
        </div>

        <div className="mt-4">
          <span className="font-semibold">Input Numbers: [ </span>
          {numbers.map((number, index) => (
            <span key={index}>
              {number}
              {index < numbers.length - 1 ? ", " : ""}
            </span>
          ))}
          <span className="font-semibold"> ]</span>
        </div>

        {numbers.length > 0 && (
          <div className="ring-2 ring-red-600 p-4 rounded-2xl m-4">
            <h3 className="text-xl mb-2">Chart:</h3>
            <Bar data={data} options={options} />
          </div>
        )}

        {sortedNumber.length > 0 && (
          <div className=" p-4 rounded-2xl m-4 flex flex-row flex-wrap justify-around">
            {sortedNumber.map((step, index) => (
              <div key={index} className="mb-4 ring-2 ring-red-600 gap-4 space-4 p-4 rounded-xl">
                <div className="flex flex-row justify-between">
                  <span className="font-semibold text-cyan-500">{`Step ${
                    index + 1
                  }: `}</span>
                  <span className="text-white">{`[ ${step.join(", ")} ]`}</span>
                </div>
                <Bar
                  data={{
                    labels: step.map((_, i) => `${_}`),
                    datasets: [
                      {
                        label: `Step ${index + 1}`,
                        data: step,
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                  height={200}
                />
                <hr />
              </div>
            ))}
          </div>
        )}

        <button
          className="bg-red-700 text-white p-3 w-[90%] rounded-xl m-5 shadow-md hover:bg-red-800 font-semibold"
          onClick={handleSorting}
        >
          Sort
        </button>
      </div>
    </Suspense>
  );
}

export default FormExample;
